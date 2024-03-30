import React from "react";
import img from "../../images/course_card.jpg";
import "../Layout/lerning.css";
import { FaRegCirclePlay } from "react-icons/fa6";

import { NavLink } from "react-router-dom";
const AllCourses = () => {
  return (
    <div className="border d-flex justify-content-center flex-column  ">
      <NavLink className={"text-decoration-none "} to="course-name">
        <div className="container_img">
          <img src={img} alt="img" className="img-fluid image " />
          <div class="middle">
            <div class="text">
              <FaRegCirclePlay />
            </div>
          </div>
        </div>
      </NavLink>
      <div className="p-1">
       <NavLink className={"text-decoration-none text-dark"} to="course-name"> <h6 className="pt-2">Fitness-Yoga-Pilates Combined - Quick Home Workout Program</h6></NavLink>
        <p>Instructor1 User</p>
        <p>Start Course</p>
      </div>
    </div>
  );
};

export default AllCourses;
