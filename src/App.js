import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import userContext from "./userContext";
import JoblyApi from "./api";
import JoblyRoutes from "./JoblyRoutes";
import Nav from "./Nav";

/** Jobly App
 *
 * State
 * - token: "" (a user's JWT token)
 * - currUser: username, which is a string
*/

function App() {
  const [token, setToken] = useState("");
  const [currUser, setCurrUser] = useState("");

  async function login(formData={}) {
    try {
      const loginResp = await JoblyApi.loginUser(formData);
      setToken(loginResp);
      setCurrUser(formData.username);
    } catch (err) {
      setToken("");
      setCurrUser("");
      console.log(err.message);
    }
  }

  async function signup(formData = {}) {
    try {
      const registerResp = await JoblyApi.registerUser(formData);
      setToken(registerResp);
      setCurrUser(formData.username);
    } catch (err) {
      setToken("");
      setCurrUser("");
      console.log(err.message);
    }
  }

  function logout() {
    setToken("");
    setCurrUser("");
  }

  return (
    <userContext.Provider value={{token, currUser}}>
      <BrowserRouter>
        <div className="App">
          <Nav logout={logout}/>
          <JoblyRoutes login={login} signup={signup} />
        </div>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
