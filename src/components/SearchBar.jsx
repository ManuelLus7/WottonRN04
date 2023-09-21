import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (text) => {
    // Normaliza el texto de búsqueda convirtiéndolo a minúsculas y eliminando acentos
    const normalizedText = text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    setSearchTerm(normalizedText);
    onSearch(normalizedText);
  };

  const clearSearch = () => {
    setSearchTerm('');
    onSearch(''); // Limpia el campo de búsqueda al presionar el botón
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar..."
        value={searchTerm}
        onChangeText={handleSearch}
      />
      {searchTerm.length > 0 && (
        <TouchableOpacity
          style={styles.clearButton}
          onPress={clearSearch} // Limpia el campo de búsqueda al presionar el botón
        >
          <Icon name="times-circle" size={20} color="gray" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  input: {
    flex: 1,
    padding: 8,
  },
  clearButton: {
    padding: 8,
  },
});

export default SearchBar;
