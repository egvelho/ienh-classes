import { Stack } from "expo-router";
import { useLocalSearchParams } from "expo-router/build/hooks";
import { Image, Text, View } from "react-native";

export default function BebidaScreen() {
  const { name, price, image } = useLocalSearchParams();
  return (
    <>
      <Stack.Screen options={{ title: name }} />
      <View style={{ flex: 1, backgroundColor: "white", padding: 16 }}>
        <Image
          source={{ uri: image }}
          width={100}
          height={100}
          style={{ width: "100%", height: 200, marginBottom: 16 }}
          resizeMode="contain"
        />
        <Text style={{ fontSize: 20 }}>{name}</Text>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>{price}</Text>
      </View>
    </>
  );
}
