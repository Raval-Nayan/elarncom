import React, { useState } from "react";

const Register = () => {
  // State to manage form input values
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic here
    // For simplicity, let's just log the form data
    console.log(formData);
    // Reset form fields after successful submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
    // You can add further validation and submit the data to your backend
  };

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className=" ">
      <div className="registration-form bg-body  p-4">
        <h2 className="text_color">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group p-2">
            <label className="py-1" htmlFor="firstName">
              First Name:
            </label>
            <input
              placeholder="First Name"
              className="form-control  "
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group p-2">
            <label className="py-1" htmlFor="lastName">
              Last Name:
            </label>
            <input
              placeholder="Last Name"
              className="form-control "
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group p-2">
            <label className="py-1" htmlFor="mail">
              Email:
            </label>
            <input
              placeholder=" Email"
              className="form-control"
              type="email"
              id="mail"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group p-2">
            <label className="py-1" htmlFor="pass">
              Password
            </label>
            <input
              placeholder="Password"
              className="form-control"
              type="password"
              id="pass"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="pt-3 p-2">
            <button className="w-100 btn btn-success" type="submit">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
