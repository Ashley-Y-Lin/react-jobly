import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import userContext from "./userContext";
import JoblyApi from "./api";
import JoblyRoutes from "./JoblyRoutes";
import Nav from "./Nav";
import jwt_decode from "jwt-decode";

/** Jobly App
 *
 * State
 * - token: "" (a user's JWT token)
 * - currUser: username, which is a string
*/

function App() {
  const [token, setToken] = useState(JoblyApi.token);
  const [currUser, setCurrUser] = useState(null);

  /** updates currUser every time the token changes  */
  useEffect(function updateCurrUserInfo() {
    console.log("useEffect is running");
    async function updateNewCurrUser() {
      if (token === "") {
        return;
      }
      JoblyApi.token = token;
      localStorage.setItem("token", JSON.stringify(token));
      const decodedTokenUsername = jwt_decode(token).username;
      console.log("decodedTokenUsername", decodedTokenUsername)
      const newCurrUser = await JoblyApi.getUserDetail(decodedTokenUsername);
      setCurrUser(() => ({ ...newCurrUser }));
    }
    updateNewCurrUser();
  }, [token]);

  function updateTokenFromLocalStorage() {
    const localStorageToken = localStorage.getItem('token')
    if (localStorageToken){
      const parsedToken = JSON.parse(localStorageToken);
      setToken(parsedToken);
    }
  }

  async function login(formData = {}) {
    const loginResp = await JoblyApi.loginUser(formData);
    setToken(loginResp);
  }

  async function signup(formData = {}) {
    console.log("signup formData: ", formData);
    const registerResp = await JoblyApi.registerUser(formData);
    setToken(registerResp);
  }

  function logout() {
    setToken("");
    setCurrUser(null);
    localStorage.setItem("token", "");
  }

  return (
    <userContext.Provider value={{ token, currUser }}>
      <BrowserRouter>
        <div className="App">
          <Nav logout={logout} />
          <JoblyRoutes
            updateToken={updateTokenFromLocalStorage}
            login={login}
            signup={signup}
          />
        </div>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
