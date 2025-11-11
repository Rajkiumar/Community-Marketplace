import React from "react";
import { View, TextInput, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

const ProductForm = () => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    price: Yup.number()
      .typeError("Price must be a number")
      .positive("Price must be positive")
      .required("Price is required"),
  });

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add New Product</Text>
      <Formik
        initialValues={{ title: "", description: "", price: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log("Submitted:", values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Product Title"
              onChangeText={handleChange("title")}
              onBlur={handleBlur("title")}
              value={values.title}
            />
            {touched.title && errors.title && <Text style={styles.error}>{errors.title}</Text>}

            <TextInput
              style={styles.input}
              placeholder="Description"
              multiline
              onChangeText={handleChange("description")}
              onBlur={handleBlur("description")}
              value={values.description}
            />
            {touched.description && errors.description && (
              <Text style={styles.error}>{errors.description}</Text>
            )}

            <TextInput
              style={styles.input}
              placeholder="Price"
              keyboardType="numeric"
              onChangeText={handleChange("price")}
              onBlur={handleBlur("price")}
              value={values.price}
            />
            {touched.price && errors.price && <Text style={styles.error}>{errors.price}</Text>}

            {/* Image Upload Placeholder */}
            <TouchableOpacity style={styles.imagePlaceholder}>
              <Text>Upload Image (Placeholder)</Text>
            </TouchableOpacity>

            <Button title="Submit" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 40 },
  heading: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  error: { color: "red", fontSize: 12, marginBottom: 5 },
  imagePlaceholder: {
    height: 100,
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
});

export default ProductForm;
