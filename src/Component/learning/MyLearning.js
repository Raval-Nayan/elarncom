import React, { useState } from "react";
import "../Layout/accountsettimg.css";
import AllCourses from "./AllCourses";
import Wishlist from "../Wishlist/Wishlist";

const MyLearning = ({redirect}) => {
  const [show, setShow] = useState(redirect);
  return (
    <div className="container">
      <h2 className="pt-5 pb-1 -5">My Learning</h2>
      <div className="setting_menu d-flex gap-2 ">
        <p
          className={show ? "point " : ""}
          onClick={() => {
            setShow(true);
          }}
        >
          All Courses
        </p>
        <p
          className={show ? " " : "point"}
          onClick={() => {
            setShow(false);
          }}
        >
          Wishlist
        </p>
      </div>

      <hr className="m-0" />
      {/*my-courses */}
      <div className={show ? "showfrom  " : "hideform"}>
        <div className="row ">
          <div className="col-12 col-md-4 py-3 ">
            <AllCourses></AllCourses>
          </div>
          <div className="col-12 col-md-4 py-3">
            <AllCourses></AllCourses>
          </div>
          <div className="col-12 col-md-4 py-3">
            <AllCourses></AllCourses>
          </div>
          <div className="col-12 col-md-4 py-3">
            <AllCourses></AllCourses>
          </div>
        </div>
      </div>

      {/*wishlist */}
      <div className={show ? " hideform" : "showform "}>
        <Wishlist />
      </div>
    </div>
  );
};

export default MyLearning;
