import React from "react";
import { View, ScrollView } from "react-native";
import ProductForm from "../components/ProductForm";

export default function AddProductScreen() {
  return (
    <ScrollView>
      <View>
        <ProductForm />
      </View>
    </ScrollView>
  );
}
