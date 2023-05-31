import React, { useContext } from "react";
import userContext from "./userContext";
import { Link } from "react-router-dom";
import "./Nav.css";
import { useNavigate } from "react-router-dom";


/** Nav bar for Jobly app
 *
 * Props:
 * - logout: func from parent, called on Logout link click
*/

function Nav({ logout }) {
  const { token, currUser } = useContext(userContext);
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }

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
          <Link onClick={handleLogout}>Logout {currUser.firstName}</Link>
        </div>
      </nav>
    );
  }

}

export default Nav;