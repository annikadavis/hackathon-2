import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

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
    <div className = "login">
        <strong>Welcome!</strong>
      <input saveInput={setEmail} placeholder="Email" type="text" />
      <input
        saveInput={setPassword}
        placeholder="Password"
        type="password"
      />
      <img src="/Users/annika/wild-code-school/hackathon-2/hackathon-2/images/login.png" alt="login-button" />
    </div>
    <div>
    <img src="../images/login.png" alt="Login" />
    </div>
    </div>
  );
}