import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';

const SettingsScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [autoPlayVideos, setAutoPlayVideos] = useState(true);

  const toggleNotifications = (value) => {
    setNotificationsEnabled(value);
    console.log(`Notificaciones habilitadas: ${value}`);
  };

  const toggleDarkMode = (value) => {
    setDarkModeEnabled(value);
    console.log(`Modo oscuro habilitado: ${value}`);
  };

  const toggleAutoPlayVideos = (value) => {
    setAutoPlayVideos(value);
    console.log(`Reproducir videos automáticamente: ${value}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Configuración</Text>

      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>Notificaciones</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={toggleNotifications}
        />
      </View>

      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>Modo Oscuro</Text>
        <Switch
          value={darkModeEnabled}
          onValueChange={toggleDarkMode}
        />
      </View>

      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>Reproducir Videos automáticamente</Text>
        <Switch
          value={autoPlayVideos}
          onValueChange={toggleAutoPlayVideos}
        />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingBottom: 8,
  },
  optionText: {
    fontSize: 18,
  },
  optionValue: {
    fontSize: 16,
    color: 'blue',
  },
});

export default SettingsScreen;
