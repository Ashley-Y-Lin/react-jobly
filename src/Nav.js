import React from "react";
import { Link } from "react-router-dom";

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