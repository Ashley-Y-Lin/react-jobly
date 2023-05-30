import React from "react";

function JobCard({job}) {
  return (
    <div>
      <h3>{job.title}</h3>
      {job.salary && <p>salary: {job.salary}</p>}
      <p>equity: {job.equity}</p>
    </div>
  );
}

export default JobCard