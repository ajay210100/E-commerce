import React, { useState, useEffect, } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Import useCart hook

const ProductListingPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart(); // Get the addToCart function

  useEffect(() => {
    // Fetch products from the backend API
    const fetchProducts = async () => {
      try {
        // Make sure your backend (port 5001) is running
        const response = await fetch('http://localhost:5001/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div>
      <h2>Products</h2>
      <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
        {products.map(product => (
          <div key={product._id} className="product-card" style={{ border: '1px solid #ccc', padding: '1rem' }}>
            <img src={product.imageURL} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <Link to={`/product/${product._id}`}>View Details</Link>
            <button onClick={() => addToCart(product)} style={{ marginLeft: '10px' }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;