import AsyncStorage from '@react-native-async-storage/async-storage';

// Store user session
export const storeUserSession = async (userData) => {
  try {
    await AsyncStorage.setItem('user', JSON.stringify(userData));
    console.log('User session saved:', userData);
  } catch (error) {
    console.log('Error saving user session:', error);
  }
};

// Retrieve user session
export const getUserSession = async () => {
  try {
    const userData = await AsyncStorage.getItem('user');
    console.log('User session retrieved:', userData ? JSON.parse(userData) : null);
    return JSON.parse(userData);
  } catch (error) {
    console.log('Error retrieving user session:', error);
    return null;
  }
};

// Clear user session
export const clearUserSession = async () => {
  try {
    await AsyncStorage.removeItem('user');
    console.log('User session cleared');
  } catch (error) {
    console.log('Error clearing user session:', error);
  }
};
