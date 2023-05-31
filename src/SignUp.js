import React from "react";
import SignUpForm from "./SignUpForm";

/** SignUp renders the page for /signup
 */

function SignUp({signup}) {
  console.log("rendering SignUp")
  return (
    <div className="SignUp m-2">
      <h2>Sign up</h2>
      <SignUpForm onSubmit={signup}/>
    </div>
  );
}

export default SignUp;