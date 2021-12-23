import React from "react";
import "./Product.css";

function Product({ id, title, rating, price, image }) {
	return (
		<div className="product">
			<div className="product-info">
				<p>{title}</p>
				<p className="product-price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product-rating">
					{Array(rating)
						.fill()
						.map((_) => (
							<p>⭐ </p>
						))}
				</div>
			</div>
			<img src={image} alt="" />
			<button className="product-button">Add to Basket</button>
		</div>
	);
}

export default Product;
