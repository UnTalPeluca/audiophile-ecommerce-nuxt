import { collection, query, where, getDocs, limit } from "firebase/firestore";
import { db } from "../firebase/firebaseApp";

export const useFirestore = () => {
  const getProductsByCategory = async (category) => {
    const productosRef = collection(db, "products");
    const q = query(productosRef, where("category", "==", category));
    try {
      const querySnapshot = await getDocs(q);
      const products = [];
      querySnapshot.forEach((doc) => {
        // Get data of each document
        const data = doc.data();
        // Push data to products array
        products.push(data);
      });
      return products;
    } catch (e) {
      console.error("Error getting products:", e);
    }
  };
  const getProductBySlug = async (slug) => {
    const productosRef = collection(db, "products");
    const q = query(productosRef, where("slug", "==", slug), limit(1));
    try {
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        const data = doc.data()
        return data;
      } else {
        return null;
      }
    } catch (e) {
      console.error("Error getting product:", e);
    }
  };
  return { getProductsByCategory, getProductBySlug };
};
