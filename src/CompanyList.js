import React, {useState, useEffect} from "react";
import JoblyApi from "./api"
import SearchForm from "./SearchForm"
import CompanyCard from "./CompanyCard"

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

  /** filters based on a search term */
  async function filterCompanies(searchTerm){
    try {
      const filteredCompanies = await JoblyApi.getCompany(searchTerm);
      setCompanies(filteredCompanies)
    } catch (err) {
      setCompanies([])
      console.log(err.message)
    }
  }

  return (
    <div>
      <SearchForm searchFunc={() => filterCompanies}/>
      {companies.length > 1
        ? companies.map(c => <CompanyCard key={c.handle} companyData={c}/>)
        : <div>Sorry, no results were found.</div>
      }
    </div>
  );
}

export default CompanyList;