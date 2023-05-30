import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

/** Form for getting a search term.
 *
 * Props:
 * - searchFunc: fn to call in parent
 *
 * State:
 * formData: { searchTerm }
 *
 * CompanyList -> SearchForm
 */

function SearchForm({ searchFunc }) {
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
