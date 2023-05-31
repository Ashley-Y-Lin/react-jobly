import React from "react";
import { Link } from "react-router-dom";

/** CompanyCard displays a single company.
 *
 * Props:
 * - companyData: {handle, name, description, logoUrl}
 *
 * JoblyRoutes => CompanyList => CompanyCard
 */

function CompanyCard({ companyData }) {

  return (
    <div className="CompanyCard">
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