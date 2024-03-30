import React from "react";
import "../Layout/footer.css";
// import logo from "../../images/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { FaMessage } from "react-icons/fa6";
import { FaImage } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container-fluid footer_color py-5  ">
      <div className="container">
        <div className="">
          <div className="row ">
            <div className="col-12  col-md-4 p-5 py-md-2 ">
              <h3 className="texts">Elearniv</h3>
              <p className="texts">
                Working to bring significant changes in online-based learning by
                doing extensive research for course curriculum preparation,
                student engagements, and looking forward to the flexible
                education!
              </p>
              <div className="d-flex gap-5  "></div>
              <FaFacebookF className="text-light display-6 p-2 texts" />
              <FaTwitter className="text-light display-6 p-2 texts " />
              <FaInstagramSquare className="text-light p-2 texts display-6  " />
              <FaLinkedin className="text-light  display-6  p-2 texts" />
            </div>
            <div className="col-12  col-md-4   py-3 py-md-2 ">
          
              <h3 className="texts  text-center  w-50 p-2 ">Explore</h3>
              <div>
                <ul className="">
                  <li className=" texts">
                    <NavLink className="nav_text texts " to="/">
                      Home
                    </NavLink>
                  </li>
                  <li className=" texts">
                    <NavLink className="nav_text texts " to="#">
                      About
                    </NavLink>
                  </li>
                  <li className=" texts">
                    {" "}
                    <NavLink className="nav_text texts" to="/courses">
                      Courses
                    </NavLink>
                  </li>
                  <li className=" texts">
                    <NavLink className="nav_text texts " to="#">
                      Contact Us
                    </NavLink>
                  </li>
                  <li className=" texts">
                    <NavLink className="nav_text texts" to="#">
                      FAQ
                    </NavLink>
                  </li>
                </ul>
              </div>
              
             
            </div>
            <div className="col-12  col-md-4 py-3 py-md-2 ">
            <h3 className="texts  w-50 text-center ">Address</h3>

              <div className="">
                <ul className=" ">
                  <li className=" texts ">
                    <FaLocationDot className="text-white p-2 display-6 p-2" />
                    2750 Quadra Street Golden Victoria Road, New York, USA
                  </li>
                  <li className=" texts">
                    <IoCall className="text-light  p-2 display-6 p-2" />
                    +1 (123) 456 7890
                  </li>
                  <li className=" texts">
                    {" "}
                    <FaMessage className="text-light p-2 display-6 p-2" />{" "}
                    hello@eLearniv.com
                  </li>
                  <li className=" texts">
                    <FaImage className="text-light p-2 display-6 p-2" />
                    55 785 4578964
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row d-flex  py-2">
            <div className="col-12 col-md-6 py-3 px-4 py-md-3">
              <p className="texts">
                {" "}
                @2024 eLearniv is Proudly Powered by{" "}
                <span className="text-success">EnvyTheme</span>
              </p>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-center py-3 py-md-3">
              <div className="texts"> Privacy Policy Terms & Conditions</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
