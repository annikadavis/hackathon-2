import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import login from "./images/login.png";
import dove from "./images/picasso-dove.png";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
// import { postDataToPath } from "../../utils/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(undefined);
  const history = useHistory();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    // fetch("/api/auth/login")
    //   .then((resp) => {
    //     if (!resp.ok) {
    //       resp.json().then((json) => {
    //         toast.error(json.message || "something Went wrong");
    //       });
    //     } else {
    //       return resp.json();
    //     }
    //   })
    //   .then((token) => {
    // localStorage.setItem("isAuth", true);
    // history.push("/");
    //     localStorage.setItem("isAuth", true);
    //   });
    localStorage.setItem("isAuth", true);
    history.push("/");
  };

  if (user) {
    return <Redirect to={"/user/dashboard"} />;
  }

  return (
    <div>
      <div className="welcome">Welcome!</div>
      <div className="login">
        <form onSubmit={handleSubmit}>
          <input
            className="login-field"
            saveInput={setEmail}
            placeholder="Email"
            type="text"
          />
          <br />
          <br />
          <input
            className="login-field"
            saveInput={setPassword}
            placeholder="Password"
            type="password"
          />
        </form>
      </div>
      <div>
        <img
          className="login-button"
          src={login}
          alt="login-button"
          onClick={handleSubmit}
        />
      </div>
      <div>
        <img className="dove" src={dove} alt="Picasso-dove" />
      </div>
    </div>
  );
}
