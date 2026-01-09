import React, { useState } from "react";

function RegistrationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    country: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      alert("All fields are required");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (!form.gender || !form.country || !form.termsAccepted) {
      alert("Complete all selections");
      return;
    }

    alert(
      `Registration Successful!\n
Name: ${form.name}
Email: ${form.email}
Gender: ${form.gender}
Country: ${form.country}`
    );
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h2>Registration Form</h2>

      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} />

      <div>
        <input type="radio" name="gender" value="Male" onChange={handleChange} /> Male
        <input type="radio" name="gender" value="Female" onChange={handleChange} /> Female
      </div>

      <select name="country" onChange={handleChange}>
        <option value="">Select Country</option>
        <option>India</option>
        <option>USA</option>
        <option>Canada</option>
      </select>

      <label>
        <input type="checkbox" name="termsAccepted" onChange={handleChange} />
        Accept Terms
      </label>

      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
