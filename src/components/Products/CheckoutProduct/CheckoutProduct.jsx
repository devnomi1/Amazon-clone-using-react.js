import React from "react";
import { useStateValue } from "../../../ContextAPI/StateProvider";
import "./CheckoutProduct.css";

function CheckoutProduct({ item }) {
    const [{basket },dispatch] = useStateValue()
    console.log(item);
    const removeFromBasket = () => {
        dispatch({
					type: "REMOVE_FROM_BASKET",
					id: item.id,
				});
    }
	return (
		<div className="checkoutProduct">
			
			<img className="checkoutProduct-img" src={item.image} alt="" />
			<div className="checkoutProduct-info">
				<p className="checkoutProduct-title">{item.title}</p>
				<p className="checkoutProduct-price">
					<small>$</small>
					<strong>{item.price}</strong>
				</p>
				<div className="checkoutProduct-rating">
					{Array(item.rating)
						.fill()
						.map((_, i) => (
							<p>⭐ </p>
						))}
				</div>
				<button className="checkoutProduct-button"onClick={removeFromBasket}>Remove to Basket</button>
			</div>
		</div>
	);
}

export default CheckoutProduct;
