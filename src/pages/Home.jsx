export default function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-20 text-center">
      <h1 className="text-5xl font-extrabold text-blue-800 mb-4">
        Welcome to MyStore
      </h1>
      <p className="text-lg text-gray-600 max-w-xl mx-auto mb-6">
        Discover a variety of high-quality products at unbeatable prices.
      </p>
      <a
        href="/products"
        className="bg-blue-700 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-800"
      >
        Start Shopping
      </a>
    </div>
  );
}
