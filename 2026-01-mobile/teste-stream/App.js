import { CameraView, useCameraPermissions } from "expo-camera";
import { useState, useRef, useEffect } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import io from "socket.io-client";

const SERVER_URL = "http://192.168.104.172:3000";

export default function App() {
  const [facing, setFacing] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [isStreaming, setIsStreaming] = useState(false);

  const cameraRef = useRef(null);
  const socketRef = useRef(null);
  const streamingActive = useRef(false);

  useEffect(() => {
    socketRef.current = io(SERVER_URL);
    return () => socketRef.current.disconnect();
  }, []);

  if (!permission) return <View />;

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          Precisamos de permissão para usar a câmera
        </Text>
        <Button onPress={requestPermission} title="Conceder Permissão" />
      </View>
    );
  }

  const toggleStreaming = () => {
    const newState = !isStreaming;
    setIsStreaming(newState);
    streamingActive.current = newState;

    if (newState) {
      startLoop();
    }
  };

  const startLoop = async () => {
    while (streamingActive.current) {
      if (cameraRef.current) {
        try {
          const photo = await cameraRef.current.takePictureAsync({
            quality: 0.2,
            base64: true,
            shutterSound: false,
          });

          if (photo && photo.base64) {
            socketRef.current.emit("camera-frame", photo.base64);
          }
        } catch (e) {
          console.error("Erro ao capturar frame:", e);
        }
      }
    }
  };

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setFacing((f) => (f === "back" ? "front" : "back"))}
          >
            <Text style={styles.text}>Inverter</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor: isStreaming ? "red" : "green",
                borderRadius: 10,
              },
            ]}
            onPress={toggleStreaming}
          >
            <Text style={styles.text}>{isStreaming ? "Parar" : "Stream"}</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
  message: { textAlign: "center", paddingBottom: 10 },
  camera: { flex: 1 },
  buttonContainer: {
    position: "absolute",
    bottom: 40,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
  },
  button: {
    padding: 15,
    alignItems: "center",
  },
  text: { fontSize: 18, fontWeight: "bold", color: "white" },
});
