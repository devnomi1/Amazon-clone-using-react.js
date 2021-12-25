import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Header />
							<Home />
						</>
					}
				/>
				<Route
					exact
					path="/checkout"
					element={
						<>
							<Header />
							<Checkout />
						</>
					}
				/>
				<Route path="/login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
