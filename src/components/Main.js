import React from 'react';
import auth from './firebase';

const Main = () => {

	// Signout function
	const logout = () => {
		auth.signOut();
	}
	
	return (
		<div style={{"marginTop" : "200px"}}>
			<center>
			Anonymous Login Success
			<button style={{"marginLeft" : "20px"}}
			onClick={logout}>
				Logout
			</button>
			</center>
		</div>
	);
}

export default Main;
