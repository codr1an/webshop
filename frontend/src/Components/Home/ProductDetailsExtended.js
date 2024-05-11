import React from 'react';

const ProductDetails = ({ product }) => {
  return (
    <div className="product-details">
        <div className="product-image">
            {product.imageUrl && <img src={require(`../../../../productImages/${product.imageUrl}`)} alt={product.name} />}
        </div>
        <div className="product-info">
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
            <button type="button">Add to cart</button>
        </div>
    </div>
  );
};

export default ProductDetails;
