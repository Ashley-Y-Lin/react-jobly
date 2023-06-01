import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import userContext from "./userContext";

/** ProfileForm renders the edit profile form.
 *
 *  Props
 *  - update: func from parent, called onSubmit
 *
 *  Profile => ProfileForm
 */

function ProfileForm({ onSubmit }) {
  const { currUser } = useContext(userContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState(currUser);

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
    await onSubmit(formData);
    setFormData(currUser);
    navigate("/");
  }

  return (
    <div className="ProfileForm">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            className="form-control w-50"
            readOnly={true}
            id="username"
            name="username"
            value={formData.username}
            placeholder="username"
            disabled
          />
        </div>

        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            className="form-control w-50"
            id="firstName"
            onChange={handleChange}
            name="firstName"
            value={formData.firstName}
            placeholder="firstName"
          />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            className="form-control w-50"
            id="lastName"
            onChange={handleChange}
            name="lastName"
            value={formData.lastName}
            placeholder="lastName"
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            className="form-control w-50"
            id="email"
            onChange={handleChange}
            name="email"
            value={formData.email}
            placeholder="email"
          />
        </div>

        <button className="ProfileForm-submitBtn btn btn-primary m-1">Save Changes</button>
      </form>
    </div>
  );
}

export default ProfileForm;