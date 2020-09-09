import React, { useContext } from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
// import { useStateValue } from "./StateProvider";
// import { actionType } from "./reducer";
import { AuthContext } from "./auth/AuthContext";
import { types } from "./types/types";

function Login() {
  // const [state, dispatch] = useStateValue();
  const { dispatch } = useContext(AuthContext);

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, photoURL, email } = result.user;
        console.log("Nombre: ", displayName);
        dispatch({
          type: types.login,
          payload: {
            displayName,
            photoURL,
            email,
          },
        });
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          alt="Facebook logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png"
        />
        <img
          alt="Facebook"
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
