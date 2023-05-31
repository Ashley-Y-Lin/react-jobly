import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";

function SignUpForm({ onSubmit }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: ""
  });
  const [alertMsgs, setAlertMsgs] = useState([]);

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
    try {
      await onSubmit(formData);
      setFormData({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: ""
      });
      navigate("/");
    } catch (err) {
      setAlertMsgs(err);
    }
  }

  return (
    <div className="SignUpForm">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username"></label>
          <input
            id="username"
            onChange={handleChange}
            name="username"
            value={formData.username}
            placeholder="username"
          />
        </div>

        <div>
          <label htmlFor="password"></label>
          <input
            id="password"
            onChange={handleChange}
            name="password"
            value={formData.password}
            placeholder="password"
          />
        </div>

        <div>
          <label htmlFor="firstName"></label>
          <input
            id="firstName"
            onChange={handleChange}
            name="firstName"
            value={formData.firstName}
            placeholder="first name"
          />
        </div>

        <div>
          <label htmlFor="lastName"></label>
          <input
            id="lastName"
            onChange={handleChange}
            name="lastName"
            value={formData.lastName}
            placeholder="last name"
          />
        </div>

        <div>
          <label htmlFor="email"></label>
          <input
            id="email"
            onChange={handleChange}
            name="email"
            value={formData.email}
            placeholder="email"
          />
        </div>
        {alertMsgs.length > 0 && <Alert alertMsgs={alertMsgs}/>}
        <button className="SignUpForm-submitBtn">Sign up</button>
      </form>
    </div>
  );
}

export default SignUpForm;