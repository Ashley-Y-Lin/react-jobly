import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


/** Form for getting a search term.
 *
 * Props:
 * - searchFunc: fn to call in parent
 *
 * State:
 * formData: { searchTerm }
 *
 * CompanyList || JobList -> SearchForm
 */

function SearchForm({ searchFunc, topic }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    searchTerm: "",
  });

  /** Update form input. */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value,
    }));
  }

  /** Submit form: call function from parent & clear inputs. */
  async function handleSubmit(evt) {
    evt.preventDefault();
    const queryParam = topic==="companies" ? "nameLike" : "title";
    await searchFunc({[queryParam]: formData.searchTerm});
    setFormData({ searchTerm: "" });
  }

  async function handleRefresh(evt) {
    evt.preventDefault();
    await searchFunc();
    setFormData({ searchTerm: "" });
  }

  return (
      <div className="SearchForm">
        <form onSubmit={handleSubmit}>
          <div className="d-flex flex-row">
            <input
                className="form-control w-25 m-2"
                id="searchTerm"
                onChange={handleChange}
                name="searchTerm"
                value={formData.searchTerm}
                placeholder="Enter a search value!"
            />
          <button className="SearchForm-submitBtn btn btn-primary m-2">Submit</button>
          <button className="SearchForm-refreshBtn btn btn-success m-2"
        onClick={handleRefresh}>Reset Search
          </button>
          </div>
        </form>
      </div>
  );
}

export default SearchForm;
