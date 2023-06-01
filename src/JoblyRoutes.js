import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import userContext from "./userContext";
import Home from "./Home";
import CompanyList from "./CompanyList";
import JobList from "./JobList";
import CompanyDetail from "./CompanyDetail";
import Login from "./Login";
import SignUp from "./SignUp";
import Profile from "./Profile";

/** Routes for Jobly app
 *
 * Props
 * - updateToken: func that resets JoblyApi.token based on localStorage
 * - login: func from parent, passed down to Login
 * - signup: func from parent, passed down to Signup
*/

function JoblyRoutes({ updateToken, login, signup }) {
  const { currUser } = useContext(userContext);
  // updateToken()
  if (!currUser) {
    return (
      <Routes className="Routes">
        <Route element={<Home />} path="/" />
        <Route element={<Login login={login} />} path="/login" />
        <Route element={<SignUp signup={signup} />} path="/signup" />
        <Route element={<Navigate to="/" />} path="*" />
      </Routes>
    );
  } else {
    return (
      <Routes className="Routes">
        <Route element={<Home />} path="/" />
        <Route element={<CompanyList />} path="/companies" />
        <Route element={<JobList />} path="/jobs" />
        <Route element={<CompanyDetail />} path="/companies/:name" />
        <Route element={<Profile />} path="/profile" />
        <Route element={<Navigate to="/" />} path="*" />
      </Routes>
    );
  };
}

export default JoblyRoutes;