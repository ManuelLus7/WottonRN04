import React, { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { products } from "../data/ProductsData";
import { Video } from "expo-av";

const HomeScreen = () => {
  const bannerItems = [
    {
      type: "video",
      source: {
        uri: "https://cdn.sanity.io/files/27438tds/rexona-prod-ar/475f0e1a24393fcdcbc6424b6c5ab6bcf752fbf5.mp4",
      },
    },
    {
      type: "image",
      source: {
        uri: "https://cdn.sanity.io/images/27438tds/rexona-prod-ar/ef733cfa4378afaa8aeefe7d697f87b3cce77f87-811x469.png?rect=0,0,811,468&w=811&h=468&q=80&auto=format",
      },
    },
    {
      type: "image",
      source: {
        uri: "https://cdn.sanity.io/images/27438tds/rexona-prod-ar/a4ef1117b3348a75cb86fa5c7bcb200d2fe1629e-811x469.png?rect=0,0,811,468&w=811&h=468&q=80&auto=format",
      },
    },
  ];

  const randomProducts = products.slice(0, 10); // Obtengo los primeros 10 productos
  const windowWidth = Dimensions.get("window").width;

  return (
    <ScrollView style={styles.container}>
      {/* Sección del Banner */}
      <Carousel
  data={bannerItems}
  renderItem={({ item }) => {
    if (item.type === "image") {
      return (
        <View style={styles.carouselImageContainer}>
          <Image source={item.source} style={styles.carouselImage} />
        </View>
      );
    } else if (item.type === "video") {
      return (
        <View style={styles.carouselVideoContainer}>
          <Video
            source={item.source}
            style={styles.carouselVideo}
            shouldPlay
            isLooping
          />
        </View>
      );
    }
  }}
  sliderWidth={windowWidth} 
  itemWidth={windowWidth}
  layout="default" 
  loop={true} // Hago que el Carousel se repita
/>


      {/* Hago una Segunda Sección de Información */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>ENCONTRÁ EL PRODUCTO PARA VOS</Text>
        <Text style={styles.infoText}>
          Cuando empezás a moverte, pequeñas microcápsulas liberan una explosión
          de fragancia para mantenerte fresco. Ya sea que bailes, pedalees,
          escales o corras, tenemos todo lo que necesitas.
        </Text>
        <TouchableOpacity style={styles.infoButton} onPress={() => {}}>
          <Text style={styles.infoButtonText}>Ver más</Text>
        </TouchableOpacity>
      </View>

      {/* Tercera Sección de Productos Aleatorios */}

      <View style={styles.productContainer}>
        <Text style={styles.productTitle}>Productos Aleatorios</Text>
        <ScrollView horizontal={true}>
          {randomProducts.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => {
                /* Acá más adelante voy a crear la lógica para ver detalles */
              }}
            >
              <View style={styles.productCard}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.productImage}
                  resizeMode="contain" // Redimensiono la imagen para que cubra todo el espacio
                />
                <Text style={styles.productTitle}>{item.title}</Text>
                <TouchableOpacity style={styles.productButton}>
                  <Text style={styles.productButtonText}>Ver Más</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  carouselImage: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginBottom: 16,
  },
  carouselVideo: {
    width: "100%",
    height: 200,
    marginBottom: 5,
    resizeMode: "cover",
  },
  infoContainer: {
    backgroundColor: "#f2f2f2",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 8,
  },
  infoButton: {
    backgroundColor: "blue",
    padding: 12,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  infoButtonText: {
    color: "white",
    fontSize: 16,
  },
  productContainer: {
    backgroundColor: "#f9f9f9",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  productCard: {
    width: 150,
    marginRight: 10,
    borderRadius: 8,
    padding: 8,
    backgroundColor: "#fff",
  },
  productImage: {
    width: "100%",
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  productButton: {
    backgroundColor: "blue",
    padding: 8,
    borderRadius: 8,
  },
  productButtonText: {
    color: "white",
    fontSize: 12,
    textAlign: "center",
  },
});

export default HomeScreen;
