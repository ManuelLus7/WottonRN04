import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, Image, StyleSheet } from 'react-native';
import { products } from '../data/ProductsData';

const CartScreen = ({ removeFromCart }) => {
  // Creo un estado para almacenar los elementos en el carrito.
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Simulo que toma 5 productos aleatorios de la lista de productos
    const randomProductIds = getRandomProductIds(5);
    console.log('Random Product IDs:', randomProductIds);
    const randomCartItems = products
      .filter((product) => randomProductIds.includes(product.id))
      .map((product) => ({
        ...product,
        quantity: 1, // Inicio la cantidad en 1
      }));
    console.log('Random Cart Items:', randomCartItems);
    setCartItems(randomCartItems);
  }, []);

  // Creo una Función para obtener IDs aleatorios de productos.
  const getRandomProductIds = (count) => {
    // Obtengo todos los IDs de productos disponibles.
    const productIds = products.map((product) => product.id);
    const randomIds = [];
    while (randomIds.length < count) {
      const randomId = productIds[Math.floor(Math.random() * productIds.length)];
      if (!randomIds.includes(randomId)) {
        randomIds.push(randomId);
      }
    }
    return randomIds;
  };

  // Creo una función para aumentar la cantidad de un producto en el carrito.
  const increaseQuantity = (item) => {
    const updatedCart = [...cartItems];
    const itemIndex = updatedCart.findIndex((cartItem) => cartItem.id === item.id);
  
    if (itemIndex !== -1) {
      updatedCart[itemIndex].quantity += 1;
      setCartItems(updatedCart);
    }
  };
  
  // Creo una función para disminuir la cantidad de un producto en el carrito.
  const decreaseQuantity = (item) => {
    const updatedCart = [...cartItems];
    const itemIndex = updatedCart.findIndex((cartItem) => cartItem.id === item.id);
  
    if (itemIndex !== -1 && updatedCart[itemIndex].quantity > 1) {
      updatedCart[itemIndex].quantity -= 1;
      setCartItems(updatedCart);
    }
  }; 

   // Creo una función para eliminar un producto del carrito.
  const removeItem = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCart);
  };

  
  // Calculo el subtotal de un producto.
  const calculateSubtotal = (item) => {
    return item.price * item.quantity;
  };

  // alculo el total de todos los productos en el carrito.
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + calculateSubtotal(item), 0);
  };

  const handleCheckout = () => {
    // dejo planteado donde implementar la lógica de pago.
    console.log('Procesando el pago...');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>Precio: ${item.price.toFixed(2)}</Text>
              <View style={styles.quantityContainer}>
                <Button title="-" onPress={() => decreaseQuantity(item)} />
                <Text style={styles.itemQuantity}>{item.quantity}</Text>
                <Button title="+" onPress={() => increaseQuantity(item)} />
              </View>
              <Text style={styles.itemSubtotal}>
                Subtotal: ${calculateSubtotal(item).toFixed(2)}
              </Text>
              <Button title="Eliminar" onPress={() => removeItem(item)} />
            </View>
          </View>
        )}
      />
      <Text style={styles.total}>Total: ${calculateTotal().toFixed(2)}</Text>
      <Button title="Pagar" onPress={handleCheckout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  itemImage: {
    width: 80,
    height: 80,
    marginRight: 16,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  itemQuantity: {
    fontSize: 16,
    marginHorizontal: 8,
  },
  itemSubtotal: {
    fontSize: 16,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
  },
});

export default CartScreen;
