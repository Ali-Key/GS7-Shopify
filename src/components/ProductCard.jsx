const ProductCard = ({ product }) => {
    return (
      
      <div className="product-card">
        <a href={`/product/${product.id}`} className="product-link">
          <img src={product.image} alt={product.title} className="product-image" />
        </a>
        <h3 className="product-title">{product.title}</h3>
        <div className="product">
          <p className="product-price">${product.price}</p>
          <p className="product-category">{product.category}</p>
        </div>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    );
  };
  
  export default ProductCard;