import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import userContext from "./userContext";
import JoblyApi from "./api";
import JoblyRoutes from "./JoblyRoutes";
import Nav from "./Nav";
import jwt_decode from "jwt-decode";
import useLocalStorage from "./useLocalStorage";

/** Jobly App
 *
 * State
 * - token: "" (a user's JWT token)
 * - currUser: user object
 * - isLoading: indicates whether currUser is being set
*/

function App() {
  const [token, setToken] = useLocalStorage("token");
  // console.log("initial token", token)
  const [currUser, setCurrUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  /** updates currUser every time the token changes  */
  useEffect(function updateCurrUserInfo() {
    async function updateNewCurrUser() {
      const localStorageToken = localStorage.getItem('token');
      if (!localStorageToken) {
        JoblyApi.token = "";
        setCurrUser(null);
        setIsLoading(false);
        return;
      }
      JoblyApi.token = localStorageToken;
      const decodedTokenUsername = jwt_decode(localStorageToken).username;
      const newCurrUser = await JoblyApi.getUserDetail(decodedTokenUsername);
      setCurrUser(() => ({ ...newCurrUser }));
      setIsLoading(false);
    }
    updateNewCurrUser();
  }, [token]);

  async function login(formData = {}) {
    const loginResp = await JoblyApi.loginUser(formData);
    setToken(loginResp);
  }

  async function signup(formData = {}) {
    const registerResp = await JoblyApi.registerUser(formData);
    setToken(registerResp);
  }

  async function update(formData = {}) {
    const updateResp = await JoblyApi.updateUser(formData);
    setCurrUser(updateResp);
  }

  function logout() {
    setToken("");
    setCurrUser(null);
  }

  async function apply(jobId) {
    const confirmation = await JoblyApi.userApplyForJob(currUser.username, jobId);
    const updatedUser = await JoblyApi.getUserDetail(currUser.username);
    setCurrUser(updatedUser);
    console.log("confirmed application: ", confirmation);
  }

  if (isLoading === true) return (<div>Is loading...</div>);

  return (
    <userContext.Provider value={{ currUser }}>
      <BrowserRouter>
        <div className="App">
          <Nav logout={logout} />
          <JoblyRoutes
            login={login}
            signup={signup}
            update={update}
            apply={apply}
          />
        </div>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
