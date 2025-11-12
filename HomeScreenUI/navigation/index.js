import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';
import SplashScreen from '../screens/SplashScreen';

const Navigation = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <SplashScreen />; // Show splash while checking session
  }

  return user ? <AppNavigator /> : <AuthNavigator />;
};

export default Navigation;
