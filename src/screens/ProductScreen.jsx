import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { products } from '../data/ProductsData';
import { ProductCard,SearchBar } from '../components';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';



const ProductScreen = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [priceFilter, setPriceFilter] = useState(1000); // Valor máximo por los productos
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    // Actualizo la cantidad de productos encontrados cuando cambian los productos filtrados
    setProductCount(filteredProducts.length);
  }, [filteredProducts]);

  const applyFilter = () => {
    const filtered = products.filter((product) => {
      const nameMatches = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const categoryMatches = categoryFilter === 'All' || product.category === categoryFilter;
      const priceMatches = priceFilter === 1000 || product.price <= priceFilter;

      return nameMatches && categoryMatches && priceMatches;
    });
    setFilteredProducts(filtered);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    applyFilter();
  };

  const clearSearch = () => {
    setSearchTerm('');
    applyFilter();
  };

  const showProductDetails = (selectedProduct) => {
    console.log(`Mostrar detalles del producto: ${selectedProduct.name}`);
  };

  return (
    <View>
      <View style={styles.searchContainer}>
        <SearchBar onSearch={handleSearch} value={searchTerm} />
        {searchTerm !== '' && (
          <Ionicons
            name="close-circle"
            size={24}
            color="blue"
            onPress={clearSearch}
          />
        )}
      </View>
      <View style={styles.filterContainer}>
      <Picker
  selectedValue={categoryFilter}
  onValueChange={(value) => setCategoryFilter(value)}
  style={styles.picker}
>
  <Picker.Item label="Todas las Categorías" value="All" />
  {/* Agrega más opciones de categoría según tu data */}
</Picker>

        <Text>Precio Máximo: ${priceFilter}</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={1000} // Ajusta el valor máximo
          step={10}
          value={priceFilter}
          onValueChange={(value) => setPriceFilter(value)}
        />
      </View>
      <Text style={styles.productCountText}>
        {productCount === 0
          ? 'Producto No Encontrado'
          : `Productos Encontrados: ${productCount}`}
      </Text>
      <ScrollView contentContainerStyle={styles.container}>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onPress={() => showProductDetails(product)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginBottom: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  filterContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginBottom: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  clearButtonText: {
    color: 'blue',
  },
  clearButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  productCountText: {
    marginLeft: 16,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  picker: {
    width: '100%',
    marginBottom: 16,
  },
  slider: {
    width: '100%',
    marginBottom: 16,
  },
});

export default ProductScreen;
