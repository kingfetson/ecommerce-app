import { create } from "zustand";
import axios from "axios";

const useProductStore = create((set) => ({
  products: [],
  loading: false,
  fetchProducts: async () => {
    set({ loading: true });
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      set({ products: response.data, loading: false });
    } catch (error) {
      console.error("Error fetching products:", error);
      set({ loading: false });
    }
  },
}));

export default useProductStore;
