import { useState } from 'react';
import {db} from "../Firebase/firebase.init"
import { ref, set } from "firebase/database";

const writeUserData = async(user) =>{
  console.log(user);
  if (user) {
    await set(ref(db, 'users/' + user.uid), {
    username: user.displayName || null,
    email: user.email || null,
    profile_picture: user.photoURL || null,
    uid: user.uid || null
  });
  }
  
}

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    localStorage.setItem('token', JSON.stringify(userToken));
    writeUserData(userToken);
    setToken(userToken);
  };

  return {
    setToken: saveToken,
    token
  }
}

