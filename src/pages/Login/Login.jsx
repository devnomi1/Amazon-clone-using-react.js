import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../store/firebase";

function Login() {
	 const navigate = useNavigate()
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const login = (event) => {
		event.preventDefault();
		auth
			.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				navigate("/")
			})
			.catch((e) => alert(e.message));
	};

	const register = (event) => {
		event.preventDefault();
		auth
			.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				navigate('/')
			})
			.catch((e) => alert(e.message));
	};

	return (
		<div className="login">
			<Link to="/">
				<img
					className="login-logo"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
					alt=""
				/>
			</Link>
			<div className="login-container">
				<h1>Sign-in</h1>
				<form action="">
					<h5>E-mail</h5>
					<input
						value={email}
						type="email;"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<h5>Password:</h5>
					<input
						value={password}
						type="password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button onClick={login} type="submit" className="login-signButton">
						Sign in
					</button>
				</form>
				<p>
					By creating an account, you agree to Amazon's Conditions of Use and
					Privacy Notice.
				</p>
				<button
					type="submit"
					onClick={register}
					className="login-registorButton"
				>
					Create your Amazone Account
				</button>
			</div>
		</div>
	);
}

export default Login;
