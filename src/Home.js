import React, {useContext} from "react";
import { Link } from "react-router-dom";
import userContext from "./userContext";


function Home() {
  const { token, currUser } = useContext(userContext);

  if (token === "" || currUser === "") {
    return (
      <div>
        <button >
          <Link to="/login">Login</Link>
        </button>
        <button>
          <Link to="/signup">Signup</Link>
        </button>
      </div>
    )
  }
  return(
    <h1> Welcome back {currUser}! </h1>
  )
}

export default Home;