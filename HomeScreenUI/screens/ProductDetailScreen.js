import React from 'react';
import { View, Text } from 'react-native';

export default function ProductDetailScreen({ route }) {
  const { product } = route.params || {};

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {product ? (
        <>
          <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{product.title}</Text>
          <Text>Price: ₹{product.price}</Text>
        </>
      ) : (
        <Text>Product Detail Screen</Text>
      )}
    </View>
  );
}
