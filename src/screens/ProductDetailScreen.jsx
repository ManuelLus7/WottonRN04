import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const ProductDetailScreen = ({ route }) => {
  // Obtengo el producto de los parámetros de la ruta
  const { product } = route.params;
  // Creo un estado para mantener los porductos en el carrito
  const [cart, setCart] = useState([]);

  // Creo una función para agregar los prodcutos al carrito
  const addToCart = () => {
    setCart([...cart, product]);
  };

  return (
    <View>
      <Text>{product.name}</Text>
      <Text>{product.description}</Text>
      <Text>Price: ${product.price.toFixed(2)}</Text>
      <Button title="Agregar al Carrito" onPress={addToCart} />
    </View>
  );
};

export default ProductDetailScreen;
