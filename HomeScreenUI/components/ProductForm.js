import React, { useState } from "react";
import {View,TextInput,Text,Button,StyleSheet,TouchableOpacity,Image,Alert} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import * as ImagePicker from "expo-image-picker";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";

const ProductForm = () => {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [imageUrl, setImageUrl] = useState("");

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    price: Yup.number()
      .typeError("Price must be a number")
      .positive("Price must be positive")
      .required("Price is required"),
  });

  // 📸 Step 4 – Pick image from gallery
  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission required", "Please allow access to your photos.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  // ☁️ Step 5 – Upload image to Firebase Storage
  const uploadImage = async () => {
    if (!image) {
      Alert.alert("No image selected", "Please select an image first.");
      return;
    }

    try {
      setUploading(true);
      const response = await fetch(image);
      const blob = await response.blob();

      const filename = image.substring(image.lastIndexOf("/") + 1);
      const storageRef = ref(storage, `products/${filename}`);

      const uploadTask = uploadBytesResumable(storageRef, blob);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progressValue = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progressValue.toFixed(0));
        },
        (error) => {
          console.error(error);
          Alert.alert("Upload failed", error.message);
          setUploading(false);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setUploading(false);
            setImageUrl(downloadURL);
            Alert.alert("Success!", "Image uploaded successfully.");
            console.log("Image URL:", downloadURL);
          });
        }
      );
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add New Product</Text>
      <Formik
        initialValues={{ title: "", description: "", price: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Submitted:", { ...values, imageUrl });
          Alert.alert("Success", "Product submitted successfully!");
        }}
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

            {/* 🖼️ Image Upload Section */}
            <TouchableOpacity style={styles.imagePlaceholder} onPress={pickImage}>
              {image ? (
                <Image source={{ uri: image }} style={styles.imagePreview} />
              ) : (
                <Text>Select Image</Text>
              )}
            </TouchableOpacity>

            {uploading ? (
              <Text>Uploading... {progress}%</Text>
            ) : (
              image && <Button title="Upload Image" onPress={uploadImage} />
            )}

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
    height: 150,
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  imagePreview: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
});

export default ProductForm;
