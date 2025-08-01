import { useEffect } from "react";
import useProductStore from "../store/useProductStore";

export default function Products() {
  const { products, loading, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Our Products</h2>
      {loading ? (
        <p className="text-blue-500 text-center">Loading products...</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col"
            >
              <div className="w-full h-56 flex items-center justify-center bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-40 object-contain"
                />
              </div>
              <div className="mt-3 flex-grow flex flex-col justify-between">
                <h3 className="font-semibold text-sm line-clamp-2 min-h-[40px]">{item.title}</h3>
                <p className="text-green-600 font-bold mt-2 text-lg">${item.price}</p>
                <button className="mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 w-full">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
