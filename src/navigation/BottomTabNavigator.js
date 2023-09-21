import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { HomeScreen, ProductScreen, CartScreen, ProfileScreen, SettingsScreen } from '../screens';

const Tab = createBottomTabNavigator();

const getIconName = (routeName) => {
  switch (routeName) {
    case 'Inicio':
      return 'home';
    case 'Productos':
      return 'shopping-cart';
    case 'Carrito':
      return 'shopping-bag';
    case 'Perfil':
      return 'user';
    case 'Ajustes':
      return 'cog';
    default:
      return 'question'; // Icono predeterminado para rutas desconocidas
  }
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const iconName = getIconName(route.name);
          return <Icon name={iconName} size={size} color={color} />;
        
        },
        tabBarLabel: () => null, // oculto los nombres debajo de los iconos
  
      })}
      tabBarOptions={{
        activeTintColor: 'blue', // Color del icono activo
        inactiveTintColor: 'gray', // Color del icono inactivo
        tabBarStyle: [
          {
            display: 'flex',
          },
          null,
        ],
      }}
    >
      <Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Productos" component={ProductScreen} />
      <Tab.Screen name="Carrito" component={CartScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
      <Tab.Screen name="Ajustes" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
