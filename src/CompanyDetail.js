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
  //TODO: could destructure name out of params
  const params = useParams();
  const [company, setCompany] = useState({});

  /** gets list of jobs pertaining to specific company */
  useEffect(function getCompanyJobsList() {
    // TODO: use a try catch, catch the errors that are in [], have state that
    // does something with the errors (check what they are and display nice
    // message for the user)
    async function getCompanyJobs() {
      const companyResponse = await JoblyApi.getCompany(params.name);
      setCompany(companyResponse);
    }
    getCompanyJobs();
  }, []);

  // TODO: add the isLoading thing

  return (
    <div>
      <h1>{company.name}</h1>
      <p>{company.description}</p>
      <JobCardList jobs={company.jobs} />
    </div>
  );
}

export default CompanyDetail;