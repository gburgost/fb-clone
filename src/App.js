import React, { useReducer, useEffect } from "react";
import "./App.css";

import { authReducer } from "./auth/authReducer";
import { AuthContext } from "./auth/AuthContext";
import { AppRouter } from "./routers/AppRouter";

const init = () => {
  return (
    JSON.parse(localStorage.getItem("user")) || {
      logged: false,
    }
  );
};

function App() {
  // const [{ user }, dispatch] = useStateValue();
  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>

    // <div className="app">
    //   {!user ? (
    //     <Login />
    //   ) : (
    //     <>
    //       <Header />

    //       <div className="app__body">
    //         <Sidebar />
    //         <Feed />
    //         <Widgets />
    //       </div>
    //     </>
    //   )}
    // </div>
  );
}

export default App;
