import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route exact path="/checkout" element={<Checkout />} c />
				<Route path="/login" element={<Login />} />
			</Routes>
		</div>
	);
}

export default App;
