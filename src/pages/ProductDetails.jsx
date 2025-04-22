import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"; // Use Link for navigation
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        if (response.data) {
          setProduct(response.data);
        } else {
          setError("Product not found.");
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
        setError("Failed to load product details. Please try again later.");
      }
    };
    fetchProduct();
  }, [id]);

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className="product-details">
      <div className="product-details-header">
        <h1 className="product-details-title">Product Details</h1>
        <p className="product-details-subtitle">
          Discover more about this product!
        </p>
      </div>
      <div className="product-details-content">
        <img
          src={product.image}
          alt={product.title}
          className="product-details-image"
        />
        <h3 className="product-details-name">{product.title}</h3>
        <div className="product-details-info">
          <p className="product-details-price">Price: ${product.price}</p>
          <p className="product-details-category">Category: {product.category}</p>
          <p className="product-details-description">{product.description}</p>
        </div>
        <div className="product-details-actions">
          <button className="add-to-cart">Add to Cart</button>
          {/* Back to Shop */}
          <Link to="/shop" className="back-to-shop">
            Back to Shop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
