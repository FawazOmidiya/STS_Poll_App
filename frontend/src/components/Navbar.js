import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="App-header">
      <h1>2024 Election Visualizer</h1>
      <ul className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/odds">Odds</Link>
        </li>
        <li>
          <Link to="/map">Maps</Link>
        </li>
        <li>
          <Link to="/polls">Polls</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
