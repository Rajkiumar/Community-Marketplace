import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProductCard({ title, price, image }) {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.productName}>{title}</Text>
        <Text style={styles.price}>₹{price}</Text>
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyText}>View Details</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    margin: 10,
    width: 170,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 130,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  infoContainer: {
    padding: 10,
    alignItems: 'center',
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    textAlign: 'center',
  },
  price: {
    fontSize: 14,
    color: 'green',
    marginBottom: 8,
  },
  buyButton: {
    backgroundColor: '#4B7BEC',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  buyText: {
    color: '#fff',
    fontWeight: '600',
  },
});
