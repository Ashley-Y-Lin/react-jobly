import React, { useState, useEffect } from "react";
import JoblyApi from "./api";
import JobCardList from "./JobCardList";
import { useParams } from "react-router-dom";

/** CompanyDetail renders the page for /companies/:name
 *
 * State:
 * - company: { handle, name, description, numEmployees, logoUrl, jobs }
 *   where jobs is [{ id, title, salary, equity }, ...]
 *
 * JoblyRoutes => CompanyDetail => JobCardList
*/

function CompanyDetail() {
  const params = useParams();
  const [company, setCompany] = useState({});

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
      <JobCardList jobs={company.jobs}/>
    </div>
  )
}

export default CompanyDetail;