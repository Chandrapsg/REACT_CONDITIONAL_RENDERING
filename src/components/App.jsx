import React from "react";
import Mylogin from "./Mylogin";

var isLoggedin = false;

function App() {
  return (
    <div className="container">
      {isLoggedin ?  <h1>Hello</h1> :      <Mylogin/>}
     
    </div>
  );
}

export default App;
