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
						id={23144}
						title="LeadsaiL Gaming Mouse Wired RGB PC Gaming Mice,Up to 7200 DPI, 8 Programmable Buttons,6 Color Backlight, Ergonomic Optical Computer Wired Mouse with Fire Button"
						price={12}
						rating={4}
						image="https://m.media-amazon.com/images/I/61F0X7DUyoS._AC_UY327_FMwebp_QL65_.jpg"
					/>
				</div>
				<div className="home-row">
					<Product
						id={22222}
						title="X Rocker, 5152301, Trident Pedestal 4.1 Wireless, 28 x 25 x 40, Black/Gold"
						price={238}
						rating={4}
						image="https://m.media-amazon.com/images/I/81irSsx-8bL._AC_SL1500_.jpg"
					/>
					<Product
						id={4321}
						title="Eva-dry Edv-1100 Electric Petite Dehumidifier, White"
						price={41}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/I/61JBr0S7S4L._AC_UL320_SR320,320_.jpg"
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
						id={12346}
						title="SAMSUNG 65-Inch Class Crystal UHD AU8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN65AU8000FXZA, 2021 Model), Black"
						price={800}
						rating={5}
						image="https://m.media-amazon.com/images/I/71LJJrKbezL._AC_UY327_FMwebp_QL65_.jpg"
					/>
				</div>
			</div>
		</>
	);
}

export default Home;
