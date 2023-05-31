import React from "react";
import convertAndFormat from "./utils";

/** JobCard displays information for a single job.
 *
 * Props
 * - job: {title, salary, equity, id}
 *
 * JobCardList => JobCard
 */

function JobCard({ job }) {

  return (
    <div className="JobCard">
      <h3>{job.title}</h3>
      {job.salary && <p>salary: ${convertAndFormat(job.salary)}</p>}
      <p>equity: {job.equity}</p>
    </div>
  );
}

export default JobCard;