import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useStateValue } from "../../ContextAPI/StateProvider";

function Header() {
	const [{basket}] = useStateValue()
	return (
		<nav className="header">
			<Link to="/">
				<img
					className="header-logo"
					src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
					alt=""
				/>
			</Link>

			<div className="header-search">
				<input type="text" className="header-search-input" />
				<SearchIcon className="header-search-icon" />
			</div>

			<div className="header-nav">
				<Link className="header-link" to="/login">
					<div className="header-option">
						<span className="header-optionLineOne">Hello Nomi</span>
						<span className="header-optionLineTwo">Sign In</span>
					</div>
				</Link>

				<Link className="header-link" to="/">
					<div className="header-option">
						<span className="header-optionLineOne">Returns</span>
						<span className="header-optionLineTwo">& Orders</span>
					</div>
				</Link>
				<Link className="header-link" to="/">
					<div className="header-option">
						<span className="header-optionLineOne">Your</span>
						<span className="header-optionLineTwo">Prime</span>
					</div>
				</Link>
				<Link to="/checkout" className="header-link">
					<div className="header-optionBasket">
						<ShoppingBasketIcon />
						<span className="header-optionLineTwo basket-count">{basket?.length }</span>
					</div>
				</Link>
			</div>
		</nav>
	);
}

export default Header;
