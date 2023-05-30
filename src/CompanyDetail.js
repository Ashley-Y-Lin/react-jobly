import React, { useState, useEffect } from "react";
import JoblyApi from "./api";
import JobList from "./JobList";
import { useParams } from "react-router-dom";

function CompanyDetail() {
  const params = useParams();
  const [company, setCompany] = useState([]);

  /** gets list of jobs pertaining to specific company */
  useEffect(function getCompanyJobsList() {
    async function getCompanyJobs() {
      const companyResponse = await JoblyApi.getCompany(params.name);
      setCompany(companyResponse)
    }
    getCompanyJobs();
  }, []);

  return(
    <div>
      <h1>{company.name}</h1>
      <p>{company.description}</p>
      <JobList jobs={company.jobs}/>
    </div>
  )
}

export default CompanyDetail;