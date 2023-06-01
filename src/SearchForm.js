import React, { useState } from "react";

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
    const queryParam = topic==="company" ? "nameLike" : "title";
    await searchFunc({[queryParam]: formData.searchTerm});
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
          </div>
        </form>
      </div>
  );
}

export default SearchForm;
