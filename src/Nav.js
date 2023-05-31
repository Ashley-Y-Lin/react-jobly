import React from "react";
import { Link } from "react-router-dom";

/** Nav bar for Jobly app */

function Nav() {
  return (
    <nav className="Nav">
      <Link to="/">Jobly</Link>
      <Link to="/companies">Companies</Link>
      <Link to="/jobs">Jobs</Link>
    </nav>
  );
}

export default Nav;