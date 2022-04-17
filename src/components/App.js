import React, { useState } from "react";
import SignIn from "./SignIn";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from "./Dashboard";
export default function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <SignIn setToken={setToken} />
  }
    return (
    
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route exact path='/dashboard' element={<Dashboard />}/>
        </Routes>
      </BrowserRouter>
    </div>
    );
}