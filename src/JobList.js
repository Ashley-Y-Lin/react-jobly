import React, {useState, useEffect} from "react";
import JoblyApi from "./api"
import SearchForm from "./SearchForm"
import JobCardList from "./JobCardList"

/** JobList renders the page for /jobs
 *
 * on Mount
 * - gets all jobs via API request and sets state (jobs) to
 * array of all job objects
 *
 * State
 * - jobs = [{title, salary, equity, id}...]
 *
 * JoblyRoutes => JobList => SearchForm && JobCardList
 */

function JobList() {
  const [jobs, setJobs] = useState({data:[], isLoading:true});

  /** gets all jobs only AFTER MOUNT */
  useEffect(function getAllJobs() {
    getJobs();
  }, []);

  /** filters based on a search term */
  async function getJobs(searchTerm={}){
    try {
      const jobsResult = await JoblyApi.getJobs(searchTerm);
      setJobs({data:jobsResult, isLoading:false})
    } catch (err) {
      setJobs({data:[], isLoading:false})
      console.log(err.message)
    }
  }

  if (jobs.isLoading) return (<h1>Loading...</h1>)


  return (
    <div className="JobList">
      <SearchForm searchFunc={getJobs} topic="job"/>
      <JobCardList jobs={jobs.data}/>
    </div>
  );
}

export default JobList;