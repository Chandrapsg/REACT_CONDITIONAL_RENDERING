import React from "react"
import input from "./input";

function Mylogin(){
return (
    <form className="form">
        <input
        type = "text"
        placeholder = "Username"
        />
        <input
        type = "password"
        placeholder = "password"
        />
        {/* <input type="text" placeholder="Username" /> */}
        {/* <input type="password" placeholder="Password" /> */}
        <button type="submit">Login</button>
    </form>
);
}

export default Mylogin;