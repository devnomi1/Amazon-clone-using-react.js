import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import  StateProvider  from "./ContextAPI/StateProvider";
import reducer, { initialState } from "./ContextAPI/reducer";



ReactDOM.render(
	<React.StrictMode>
		<StateProvider state={initialState} reducer={reducer}>
			<App />
		</StateProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
reportWebVitals();
