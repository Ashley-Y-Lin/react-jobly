import React, { useContext } from "react";
import userContext from "./userContext";
import { NavLink, Link } from "react-router-dom";
import "./Nav.css";


/** Nav bar for Jobly app
 *
 * Props:
 * - logout: func from parent, called on Logout link click
*/

function Nav({ logout }) {
  const { currUser } = useContext(userContext);

  return (
    <nav className="navbar bg-dark">
      <NavLink to="/">Jobly</NavLink>
      {!currUser
        ? <div>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </div>
        : <div>
          <NavLink to="/companies">Companies</NavLink>
          <NavLink to="/jobs">Jobs</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <Link to="/" onClick={logout} className="Logout">Logout {currUser.firstName}</Link>
        </div>
      }
    </nav>
  );
}

export default Nav;