import React, { useState } from "react";
import "/node_modules/video-react/dist/video-react.css";
import "../Layout/courcevideo.css";
import { FaRegPlayCircle } from "react-icons/fa";

import { Player } from "video-react";
import { NavLink } from "react-router-dom";
const CourseVideo = () => {
  const [showData1, setShowData1] = useState(true);
  const [showData2, setShowData2] = useState(false);
  const [showData3, setShowData3] = useState(false);
  const [showData4, setShowData4] = useState(false);
  const [showData5, setShowData5] = useState(false);

  const showdata1 = () => {
    setShowData1(true);
    setShowData2(false);
    setShowData3(false);
    setShowData4(false);
    setShowData5(false);

    console.log(showData1, showData2, showData3, showData4, showData5);
  };

  const showdata2 = () => {
    setShowData2(true);
    setShowData1(false);
    setShowData3(false);
    setShowData4(false);
    setShowData5(false);
    console.log(showData1, showData2, showData3, showData4, showData5);
  };

  const showdata3 = () => {
    setShowData1(false);
    setShowData2(false);
    setShowData3(true);
    setShowData4(false);
    setShowData5(false);
    console.log(showData1, showData2, showData3, showData4, showData5);
  };

  const showdata4 = () => {
    setShowData1(false);
    setShowData2(false);
    setShowData3(false);
    setShowData4(true);
    setShowData5(false);
    console.log(showData1, showData2, showData3, showData4, showData5);
  };

  const showdata5 = () => {
    setShowData1(false);
    setShowData2(false);
    setShowData3(false);
    setShowData4(false);
    setShowData5(true);
    console.log(showData1, showData2, showData3, showData4, showData5);
  };
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-12 col-md-8">
          <div>
            {" "}
            <Player
              preload="auto"
              playsInline
              poster="../../images/man-with-laptop.png"
              src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            />
          </div>

          <div>
            {/*OverView */}
            <div className="  py-2 ">
              <ul className="d-flex setting_menu  p-0 gap-3 ">
                <li
                  className={
                    showData1 ? "  bottomhover1 list-style-none  p-2 " : " p-2"
                  }
                  onClick={() => {
                    showdata1();
                  }}
                >
                  Overview
                </li>
                <li
                  className={showData2 ? "  bottomhover1  p-2 " : "p-2"}
                  onClick={() => {
                    showdata2();
                  }}
                >
                  Assets
                </li>
                <li
                  className={showData3 ? "bottomhover1   p-2 " : "p-2"}
                  onClick={() => {
                    showdata3();
                  }}
                >
                  Discussion
                </li>
                <li
                  className={showData4 ? " bottomhover1   p-2 " : "p-2 "}
                  onClick={() => {
                    showdata4();
                  }}
                >
                  Leave a rating
                </li>
                <li
                  className={showData5 ? "bottomhover1   p-2 " : "p-2 "}
                  onClick={() => {
                    showdata5();
                  }}
                >
                  Leave a feedback
                </li>
              </ul>
            </div>

            <hr className="m-0"/>

            <div className="">
              {/*overview */}
              <div className={showData1 ? "text_show1 py-5 " : " text_none1"}>
                <h3 className="">About this course</h3>
                <p>Let me ask you a few questions ;</p>
                <p>
                  -Are you happy with the extra pounds you're carrying around ?
                  )
                </p>
                <p>-Are you happy with your well-being ?</p>
                <p>
                  {" "}
                  -Do you wanna know what is it feel like to wake up without
                  back pain and fully energized ?
                </p>
                <p> -Have you ever thought why you can't lose weight ?</p>
                <h6>I`ve been there :)</h6>

                <p>
                  What if I told you there's one thing , just one thing that can
                  help you to change your current situation?
                </p>
                <p>-IF you can spend 25 minutes , 3 times a week,</p>
                <p>
                  {" "}
                  -IF you want to see difference in short period of time and
                  will motivate you,
                </p>
                <p>
                  {" "}
                  -IF you can follow a dietary program that won't put you on
                  starving,
                </p>
              </div>
            </div>

            <div className="">
              {/*Assets */}
              <div className={showData2 ? "text_show2 py-5" : " text_none2"}>
                <div className="text-center"> Empty</div>
              </div>
            </div>

            <div className="">
              {/*Discussion*/}
              <div className={showData3 ? "text_show3 py-5 " : " text_none3"}>
               <h4>Course Discussion Coming Soon...</h4>
              </div>
            </div>

            <div className="">
              {/*Leave a rating */}
              <div className={showData4 ? "text_show4 py-5" : " text_none4"}>
              <h4>Course Discussion Coming Soon...</h4>
              </div>
            </div>

            <div className="">
              {/*Leave a feedback */}
              <div className={showData5 ? "text_show5 py-5 " : " text_none5"}>
              <h4>Course Discussion Coming Soon...</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
        <h5 className="text-muted ">Your progress 1 of 1 complete.<NavLink to="certificate"> Get certificate</NavLink></h5>
        <div className="bg-success text-center rounded my-2 text-white">100%</div>
        <h6>Fitness-Yoga-Pilates Combined - Quick Home Workout Program</h6>

        <div className="">
        <ul className="sidebar_li">
        <li><div><p className=" m-0"> Diet Plan Example for Men</p><small className=" m-0"> <FaRegPlayCircle className="m-1" />
        3 second</small></div></li>
        </ul>
        
        </div>
        </div>
      </div>
    </div>
  );
};

export default CourseVideo;
