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
        <button onClick={handleGoogleSignIn}>Sign In with Google</button>
    )
}
export default SignIn;