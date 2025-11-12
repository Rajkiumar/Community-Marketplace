import React, { useEffect } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const UpdateProduct = () => {
  useEffect(() => {
    const updateProduct = async () => {
      try {
        // Replace this ID with a real one from your Firestore
        const productRef = doc(db, "products", "1DmgKEj0hDUJLjq5BKitZ");

        await updateDoc(productRef, {
          title: "Updated Pottery Set",
          price: 175,
          description: "Updated handmade pottery set with modern glaze finish.",
        });

        console.log("✅ Product updated successfully!");
      } catch (error) {
        console.error("❌ Error updating product:", error);
      }
    };

    updateProduct();
  }, []);

  return null;
};

export default UpdateProduct;
