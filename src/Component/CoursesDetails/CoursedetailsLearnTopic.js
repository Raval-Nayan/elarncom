import React from "react";
import "../Layout/courceabout.css";
import bg from "../../images/bg.jpg";
import { BiLogoKubernetes } from "react-icons/bi";

const CoursedetailsLearnTopic = () => {
  return (
    <div className="">
      <div className="">
        <h2 className="py-2">What you will learn</h2>
        <ul className="list_style">
          <li className="p-0 ">
            <p>Understand the essentials of Local and Wide Area Networks</p>
          </li>
          <li>
            <p>Setup a basic network</p>
          </li>
          <li>
            <p>Register a domain name with Domain Privacy</p>
          </li>
          <li>
            <p>Forward a domain, renew and administer a domain</p>
          </li>
          <li>
            <p>Configure Nameservers and DNS Zone Files</p>
          </li>
          <li>
            <p>
              Create and Configure a Testing server on a Local Windows or MAC
              System.
            </p>
          </li>
          <li>
            <p>
              Configure a Production web server on popular cloud hosting
              platforms.
            </p>
          </li>
          <li>
            <p>
              Create disk backups and install disk images on a virtual server
            </p>
          </li>
          <li>
            <p>Setup Ubuntu on a Virtual Machine</p>
          </li>
          <li>
            <p>Install and configure WAMP for Windows</p>
          </li>
          <li>
            <p>Install and configure MAMP for MAC</p>
          </li>
        </ul>
      </div>

      <div className="">
        <h2 className="py-2">Requirements</h2>
        <ul className="list_style">
          <li className="p-0 ">
            <p>Understand the essentials of Local and Wide Area Networks</p>
          </li>
          <li>
            <p>Setup a basic network</p>
          </li>
          <li>
            <p>Register a domain name with Domain Privacy</p>
          </li>
          <li>
            <p>Forward a domain, renew and administer a domain</p>
          </li>
          <li>
            <p>Configure Nameservers and DNS Zone Files</p>
          </li>
          <li>
            <p>
              Create and Configure a Testing server on a Local Windows or MAC
              System.
            </p>
          </li>
          <li>
            <p>
              Configure a Production web server on popular cloud hosting
              platforms.
            </p>
          </li>
          <li>
            <p>
              Create disk backups and install disk images on a virtual server
            </p>
          </li>
          <li>
            <p>Setup Ubuntu on a Virtual Machine</p>
          </li>
          <li>
            <p>Install and configure WAMP for Windows</p>
          </li>
          <li>
            <p>Install and configure MAMP for MAC</p>
          </li>
        </ul>
      </div>

      <div className="">
        <h2 className="py-2">Who this course is for:</h2>
        <ul className="list_style">
          <li className="p-0 ">
            <p>Understand the essentials of Local and Wide Area Networks</p>
          </li>
          <li>
            <p>Setup a basic network</p>
          </li>
          <li>
            <p>Register a domain name with Domain Privacy</p>
          </li>
          <li>
            <p>Forward a domain, renew and administer a domain</p>
          </li>
          <li>
            <p>Configure Nameservers and DNS Zone Files</p>
          </li>
          <li>
            <p>
              Create and Configure a Testing server on a Local Windows or MAC
              System.
            </p>
          </li>
          <li>
            <p>
              Configure a Production web server on popular cloud hosting
              platforms.
            </p>
          </li>
          <li>
            <p>
              Create disk backups and install disk images on a virtual server
            </p>
          </li>
          <li>
            <p>Setup Ubuntu on a Virtual Machine</p>
          </li>
          <li>
            <p>Install and configure WAMP for Windows</p>
          </li>
          <li>
            <p>Install and configure MAMP for MAC</p>
          </li>
        </ul>
      </div>

      {/* Meet You Instructors */}

      <div className="d-flex flex-column bg-light">
        <div className="bg-light">
          <img className="img-fluid" src={bg} alt="img"></img>
          <BiLogoKubernetes className="text-light logo_icon  bg-primary  display-2 rounded-circle  " />
        </div>
        <div className="  p-2   ">
          <h5 className="card-title">Instructor1 User</h5>
          <h6 className="card-title text-success py-2">Teacher</h6>
          <p className="card-text">
            AP consultant and the #1 SAP instructor on Udemy. I hope you find my
            courses interesting and I really hope you enjoy them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoursedetailsLearnTopic;
