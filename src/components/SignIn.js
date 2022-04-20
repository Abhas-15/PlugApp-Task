import React, { useState, useEffect } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInAnonymously,
} from "firebase/auth";

import initializeAuthentication from "../Firebase/firebase.init";
import "./SignIn.css";
import { getRandomUser } from "./randomuser.js";

const SignIn = ({ setToken }) => {
  const [anonymousUser, setAnonymousUser] = useState(null);
  initializeAuthentication();
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    const auth = getAuth();

    signInWithPopup(auth, provider).then((result) => {
      const user = result.user;
      //   console.log(user);
      setToken(user);
      //   console.log(user);
    });
  };

  useEffect(() => {
    (async () => {
      const user_detail = await getRandomUser();
      if (!anonymousUser) {
        setAnonymousUser(user_detail);
      }
    })();
  }, []);

  const handleAnonymousSignIn = () => {
    const auth = getAuth();
    signInAnonymously(auth)
      .then(() => {
        // Signed in..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
      });
    onAuthStateChanged(auth, (user) => {
      console.log("User", user);
      const final_user = {
        displayName: anonymousUser.results[0].name.first,
        email: anonymousUser.results[0].email,
        photoURL: anonymousUser.results[0].picture.medium,
        uid: user.uid,
      };
      //   console.log(final_user);
      if (final_user) {
        setToken(final_user);
      }
    });
  };

  return (
    <div>
      <button
        onClick={handleGoogleSignIn}
        type="button"
        className="login-with-google-btn"
      >
        Sign in with Google
      </button>
      <button
        onClick={handleAnonymousSignIn}
        type="button"
        className="login-with-anonymous-btn"
      >
        Sign in Anonymous
      </button>
    </div>
  );
};
export default SignIn;
