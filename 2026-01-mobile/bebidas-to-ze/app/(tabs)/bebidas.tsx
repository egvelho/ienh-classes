import { Link, useFocusEffect } from "expo-router";
import { useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

export default function BebidasTab() {
  const [drinks, setDrinks] = useState([]);

  async function fetchDrinks() {
    const response = await fetch("https://api.sampleapis.com/beers/ale");
    const data = await response.json();
    setDrinks(data);
  }

  useFocusEffect(() => {
    fetchDrinks();
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={drinks}
        renderItem={({ item }) => (
          <Link href={{ pathname: "/bebida", params: item }}>
            <DrinkItem {...item} />
          </Link>
        )}
      />
    </View>
  );
}

function DrinkItem({ image, name, price }) {
  return (
    <View style={styles.drinkItem}>
      <Image
        source={{ uri: image }}
        resizeMode="contain"
        width={100}
        height={100}
      />
      <View>
        <Text>{name}</Text>
        <Text style={styles.drinkItemPrice}>{price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  drinkItem: { flexDirection: "row", alignItems: "center" },
  drinkItemPrice: { fontSize: 30, fontWeight: "bold" },
});
