import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  // Creo datos de ejemplo de un usuario, esto luego lo tomare de una Base de Datos real
  const user = {
    name: 'Manuel Lus',
    email: 'tukey437@gmail.com',
    celular: '+5493854935947',
    avatar: 'https://tse1.mm.bing.net/th?id=OIP.JT5Uipq-bb6bf1VhYtRqNgHaEw&pid=Api&P=0&h=180', // URL de la imagen del avatar
    bio: 'Carrera: Desarrollo de Aplicaciones',
    comision: 'Comisión 55490',
    entrega: 'Cuarto Desafio.-',

  };

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
      </View>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
      <Text style={styles.celular}>{user.celular}</Text>
      <Text style={styles.bio}>{user.bio}</Text>
      <Text style={styles.bio}>{user.comision}</Text>
      <Text style={styles.bio}>{user.entrega}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  avatarContainer: {
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 100,
    overflow: 'hidden',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  bio: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default ProfileScreen;
