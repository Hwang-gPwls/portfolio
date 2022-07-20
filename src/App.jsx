import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Career from "./pages/Career";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/career/*" element={<Career />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
