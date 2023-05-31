import React from "react";
import convertAndFormat from "./utils";
import "./JobCard.css";

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
      <p>
      {job.salary && `salary: ${convertAndFormat(job.salary)}`} <br />
      equity: {job.equity}
      </p>
    </div>
  );
}

export default JobCard;