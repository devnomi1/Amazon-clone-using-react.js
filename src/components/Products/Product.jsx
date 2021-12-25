import React from "react";
import { useStateValue } from "../../ContextAPI/StateProvider";
import "./Product.css";

function Product({ id, title, rating, price, image }) {
	const [dispatch] = useStateValue();

	const addToBasket = () => {
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
			},
		});
	};

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
			<button className="product-button" onClick={addToBasket}>
				Add to Basket
			</button>
		</div>
	);
}

export default Product;
