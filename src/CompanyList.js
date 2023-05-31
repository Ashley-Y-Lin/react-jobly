import React, {useState, useEffect} from "react";
import JoblyApi from "./api"
import SearchForm from "./SearchForm"
import CompanyCard from "./CompanyCard"

//TODO: add stuff about what happens on mount, when search form submitted, etc.
/** CompanyList renders the page for /companies
 *
 * State
 * - companies: array of company objects like
 * [{name, handle, description, jobs}...]
 *
 * JoblyRoutes => CompanyList => SearchForm & CompanyCard
 */

function CompanyList() {
  const [companies, setCompanies] = useState([]);

  /** gets all companies only AFTER MOUNT */
  useEffect(function getAllCompanies() {
    async function getCompanies() {
      const companiesResponse = await JoblyApi.getCompanies();
      setCompanies(companiesResponse);
    }
    getCompanies();
  }, []);

  // TODO: use the other func from api, somehow condense code bc you're making
  // similar request above
  /** filters based on a search term */
  async function filterCompanies(searchTerm){
    try {
      const filteredCompanies = await JoblyApi.searchCompanies(searchTerm);
      setCompanies(filteredCompanies)
    } catch (err) {
      setCompanies([])
      console.log(err.message)
    }
  }

  //TODO: add the is loading thing

  return (
    <div>
      <SearchForm searchFunc={filterCompanies}/>
      {companies.length
        ? companies.map(c => <CompanyCard key={c.handle} companyData={c}/>)
        : <div>Sorry, no results were found.</div>
      }
    </div>
  );
}

export default CompanyList;