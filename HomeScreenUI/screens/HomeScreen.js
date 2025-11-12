import React from 'react';
import { View, Text, Button, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  const products = [
    { id: '1', title: 'Office Chair', price: 1500 },
    { id: '2', title: 'Wireless Mouse', price: 800 },
  ];

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Home Screen</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ProductDetail', { product: item })}
            style={{
              padding: 12,
              marginBottom: 12,
              backgroundColor: '#eee',
              borderRadius: 8,
            }}
          >
            <Text>{item.title}</Text>
            <Text>₹{item.price}</Text>
          </TouchableOpacity>
        )}
      />

      <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
}
