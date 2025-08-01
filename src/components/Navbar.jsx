import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-wide">🛒 MyStore</Link>
        <div className="hidden md:flex space-x-10 text-lg font-medium">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/products" className="hover:text-gray-200">Products</Link>
          <Link to="/cart" className="hover:text-gray-200">Cart</Link>
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none text-2xl">☰</button>
        </div>
      </div>
    </nav>
  );
}
