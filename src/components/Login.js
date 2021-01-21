import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import login from "./images/login.png"
import dove from "./images/picasso-dove.png"

// import { postDataToPath } from "../../utils/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(undefined);

//   const handleSubmit = async (evt) => {
//     evt.preventDefault();
//     setMessage("");
//     const response = await postDataToPath("/api/auth/login", { email, password });
//     if (response.error) {
//       setMessage(response.error);
//     } else {
//       setTimeout(() => {
//         setUser(response);
//       }, 2000);

//       setMessage("");
//     }
//   };

//   if (user) {
//     return <Redirect to={"/user/dashboard"} />;
//   }

  return (
    <div>
   <div className = "welcome">
        Welcome!
        </div>
        <div className = "login">
      <input className = "login-field" saveInput={setEmail} placeholder="Email" type="text" />
      <br /><input
        className="login-field"
        saveInput={setPassword}
        placeholder="Password"
        type="password"
      />
      </div>
      <div>
      <img className = "login-button" src={login} alt="login-button" />
    </div>
    <div>
    <img className = "dove" src={dove} alt="Picasso-dove" />
    </div>
    </div>
  );
}