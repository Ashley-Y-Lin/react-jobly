import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "./userContext";


function Home() {
  console.log("home is running");

  const { token, currUser } = useContext(userContext);
  console.log("token", token);
  console.log("currUser", currUser);

  if (token === "" || currUser.username === "") {
    return (
      <div>
        <button >
          <Link to="/login">Login</Link>
        </button>
        <button>
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