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
 * - login: func from parent, passed down to Login
 * - signup: func from parent, passed down to Signup
 * - update: func from parent, passed down to Profile
*/

function JoblyRoutes({ login, signup, update }) {
  const { currUser } = useContext(userContext);

  return (
    <Routes className="Routes">
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" />} />
      {!currUser
        ? <React.Fragment>
          <Route path="/login" element={<Login login={login} />} />
          <Route path="/signup" element={<SignUp signup={signup} />} />
        </React.Fragment>
        : <React.Fragment>
          <Route path="/companies" element={<CompanyList />} />
          <Route path="/jobs" element={<JobList />} />
          <Route path="/companies/:name" element={<CompanyDetail />} />
          <Route path="/profile" element={<Profile update={update} />} />
        </React.Fragment>
      }
      <Route path="/login" element={<Login login={login} />} />
      <Route path="/signup" element={<SignUp signup={signup} />} />
    </Routes>
  );
}

export default JoblyRoutes;