import React from "react";
import { NavLink } from "react-router-dom";
import CourseDetaitlsSecondBox from "./CourseDetaitlsSecondBox";
import "../Layout/coursedetailssecondbox.css";
import CoursesDatailsFirstBox from "./CoursesDatailsFirstBox";

const CoursesDetails = ({ title }) => {
  return (
    <div>
      <div className="container-fluid main_banner p-5">
        <div className="container  ">
          <div className=" d-flex flex-column justify-content-center align-items-center  p-5">
            <h2 className="text_color">{title}</h2>
            <p className="">
              <NavLink className={"text-decoration-none text-success"} to="/">
                Home
              </NavLink>
              /{title}
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container ">
          <div className="row  ">
            <div className="col-md-8 col-12">
              <CoursesDatailsFirstBox/>
            </div>
            <div className=" col-md-4 col-12  ">
             <div className=" " > <CourseDetaitlsSecondBox /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesDetails;
