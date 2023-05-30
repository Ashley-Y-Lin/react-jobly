import React from "react";
import { Link } from "react-router-dom";

function CompanyCard({ companyData }) {

  return (
    <div>
      <Link to={`/companies/${companyData.handle}`}>
        <h6>{companyData.name}</h6>
      </Link>
      <p>{companyData.description}</p>
      {companyData.logoUrl &&
        <img src={companyData.logoUrl} alt={`Logo for ${companyData.name}`}/>
      }
    </div>
  );
}

export default CompanyCard;