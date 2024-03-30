import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import '../Layout/register.css'
import axios from "axios";
import { useGlobalContext } from "../Contex/Contex";


const Login = () => {
  const [errorlog, setErrorLog]=useState(false)
  const { isLogin, isLoading,dispatch}=useGlobalContext()
  const navigate =useNavigate()

console.log( isLogin ,isLoading,"login loading")

  // State to manage form input values
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Function to handle form submission
  const handleSubmit = async(e) => {
    e.preventDefault();

    try{
      const  userData={
        email:formData.email,
        password:formData.password,
        user_type: "salon_owner",
      }
      const response =await axios.post("http://elpoir.thethreewings.com/api/salonowner/login", userData);
      console.log(response.data); // Log response from server
      const token=response.data.token;
      localStorage.setItem("token", token);
      dispatch({ type: "GET_TOKEN"})
      setErrorLog(false)
      navigate("/");
      console.log(response.data.token)
    }catch(error){
      
      console.error("Login error:", error);
      setErrorLog(true)

    }
   

    
    console.log(formData);


   
    setFormData({
      email: "",
      password: "",
    });
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
    <div className="login-form bg-body p-5">
      <h2 className="text_color">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="py-1" htmlFor="email ">Email:</label>
          <input
          className="form-control "
          placeholder="Email"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label  className="py-1" htmlFor="password">Password:</label>
          <input
          placeholder="Password"
          className="form-control"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        <label className="p-1">{errorlog? "password does not match" : ""}</label>
        <label>{isLogin? "Login Sucessfuly" : ""}</label>
        </div>
        <p className="py-3">
        <NavLink className={"text-decoration-none"} to="# ">Didn't receive a confirmation email?</NavLink>
        </p>
        <button className="btn btn-success w-100" type="submit" >Login</button>
      </form>
    </div>
  );
};

export default Login;
