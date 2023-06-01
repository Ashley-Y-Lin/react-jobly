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
  const { name } = useParams();
  const [company, setCompany] = useState({ data: null, isLoading: true });

  /** gets list of jobs pertaining to specific company */
  useEffect(function getCompanyJobsList() {
    async function getCompanyJobs() {
      try {
        const companyResponse = await JoblyApi.getCompany(name);
        setCompany({ data: companyResponse, isLoading: false });
      } catch (err) {
        setCompany({ data: null, isLoading: false });
        console.log(err.message);
      }
    }
    getCompanyJobs();
  }, []);

  if (company.isLoading) return (<h1>Loading...</h1>);

  return (
    <div className="CompanyDetail">
      <h1>{company.data.name}</h1>
      <p>{company.data.description}</p>
      <JobCardList jobs={company.data.jobs} />
    </div>
  );
}

export default CompanyDetail;