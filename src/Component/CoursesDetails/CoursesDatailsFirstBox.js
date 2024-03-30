import React from "react";
import CourceDatailsCategotyIcon from "../helper/CourceDatailsCategotyIcon";
import group from  '../../images/group.jpg'
import CourseAbout from "./CourseAbout";


const CoursesDatailsFirstBox = () => {
  return (
    <div className="container-fluid">
      <div className="container py-5 ">
       <CourceDatailsCategotyIcon/>
       <img className="img-fluid rounded p-3 " src={group} alt="group"></img>

       <div className="p-2">
      <CourseAbout/>
       
       
       </div>
      </div>
    </div>
  );
};

export default CoursesDatailsFirstBox;
