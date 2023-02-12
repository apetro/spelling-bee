import "./App.css";
import Header from "../Header";
import Game from "../Game";
import React from "react";

function App() {


  return (
    <div className="wrapper">
      <Header />
      <div className="game-wrapper">
        <Game />
      </div>
    </div>
  );
}

export default App;
