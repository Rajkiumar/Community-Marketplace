import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';
import { ActivityIndicator, View } from 'react-native';

const Navigation = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return user ? <AppNavigator /> : <AuthNavigator />;
};

export default Navigation;
