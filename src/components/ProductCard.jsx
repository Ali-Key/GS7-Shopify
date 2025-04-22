import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />

      <h3 className="product-title">{product.title}</h3>
      <div className="product">
        <p className="product-price">${product.price}</p>
        <p className="product-category">{product.category}</p>
      </div>
      <div className="product-actions">
        <button className="add-to-cart">Add to Cart</button>
        <Link to={`/product/${product.id}`} className="view-details">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
