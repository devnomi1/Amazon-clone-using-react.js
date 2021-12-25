import React from "react";
import "./Home.css";

import Product from "../../components/Products/Product";


function Home() {
	return (
		<>
			
			<div className="home">
				<img
					className="home-image"
					src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
					alt=""
				/>
				<div className="home-row">
					<Product
						id={1234}
						title="Corsair K60 RGB Pro SE Mechanical Gaming Keyboard - Cherry Mechanical Keyswitches - Durable AluminumFrame - Customizable Per-Key RGB Backlighting - PBT Double-Shot Keycaps - Detachable Palm Rest"
						price={11.6}
						rating={5}
						image="https://m.media-amazon.com/images/I/71MEJpvVQOL._AC_UY327_FMwebp_QL65_.jpg"
					/>
					<Product
						id={1234}
						title="Corsair K60 RGB Pro SE Mechanical Gaming Keyboard - Cherry Mechanical Keyswitches - Durable AluminumFrame - Customizable Per-Key RGB Backlighting - PBT Double-Shot Keycaps - Detachable Palm Rest"
						price={11.6}
						rating={5}
						image="https://m.media-amazon.com/images/I/71MEJpvVQOL._AC_UY327_FMwebp_QL65_.jpg"
					/>
				</div>
				<div className="home-row">
					<Product
						id={1234}
						title="Corsair K60 RGB Pro SE Mechanical Gaming Keyboard - Cherry Mechanical Keyswitches - Durable AluminumFrame - Customizable Per-Key RGB Backlighting - PBT Double-Shot Keycaps - Detachable Palm Rest"
						price={11.6}
						rating={5}
						image="https://m.media-amazon.com/images/I/71MEJpvVQOL._AC_UY327_FMwebp_QL65_.jpg"
					/>
					<Product
						id={1234}
						title="Corsair K60 RGB Pro SE Mechanical Gaming Keyboard - Cherry Mechanical Keyswitches - Durable AluminumFrame - Customizable Per-Key RGB Backlighting - PBT Double-Shot Keycaps - Detachable Palm Rest"
						price={11.6}
						rating={5}
						image="https://m.media-amazon.com/images/I/71MEJpvVQOL._AC_UY327_FMwebp_QL65_.jpg"
					/>
					<Product
						id={1234}
						title="Corsair K60 RGB Pro SE Mechanical Gaming Keyboard - Cherry Mechanical Keyswitches - Durable AluminumFrame - Customizable Per-Key RGB Backlighting - PBT Double-Shot Keycaps - Detachable Palm Rest"
						price={11.6}
						rating={5}
						image="https://m.media-amazon.com/images/I/71MEJpvVQOL._AC_UY327_FMwebp_QL65_.jpg"
					/>
				</div>
				<div className="home-row">
					<Product
						id={1234}
						title="Corsair K60 RGB Pro SE Mechanical Gaming Keyboard - Cherry Mechanical Keyswitches - Durable AluminumFrame - Customizable Per-Key RGB Backlighting - PBT Double-Shot Keycaps - Detachable Palm Rest"
						price={11.6}
						rating={5}
						image="https://m.media-amazon.com/images/I/71MEJpvVQOL._AC_UY327_FMwebp_QL65_.jpg"
					/>
				</div>
			</div>
		</>
	);
}

export default Home;
