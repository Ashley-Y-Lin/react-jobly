import React, { useContext } from "react";
import userContext from "./userContext";
import { Link } from "react-router-dom";

/** Nav bar for Jobly app
 *
 * Props:
 * - logout: func from parent, called on Logout link click
*/

function Nav({ logout }) {
  const { token, currUser } = useContext(userContext);

  if (token === "" || currUser === "") {
    return (
      <nav className="Nav">
        <Link to="/">Jobly</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </nav>
    );
  } else {
    return (
      <nav className="Nav">
        <Link to="/">Jobly</Link>
        <Link to="/companies">Companies</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/profile">Profile</Link>
        <Link onClick={logout}>Log out {currUser}</Link>
      </nav>
    );
  }

}

export default Nav;