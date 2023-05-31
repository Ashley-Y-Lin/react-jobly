import React, { useState, useEffect } from "react";
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
  const [token, setToken] = useState(JoblyApi.token);
  const [currUser, setCurrUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  /** updates currUser every time the token changes  */
  useEffect(function updateCurrUserInfo() {
    console.log("useEffect is running")
    async function updateNewCurrUser() {
      if (currUser.username === "") {
        console.log("on mount")
        return;
      }
      console.log("after moutn runs")
      const newCurrUser = await JoblyApi.getUserDetail(currUser.username);
      console.log("newCurrUser", newCurrUser)
      setCurrUser(newCurrUser)
    }
    updateNewCurrUser();
  }, [token]);

  async function login(formData = {}) {
    const loginResp = await JoblyApi.loginUser(formData);
    setCurrUser({ ...currUser, username: formData.username });
    setToken(loginResp);
    JoblyApi.token = loginResp;
  }

  async function signup(formData = {}) {
    const registerResp = await JoblyApi.registerUser(formData);
    setCurrUser({ ...currUser, username: formData.username });
    setToken(registerResp);
    JoblyApi.token = registerResp;
  }

  function logout() {
    setToken("");
    JoblyApi.token = "";
    setCurrUser({
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    });
  }

  return (
    <userContext.Provider value={{ token, currUser }}>
      <BrowserRouter>
        <div className="App">
          <Nav logout={logout} />
          <JoblyRoutes login={login} signup={signup} />
        </div>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
