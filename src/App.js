import React from "react";
import { BrowserRouter } from "react-router-dom";
import JoblyRoutes from "./JoblyRoutes";
import Nav from "./Nav";

/** Jobly App */

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <JoblyRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
