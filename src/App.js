import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Register from "./Pages/Register";
import Home from "./Pages/Home";

function App() {
    return (
      <Router>
        <Routes>

          <Route exact path="/" element={<Home/>} />

          <Route exact path="/register" element={<Register/>} />

        </Routes>
      </Router>
    )
}

export default App;
