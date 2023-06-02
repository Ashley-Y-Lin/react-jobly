import React, { useContext } from "react";
import userContext from "./userContext";
import convertAndFormat from "./utils";
import "./JobCard.css";

/** JobCard displays information for a single job.
 *
 * Props
 * - job: {title, salary, equity, id}
 *
 * JobCardList => JobCard
 */

function JobCard({ job, apply }) {
  const {currUser } = useContext(userContext);
  const applied = currUser.applications.includes(job.id);

  return (
    <div className="JobCard">
      <h3 className="text-primary">{job.title}</h3>
      <p>
      {job.salary && `salary: ${convertAndFormat(job.salary)}`} <br />
      equity: {job.equity}
      </p>
      {applied
        ? <button className="ApplyBtn btn btn-danger text-light" disabled>Applied</button>
        : <button className="ApplyBtn btn btn-danger text-light" onClick={() => apply(job.id)}>Apply
        </button>}
    </div>
  );
}

export default JobCard;