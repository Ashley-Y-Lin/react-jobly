import React, { useContext } from "react";
import userContext from "./userContext";
import { Link } from "react-router-dom";
import "./Nav.css";

/** Nav bar for Jobly app
 *
 * Props:
 * - logout: func from parent, called on Logout link click
*/

function Nav({ logout }) {
  const { token, currUser } = useContext(userContext);

  if (token === "" || currUser.username === "") {
    return (
      <nav className="navbar bg-dark">
        <Link to="/">Jobly</Link>
        <div>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="navbar bg-dark">
        <Link to="/">Jobly</Link>
        <div>
          <Link to="/companies">Companies</Link>
          <Link to="/jobs">Jobs</Link>
          <Link to="/profile">Profile</Link>
          <Link onClick={logout}>Logout {currUser.firstName}</Link>
        </div>
      </nav>
    );
  }

}

export default Nav;