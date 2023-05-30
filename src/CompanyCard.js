import React from "react";

function CompanyCard({ companyData }) {

  return (
    <div>
      <h6>{companyData.name}</h6>
      <p>{companyData.description}</p>
      {companyData.logoUrl &&
        <img src={companyData.logoUrl} alt={`Logo for ${companyData.name}`}/>
      }
    </div>
  );
}

export default CompanyCard;