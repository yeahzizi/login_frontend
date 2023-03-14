import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import Kakao from './Components/Kakao/Kakao';
// import Topbar from './Components/Topbar/Topbar';
import Login from "../src/pages/Auth/Login";
import SignUp from "../src/pages/Auth/SignUp";

function App() {
  return (
    // <div className="App">
    // 	<Topbar />
    // 	<Kakao />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/map" element={<Map />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
