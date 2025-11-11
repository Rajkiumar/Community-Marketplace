import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

export default function HomeScreen() {
  const products = [
    {
      id: 1,
      title: 'Handmade Basket',
      price: 499,
      image: 'https://m.media-amazon.com/images/I/61fUwilhjJL._AC_UF350,350_QL80_.jpg',
    },
    {
      id: 2,
      title: 'Clay Pot',
      price: 299,
      image: 'https://img.indiahandmade.com/catalog/product/cache/dee0bc41489afb86ae85561eae1bc64e/s/m/smallc_2.png',
    },
    {
      id: 3,
      title: 'Jute Bag',
      price: 799,
      image: 'https://uneako.com/wp-content/uploads/2020/03/17.webp',
    },
    {
      id: 4,
      title: 'Wooden Toy',
      price: 699,
      image: 'https://cdn.shopify.com/s/files/1/0067/8179/6450/files/educational_toys_large.png?v=1556594037',
    },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.productsContainer}>
        {products.map((item) => (
          <ProductCard
            key={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafc',
  },
  productsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingVertical: 20,
  },
});
