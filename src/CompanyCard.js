import React from "react";
import { Link } from "react-router-dom";
import "./CompanyCard.css";

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
        <h4 className="text-primary"><p>{companyData.name}</p></h4>
      </Link>
      <p>{companyData.description}</p>
      {companyData.logoUrl &&
        <img src={companyData.logoUrl} alt={`Logo for ${companyData.name}`}/>
      }
    </div>
  );
}

export default CompanyCard;