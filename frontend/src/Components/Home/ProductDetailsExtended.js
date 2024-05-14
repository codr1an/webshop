import React from 'react';
import axios from 'axios'; // Import axios for making HTTP requests

const ProductDetails = ({ product }) => {
  
  const addToCart = () => {
    // Make a POST request to your backend API to add the product to the cart
    axios.post('http://localhost:8080/api/shopping-carts', {
      // Pass the product data you want to add to the cart
      // Assuming you need to send the product ID and quantity, adjust this according to your backend requirements
      productId: product.id,
      quantity: 1 // You can adjust the quantity as needed
    })
    .then(response => {
      // Handle success
      console.log('Product added to cart:', response.data);
      // You can add further logic here, such as showing a success message to the user
    })
    .catch(error => {
      // Handle error
      console.error('Error adding product to cart:', error);
      // You can add further error handling logic here, such as showing an error message to the user
    });
  };

  return (
    <div className="product-details">
        <div className="product-image">
            {product.imageUrl && <img src={require(`../../../../productImages/${product.imageUrl}`)} alt={product.name} />}
        </div>
        <div className="product-info">
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
            <button type="button" onClick={addToCart}>Add to cart</button>
        </div>
    </div>
  );
};

export default ProductDetails;
