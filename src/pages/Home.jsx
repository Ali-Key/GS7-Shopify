import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import axios from 'axios';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products?limit=6');
        // Ensure the response data is valid and contains the expected fields
        if (Array.isArray(response.data)) {
          setFeaturedProducts(response.data);
        } else {
          console.error('Unexpected response format:', response.data);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="home-page">
      <div className="home-header">
        <h1 className="home-title">Welcome to GS7 Shopify</h1>
        <p className="home-subtitle">
          Discover our featured products and start shopping today!
        </p>
      </div>
      <div className="products-grid">
        {featuredProducts.length > 0 ? (
          featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default Home;