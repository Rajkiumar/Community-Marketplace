// components/ProductList.js
import React from "react";
import { FlatList } from "react-native";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ProductCard product={item} />}
    />
  );
};

export default ProductList;
