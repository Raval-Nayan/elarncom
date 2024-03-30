import React from "react";
import "../Layout/courceabout.css";
import { MdOutlineClass } from "react-icons/md";
import CoursedetailsLearnTopic from "./CoursedetailsLearnTopic";
const CourseAbout = () => {
  return (
    <div className="">
      <div>
        <h2 className="font-weight-bold">About this course</h2>
        <div className="">
          <p>
            This course offers a comprehensive look into the entire web
            development process - from local server configuration using WAMP and
            MAMP (Apache, MySQL, PHP) to production deployment using the latest
            web technologies including: LAMP Stack (Linux, Apache, PHP and
            MySQL) for Ubuntu, HTML5, CSS, Bootstrap, JavaScript, jQuery, XML,
            and AJAX.
            <br />
            The content is ideal for those interested in working as a web
            developer, launching a web application, or devoted enthusiasts. The
            concepts explored in this course are suitable for individuals of all
            skill levels. Each module starts with the fundamental concepts and
            gradually transitions into more advanced material.
          </p>

          <h6 className="text-success">
            Section 1 & 2 (Introduction, How the Internet Works)
          </h6>
          <p>
            The course begins with with an overview of learning objectives. We
            then explore how the internet works, including the composition and
            transmission of data packets over both local and wide-area Networks.
            Next we take a look at the HTTP and HTTPS protocols as applicable to
            client and server side communications - including DNS Lookups. This
            section will also teach students how email exchange works over SMTP
            and IMAP. The role of Network Ports and Firewalls are also
            introduced.
          </p>
        </div>
      </div>

      {/*Courses Video */}

      <div>
        <h3 lang="font-weight-bold">Courses Video</h3>

        <div className="row pt-2">
          <div className="col-12 py-4 shadow-sm border">
            <div className="row  backcolor ">
              <div className="col-12  col-md-8 r d-flex  justify-content-start align-items-center  ">
                <MdOutlineClass className="display-6 p-2" />
                <h6 className="font-weight-bold webicon pt-1">
                  {" "}
                  Web Development Master class
                </h6>
              </div>
              <div className="col-12  p-2 col-md-4 d-flex justify-content-md-end gap-2">
                <button className="p-1 text-muted border-0 rounded">
                  {" "}
                  12 Seconds
                </button>
                <button className="p-1 text-light  border-0  rounded bg-dark">
                  {" "}
                  Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*CoursedetailsLearnTopic */}

      <div className="py-2">
        <CoursedetailsLearnTopic />
      </div>
    </div>
  );
};

export default CourseAbout;
