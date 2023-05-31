import React from "react";
import JobCard from "./JobCard";

/** JobCardList displays information for many jobs
 *
 * Prop
 * - jobs = [{title, salary, equity, id}...]
 *
 * JobCard || CompanyDetail => JobCardList => JobCard
 */

// TODO: add top level classNames for top level things in each component,
// so it makes styling easier
function JobCardList({jobs=[]}) {
  return(
    <div>
      {jobs.length
        ? jobs.map(job => <JobCard key={job.id} job={job}/>)
        : <div>Sorry, no jobs were found.</div>
      }
    </div>
  )
}

export default JobCardList;