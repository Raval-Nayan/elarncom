import React from "react";
import { NavLink } from "react-router-dom";
import CourceCard from "../courcecard/CourceCard";

const Courses = () => {
  return (
    <div>
      <div className="container-fluid main_banner p-5">
        <div className="container  ">
          <div className=" d-flex flex-column justify-content-center align-items-center  p-5">
            <h2 className="text_color">Courses</h2>
            <p className="">
              <NavLink className={"text-decoration-none text-success"} to="/">
                Home
              </NavLink>
              /courses
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container">
          <div>
            <select className="p-3">
              <option className="">Sort By</option>
              <option>Price: low to high</option>
              <option>Price: high to low</option>
            </select>
          </div>

          <div className="row  py-5">
            <div className="col-12 col-md-4 my-2 border">
            <NavLink to="/courses/coursesdetails">
            {" "}
            <CourceCard
              widths={"10rem"}
              title={"Ruby on Rails 2022 Live Class..."}
              dec={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"
              }
              lessons={"20 Lessons"}
              students={"12 Students"}
            />
          </NavLink>
            </div>
            <div className="col-12 col-md-4 my-2 border">
              <NavLink to="/courses/:id">
                {" "}
                <CourceCard
                  widths={"10rem"}
                  title={"Ruby on Rails 2022 Live Class..."}
                  dec={
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"
                  }
                  lessons={"20 Lessons"}
                  students={"12 Students"}
                />
              </NavLink>
            </div>

            <div className="col-12 col-md-4 my-2 border">
              <CourceCard
                widths={"10rem"}
                title={"Automate the Boring Stuff with Python Pr..."}
                dec={
                  "If you're an office worker, student, administrator, or just want to become more productive with your compute"
                }
                lessons={"21 Lessons"}
                students={"3 Students"}
              />
            </div>

            <div className="col-12 col-md-4 my-2 border">
              <CourceCard
                widths={"10rem"}
                title={"Pianoforall - Incredible New Way To Lear..."}
                dec={
                  "Learn Piano in WEEKS not years. Play-By-Ear & learn to Read Music. Pop, Blues, Jazz, Ballads, Improvisation,"
                }
                lessons={"426 Lessons"}
                students={"3 Students"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
