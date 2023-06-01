import React, { useState, useEffect } from "react";
import JoblyApi from "./api";
import SearchForm from "./SearchForm";
import CompanyCard from "./CompanyCard";

/** CompanyList renders the page for /companies
 *
 * on Mount
 * - gets all companies via API request and sets state (companies) to
 * array of all company objects
 *
 * State
 * - companies: array of company objects like
 * [{name, handle, description, jobs}...]
 *
 * JoblyRoutes => CompanyList => SearchForm & CompanyCard
 */

function CompanyList() {
  const [companies, setCompanies] = useState({ data: [], isLoading: true });

  /** gets all companies only AFTER MOUNT */
  useEffect(function getAllCompanies() {
    getCompanies();
  }, []);

  /** filters based on a search term */
  async function getCompanies(searchTerm = {}) {
    try {
      const companiesResponse = await JoblyApi.getCompanies(searchTerm);
      setCompanies({ data: companiesResponse, isLoading: false });
    } catch (err) {
      setCompanies({ data: [], isLoading: false });
      console.log(err.message);
    }
  }

  if (companies.isLoading) return (<h1>Loading...</h1>);

  return (
    <div className="CompanyList">
      <SearchForm searchFunc={getCompanies} topic="company" />
      {companies.data.length
        ? companies.data.map(c => <CompanyCard key={c.handle} companyData={c} />)
        : <div>Sorry, no results were found.</div>
      }
    </div>
  );
}

export default CompanyList;