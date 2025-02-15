import React from 'react';
import './ProductCard.css'; // Import the CSS file

export default function ProductCard(props) {

    console.log(props);


    return (
        

        <div className="product-card">
            <img 
                src={props.image}
                alt={props.name} 
            />
            <h3>{props.name}</h3> {/* Use props for dynamic name */}
            <p>${props.price}</p> {/* Use props for dynamic price */}
            {/* Optional: Add a button for actions */}
            <a href="#" className="add-to-cart">Add to Cart</a>
        </div>
    );
}