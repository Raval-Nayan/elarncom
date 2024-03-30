import React from "react";

import { NavLink } from "react-router-dom";
import Register from "../Register/Register";
import Login from "../Login/Login";

const Authentication = () => {
  return (
    <div>
      <div className="container-fluid main_banner p-5">
        <div className="container  ">
          <div className=" d-flex flex-column justify-content-center align-items-center  p-5">
            <h2 className="text_color">Authentication</h2>
            <p className="">
              <NavLink className={"text-decoration-none text-success"} to="/">
                Home
              </NavLink>
              /Authentication
            </p>
          </div>
        </div>
      </div>

      <div className="container p-4">
        <div className="row">
          <div className="col-12 col-md-5  d-flex justify-content-center align-items-center shadow shadow">
            <Login />
          </div>
          <div className="col-12 col-md-7   p-5 rounded shadow-sm">
          
            <Register />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
