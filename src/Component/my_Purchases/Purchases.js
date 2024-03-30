import React from "react";
import { NavLink } from "react-router-dom";
import my_purchase from "../../images/my purchase.jpg";

const Purchases = () => {
  return (
    <div>
      <div className="container-fluid main_banner p-5">
        <div className="container  ">
          <div className=" d-flex flex-column justify-content-center align-items-center  p-5">
            <h2 className="text_color">My Purchases</h2>
            <p className="">
              <NavLink className={"text-decoration-none text-success"} to="/">
                Home
              </NavLink>
              /My Purchases
            </p>
          </div>
        </div>
      </div>
      {/*My Purchases Card */}
      <div className="container-fluid">
        <div className="container  ">
          <div className="shadow w-75 m-auto bg-light p-2 mt-5 py-2  d-md-flex justify-content-between p-1">
            <div className="d-md-flex gap-3 align-items-center">
              <div className="">
                <img
                  className="img-fluid  "
                  style={{height:"100px"}}
                  src={my_purchase}
                  alt="my_purchase"
                ></img>
              </div>
              <div className="p-1">
                <h6>Ruby on Rails 2022 Live Class</h6>
                <p>By Instructor1 User</p>
                <div className="d-flex justify-content-between">
                  <p>2 Weeks</p>
                  <p>20Lifetime</p>
                </div>
              </div>
            </div>
            <div className="d-md-flex gap-2 justify-content-center  w-25 align-items-center ">
              <div className="">
                <h6>$99.99 </h6>
              </div>
              <div className="">
                <h6>2/14/2024</h6>
              </div>
            </div>
          </div>
          <div className="shadow w-75 m-auto bg-light p-2 mt-5 py-2  d-md-flex justify-content-between p-1">
          <div className="d-md-flex gap-3 align-items-center">
            <div className="">
              <img
                className="img-fluid  "
                style={{height:"100px"}}
                src={my_purchase}
                alt="my_purchase"
              ></img>
            </div>
            <div className="p-1">
              <h6>Ruby on Rails 2022 Live Class</h6>
              <p>By Instructor1 User</p>
              <div className="d-flex justify-content-between">
                <p>2 Weeks</p>
                <p>20Lifetime</p>
              </div>
            </div>
          </div>
          <div className="d-md-flex gap-2 justify-content-center  w-25 align-items-center ">
            <div className="">
              <h6>$99.99 </h6>
            </div>
            <div className="">
              <h6>2/14/2024</h6>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Purchases;
