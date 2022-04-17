import React, { useState } from "react";
import SignIn from "./SignIn";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from "./Dashboard";
import useToken from './useToken';

export default function App() {
  const { token, setToken } = useToken();


  if(!token) {
    return <SignIn setToken={setToken} />
  }
    const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };
    return (
    
    <div className="App" style={{textAlign: "center"}}>
    <header className="App-header" style={{ backgroundColor: "#282c34",minHeight: "100vh",display: "flex",flexDirection: "column",alignItems: "center",justifyContent: "center",fontSize: "calc(10px + 2vmin)",color: "white"}}>
            <h1>Application</h1>
            <h3>You logged in as {token.email}</h3>
            <button onClick={handleLogout}>Logout</button>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Dashboard />}/>
          <Route exact path='/dashboard' element={<Dashboard />}/>
        </Routes>
                </BrowserRouter>
                </header>
    </div>
    );
}
