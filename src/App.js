import React from "react";
import "./App.css";
//import { Link, Route, Router, Routes } from "react-router-dom";
import Contact from "./components/Contacts";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <h1>Routed components</h1>
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;
