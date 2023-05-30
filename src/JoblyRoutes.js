import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home";
import CompanyList from "./CompanyList";
import JobList from "./JobList";
import CompanyDetail from "./CompanyDetail";

function JoblyRoutes() {
  return (
    <Routes className="Routes">
      <Route element={<Home />} path="/" />
      <Route element={<CompanyList />} path="/companies" />
      <Route element={<JobList />} path="/jobs" />
      <Route element={<CompanyDetail />} path="/companies/:name" />
      <Route element={<Navigate to="/" />} path="*" />
    </Routes>
  );
}

export default JoblyRoutes;