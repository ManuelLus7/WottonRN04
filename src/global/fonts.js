import { useFonts } from 'expo-font';

export const loadFonts = async () => {
  try {
    await useFonts({
      'PoppinsRegular': require('../assets/fonts/Poppins-Regular.ttf'),
      'JosefinSans-Regular': require('../assets/fonts/JosefinSans-Regular.ttf'),
      'Lobster-Regular': require('../assets/fonts/Lobster-Regular.ttf'),
      'PlayfairDisplay-Bold': require('../assets/fonts/PlayfairDisplay-Bold.ttf'),
    });
    console.log('Fuentes cargadas con éxito.');
  } catch (error) {
    console.error('Error al cargar las fuentes:', error);
  }
};
