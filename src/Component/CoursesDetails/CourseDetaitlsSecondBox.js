import React from "react";
import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import CourseDetailsIcon from "../helper/CourseDetailsIcon";
import { RiLiveFill } from "react-icons/ri";
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoTimerSharp } from "react-icons/io5";
import { MdPlayLesson } from "react-icons/md";
import { AiFillDatabase } from "react-icons/ai";
import { IoLanguage } from "react-icons/io5";
import { FaFileVideo } from "react-icons/fa";
import { IoAccessibility } from "react-icons/io5";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { CiShare2 } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { FaCartArrowDown } from "react-icons/fa6";
import '../Layout/coursedetailssecondbox.css'
const CourseDetaitlsSecondBox = () => {
  return (
    <div className="p-4  ">
     <div className="">
     <div className="d-flex gap-2  bg-body align-items-center justify-content-end">
     <h2 className="text_color">$35</h2>
     <NavLink to="/authentication ">
       <button className="button">
         <span className="button_lg">
           <span className="button_sl"></span>
           <span className="button_text"><FaCartShopping  className="m-1"/>
           Buy Courses</span>
         </span>
       </button>
     </NavLink>
   </div>

   <div className="shadow-sm p-1 rounded  bg-body">
     <CourseDetailsIcon
       Icon={RiLiveFill}
       title={"Live Class"}
       dec={"No"}
       className="text-muted"
      
     ></CourseDetailsIcon>
     <CourseDetailsIcon
       Icon={FaChalkboardTeacher}
       title={"Instructor"}
       dec={"Instructor1 User"}
     ></CourseDetailsIcon>
     <CourseDetailsIcon
       Icon={IoTimerSharp}
       title={"Duration"}
       dec={"2h 6m total length"}
     ></CourseDetailsIcon>
     <CourseDetailsIcon
       Icon={MdPlayLesson}
       title={"Lessons"}
       dec={"10"}
     ></CourseDetailsIcon>
     <CourseDetailsIcon
       Icon={AiFillDatabase}
       title={"Enrolled"}
       dec={"8 students"}
     ></CourseDetailsIcon>
     <CourseDetailsIcon
       Icon={IoLanguage}
       title={"Language"}
       dec={"English"}
     ></CourseDetailsIcon>
     <CourseDetailsIcon
       Icon={FaFileVideo}
       title={"Video Subtitle"}
       dec={"N/A"}
     ></CourseDetailsIcon>
     <CourseDetailsIcon
       Icon={IoAccessibility}
       title={"Access"}
       dec={"Lifetime"}
     ></CourseDetailsIcon>
     <CourseDetailsIcon
       Icon={AiFillSafetyCertificate}
       title={"Certificate"}
       dec={"Yes"}
     ></CourseDetailsIcon>
     <div className="text-center">
       <NavLink className={"text-decoration-none "} to="#">
         {" "}
         Apply Coupon
       </NavLink>
       <div className="d-flex p-3">
         <input placeholder="Enter Code" className="form-control "></input>
         <button className="btn btn-success">Apply</button>
       </div>

       <NavLink to="#" className="">
         <button className="button w-100">
           <span className="button_lg">
             <span className="button_sl"></span>
             <span className="button_text ">
               <FaCartArrowDown className=" text-white m-2" />
               Add to Cart
             </span>
           </span>
         </button>
       </NavLink>


       <div>
       <h6 className="text-success">Share This Course<span className="p-2"><CiShare2 /></span> </h6>
       </div>

       <div>
       <div className=" d-flex gap-1 justify-content-center py-2">
       <FaFacebookF  className="text-black bg-light display-6 p-2 iconhover" />
       <FaTwitter className="text-black bg-light display-6 p-2 iconhover " />
       <FaInstagramSquare className="text-black bg-light p-2 iconhover display-6  " />
       <FaLinkedin className="text-black  bg-light display-6 iconhover  p-2 texts" />
       
       </div>
       </div>
     </div>
   </div>
     
     </div>
    </div>
  );
};

export default CourseDetaitlsSecondBox;
