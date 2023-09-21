import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "../constants/Colors";

const ProductCard = ({ product, onPress }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>Precio: ${product.price.toFixed(2)}</Text>
      <Text style={styles.stock}>Stock: {product.stock} units</Text>
      <TouchableOpacity onPress={() => onPress(product)}>
      <Text style={styles.detailsButton}>Ver Detalles</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    width: "48%",
    borderColor: "#ddd",
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 8,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.text,
  },
  description: {
    fontSize: 14,
    color: Colors.text,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.primary,
  },
  stock: {
    fontSize: 14,
    color: Colors.text,
  },
  detailsButton: {
    fontSize: 16,
    color: Colors.primary,
    fontWeight: "bold",
    marginTop: 8,
  },
});

export default ProductCard;
