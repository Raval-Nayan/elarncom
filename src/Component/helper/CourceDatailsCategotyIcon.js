import React from 'react'
import { FaFolder } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";

const CourceDatailsCategotyIcon = () => {
  return (
    <div className="row">
    <div className="col-12 ">
      <p className="p-2">
        Cloud Computing | Web Apps | Linux | Web Servers | DBMS | LAMP
        Stack | HTML + More
      </p>
    </div>
    <div className="row ">
      <div className="col-12 col-md-4  border-end d-flex">
        <FaFolder className="display-6 p-2 text-muted" />
        <div className="">
          <h6 className="text-muted  m-0">CATEGORY</h6>{" "}
          <h6 className="">IT & Software</h6>
        </div>
      </div>
      <div className="col-12 col-md-4  border-end  d-flex">
        <PiStudent className="display-6 p-2 text-muted" />
        <div className="">
          <h6 className="text-muted  m-0">STUDENTS ENROLLED
          </h6>{" "}
          <h6 className="">8</h6>
        </div>
      </div>
      <div className="col-12 col-md-4  border-end d-flex">
        <SlCalender className="display-6 p-2 text-muted d-flex" />
        <div className="">
          <h6 className="text-muted  m-0">LAST UPDATED
          </h6>{" "}
          <h6 className="">4/4/2023</h6>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CourceDatailsCategotyIcon