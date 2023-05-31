import React, {useState, useEffect} from "react";
import JoblyApi from "./api"
import SearchForm from "./SearchForm"
import JobCardList from "./JobCardList"

/** JobList renders the page for /jobs
 *
 * State
 * - jobs = [{title, salary, equity, id}...]
 *
 * JoblyRoutes => JobList => SearchForm && JobCardList
 */

function JobList() {
  const [jobs, setJobs] = useState([]);

  /** gets all jobs only AFTER MOUNT */
  useEffect(function getAllJobs() {
    async function getJobs() {
      const jobsResp = await JoblyApi.getJobs();
      setJobs(jobsResp);
    }
    getJobs();
  }, []);

  /** filters based on a search term */
  async function filterJobs(searchTerm){
    try {
      const filteredJobs = await JoblyApi.searchJobs(searchTerm);
      setJobs(filteredJobs)
    } catch (err) {
      setJobs([])
      console.log(err.message)
    }
  }

  return (
    <div>
      <SearchForm searchFunc={filterJobs}/>
      <JobCardList jobs={jobs}/>
    </div>
  );
}

export default JobList;