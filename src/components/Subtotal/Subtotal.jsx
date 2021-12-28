import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../ContextAPI/StateProvider";
import { getBasketTotal } from "../../ContextAPI/reducer";

function Subtotal() {
    const [{ basket }] = useStateValue()
    console.log();
	return (
		<div className="subtotal">
			{/*  */}
			<CurrencyFormat
				renderText={(value) => (
					<>
						<p>
                            Subtotal ({basket.length} item): <strong>{`${value}`}</strong>
                            
						</p>
						<small className="subtotal-gift">
							<input type="checkbox" /> This order Contains a gift
						</small>
					</>
				)}
				decimalScale={2}
				value={getBasketTotal(basket)}
				thousandSeparator={true}
				displayType={"text"}
				prefix={"$"}
            />
            
			<button>Proceed to checkout</button>
           
        </div>
	);
}

export default Subtotal;
