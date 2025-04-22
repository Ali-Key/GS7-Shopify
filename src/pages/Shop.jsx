import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import axios from 'axios';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else {
          console.error('Unexpected response format:', response.data);
          setError('Unexpected response format. Please try again later.');
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Failed to fetch products. Please try again later.');
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="shop-page">
      <div className="projects-header ">
        <h1 className="projects-title">Shop Our Products</h1>
        <p className="projects-subtitle">
          Explore our wide range of products and find what you love!
        </p>
      </div>
      {error ? (
        <p className="error-message">{error}</p>
      ) : (
        <div className="products-grid">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>Loading products...</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Shop;