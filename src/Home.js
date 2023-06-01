import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "./userContext";

/** Home renders the page for / */

function Home() {
  const { currUser } = useContext(userContext);

  if (!currUser) {
    return (
      <div className="position-absolute top-50 start-50 translate-middle">
        <h4>Welcome to Jobly!</h4>
        <button className="btn btn-success m-2 text-center">
          <Link to="/login">Login</Link>
        </button>
        <button className="btn btn-info m-2 text-center">
          <Link to="/signup">Signup</Link>
        </button>
      </div>
    );
  }
  return (
    <h1 className="text-center p-5"> Welcome back {currUser.firstName}! </h1>
  );
}

export default Home;