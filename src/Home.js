import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "./userContext";


function Home() {
  console.log("home is running");

  const { currUser } = useContext(userContext);

  if (!currUser) {
    return (
      <div className="position-absolute top-50 start-50 translate-middle">
        <button className="btn btn-success m-2">
          <Link to="/login">Login</Link>
        </button>
        <button className="btn btn-info m-2 ">
          <Link to="/signup">Signup</Link>
        </button>
      </div>
    );
  }
  return (
    <h1> Welcome back {currUser.firstName}! </h1>
  );
}

export default Home;