import React from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView } from 'react-native';

const ProductDetailScreen = ({ route, navigation }) => {
  // Receive product data via navigation params
  const { title, image, price, description } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Product Image */}
      <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />

      {/* Product Title */}
      <Text style={styles.title}>{title}</Text>

      {/* Product Price */}
      <Text style={styles.price}>${price}</Text>

      {/* Product Description */}
      <Text style={styles.description}>{description}</Text>

      {/* Back Button */}
      <Button title="Back" onPress={() => navigation.goBack()} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  price: {
    fontSize: 20,
    color: '#00b894',
    marginBottom: 16,
    fontWeight: '600',
  },
  description: {
    fontSize: 16,
    color: '#636e72',
    textAlign: 'justify',
    marginBottom: 20,
  },
});

export default ProductDetailScreen;
