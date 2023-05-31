import React from "react";
import LoginForm from "./LoginForm";

/** Login renders the page for /login
 *
 * Prop:
 * - login: func from parent, called when user logs in
 */

function Login({login}) {

  return (
    <div className="Login">
      <h2>Login</h2>
      <LoginForm onSubmit={login}/>
    </div>
  );
}

export default Login;