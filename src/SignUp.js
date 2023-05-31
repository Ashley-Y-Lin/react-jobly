import React from "react";
import SignUpForm from "./SignUpForm";

/** SignUp renders the page for /signup
 */

function SignUp({signup}) {

  return (
    <div className="SignUp">
      <h2>Sign up</h2>
      <SignUpForm onSubmit={signup}/>
    </div>
  );
}

export default SignUp;