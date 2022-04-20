import React from 'react';
import auth from './firebase.js';

const Login = () => {

	// Sign in Anonymously
	const signin = () => {
		auth.signInAnonymously().catch(alert);
	}
	
	return (
		<div>
			<center>
				<button style={{"marginTop" : "200px"}}
				onClick={signin}>Sign In Anonymously</button>
			</center>
		</div>
	);
}

export default Login;
