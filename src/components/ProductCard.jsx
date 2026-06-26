function ProductCard({ product }) {
  return (
    <div className="card">
      <div className="card-image-wrap">
        <img src={product.image} alt={product.title} />
      </div>

      <span className="card-category">{product.category}</span>

      <h3>{product.title}</h3>

      <div className="card-footer">
        <span className="card-price">₹{product.price.toFixed(2)}</span>
        <span className="card-rating">
          <span>★</span> {product.rating.rate}
        </span>
      </div>
    </div>
  );
}

export default ProductCard;
