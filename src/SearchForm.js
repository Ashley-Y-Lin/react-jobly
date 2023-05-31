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

function SearchForm({ searchFunc }) {
  // TODO: could make state searchTerm directly
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
    await searchFunc(formData.searchTerm);
    setFormData({ searchTerm: "" });
  }

  return (
      <div className="SearchForm">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="searchTerm"></label>
            <input
                id="searchTerm"
                onChange={handleChange}
                name="searchTerm"
                value={formData.searchTerm}
                placeholder="Enter a search value!"
            />
          </div>
          <button className="SearchForm-submitBtn">Submit</button>
        </form>
      </div>
  );
}

export default SearchForm;
