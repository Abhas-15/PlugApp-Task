import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


import initializeAuthentication from '../Firebase/firebase.init';



const SignIn = ({setToken}) => {
    initializeAuthentication();
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        const auth = getAuth();

        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setToken(user);
        })
    }
   
    return (
        
        <button onClick={handleGoogleSignIn} style={{ backgroundColor: "#282c34",alignItems: "center",justifyContent: "center",fontSize: "calc(10px + 2vmin)",color: "white"}}>Sign In with Google</button>
    )
}
export default SignIn;