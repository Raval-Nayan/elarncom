import React from "react";
import "../Layout/home.css";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import card from "../../images/card.jpg";
import { IoLogoAppleAr } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import SingleFeatureBox from "../../SingleFetureBox";
import { MdComputer } from "react-icons/md";
import { SiMinds } from "react-icons/si";
import { CiLocationArrow1 } from "react-icons/ci";
import about from "../../images/about-img.png";
import { SiTrainerroad } from "react-icons/si";
import { FaRegClock } from "react-icons/fa";
import { IoIosMan } from "react-icons/io";
import CourceCard from "../courcecard/CourceCard";
import CarouselSlider from "../Carousel/Carousel";
import man from "../../images/man.jpg";
import man_leptop from "../../images/man-with-laptop.png";
import { FaBookOpen } from "react-icons/fa";
import img1 from "../../images/Glossier.png";
import img2 from "../../images/aesop.png";
import img3 from "../../images/kinfolk.png";
import img4 from "../../images/pegasus.png";
import img5 from "../../images/aesop.png";

import { RiRemoteControlFill } from "react-icons/ri";
import { useGlobalContext } from "../Contex/Contex";
const Home = () => {
  const {name}=useGlobalContext()
  return (
    <div>
      {/* Section-1 */}
      <div className="container-fluid main_banner ">
        <div className="">
          <div className="row  p-5">
            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center p-5  my-2">
              <div className="my-5  text-center text-md-start  ">
                <h1 className=" home_heading py-1   ">
                  {" "}
                  The World’s Leading Distance Learning Provider{name}
                </h1>
                <p className="py-1  text-start ">
                  Flexible easy to access learning opportunities can bring a
                  significant change in how individuals prefer to learn! The
                  eLearniv can offer you to enjoy the beauty of eLearning!
                </p>

                <NavLink to="#" className="">
                  <button className="button ">
                    <span className="button_lg">
                      <span className="button_sl"></span>
                      <span className="button_text d-flex justify-content-center align-items-center  ">
                        <FaUser className="m-1" /> Join For Free
                      </span>
                    </span>
                  </button>
                </NavLink>
              </div>
            </div>
            <div className="col-12 col-md-6  d-flex gap-2  my-2">
              <div className="card_box">
                <div className="card my-md-5 m-0 " style={{ width: "18rem" }}>
                  <div className="card_images  ">
                    <img
                      className=" p card-img-top"
                      src={card}
                      alt="Card"
                    ></img>

                    <div className=" d-flex gap-2 w-100 h-100 d-flex justify-content-end price_tag">
                      <div className="  circle   d-flex justify-content-center align-items-center">
                        <h5 className="p-1 text-decoration-line-through text-light font-weight-bold">
                          $499
                        </h5>
                      </div>

                      <div className="  bg-info circle text-center  d-flex justify-content-center align-items-center">
                        <h5 className="p-1  text-light font-weight-bold">
                          $499
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <ul className="p-0">
                      <li className="list-group-item">
                        <p>
                          {" "}
                          <IoLogoAppleAr className="text-primary mx-1 display-6" />
                          Instructor 1 User
                        </p>
                      </li>
                    </ul>
                    <h5 className="card-title">
                      <NavLink
                        className="text-decoration-none text-dark  "
                        to="#"
                      >
                        <h2 className="font_text">
                          Fitness-Yoga-Pilates Combined - Quick Home..
                        </h2>
                      </NavLink>
                    </h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>

                  <ul className="p-0">
                    <li className="list-group-item d-flex justify-content-around  ">
                      <p className="">
                        <FaBook className="m-1 " />
                        21 Lessons
                      </p>
                      <p>
                        <FaUsers className="m-1" />4 Students
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="card my-md-5 m-0 " style={{ width: "18rem" }}>
                  <div className="card_images ">
                    <img
                      className="z-0 card-img-top"
                      src={card}
                      alt="Card"
                    ></img>

                    <div className="d-flex gap-2 w-100 h-100 justify-content-end price_tag">
                      <div className="  circle text-center   d-flex justify-content-center align-items-center">
                        <h5 className="p-1 text-decoration-line-through text-light font-weight-bold">
                          $499
                        </h5>
                      </div>

                      <div className="  bg-info circle text-center  d-flex justify-content-center align-items-center">
                        <h5 className="p-1  text-light font-weight-bold">
                          $499
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <ul className="p-0">
                      <li className="list-group-item">
                        <p>
                          {" "}
                          <IoLogoAppleAr className="text-primary mx-1 display-6" />
                          Instructor 1 User
                        </p>
                      </li>
                    </ul>
                    <h5 className="card-title">
                      <NavLink
                        className="text-decoration-none text-dark"
                        to="#"
                      >
                        <h2 className="font_text">
                          Complete Workout: Complete Fitness Cert...
                        </h2>
                      </NavLink>
                    </h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>

                  <ul className="p-0">
                    <li className="list-group-item d-flex justify-content-around  ">
                      <p className="">
                        <FaBook className="m-1 " />
                        21 Lessons
                      </p>
                      <p>
                        <FaUsers className="m-1" />4 Students
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section-2 */}

      <div className="text-center d-flex flex-column p-5 py-5 h-100">
        <div className=" m-auto w-50">
          <p>EDUCATION FOR EVERYONE</p>
          <h2 className="text_color text-center ">
            Affordable Online Courses and Learning Opportunities​
          </h2>
          <p className="text_p  py-2">
            Finding your own space and utilize better learning options can
            result in faster than the traditional ways. Enjoy the beauty of
            eLearning!
          </p>
        </div>

        <div className="d-flex flex-wrap  gap-3 flex-md-nowrap  ">
          <SingleFeatureBox
            title={"Learn the Latest Top Skills"}
            dec={
              "Learning top skills can bring an extra-ordinary outcome in a career."
            }
            Icon={SiMinds}
          />
          <SingleFeatureBox
            title={"Learn in Your Own Pace"}
            dec={
              "Everyone prefers to enjoy learning at their own pace & that gives a great result."
            }
            Icon={MdComputer}
          />
          <SingleFeatureBox
            title={"Learn From Industry Experts"}
            dec={
              "Experienced teachers can assist in learning faster with their best approaches!"
            }
            Icon={CiLocationArrow1}
          />
        </div>
      </div>

      {/* Section-3 */}

      <div className="container_fluid main_banner h-100">
        <div className="p-5 py-5">
          <div className=" main_banner">
            <div className="row">
              <div className="col-12 col-md-6 ">
                <div className="d-flex align-items-center">
                  {" "}
                  <img className="img-fluid p-md-5" src={about} alt="img" />
                </div>
              </div>

              <div className="col-12 col-md-6 mt-2 mt-md-4">
                <p>ONLINE LEARNING</p>
                <h2 className="">
                  Develop Your Skills, Learn Something New, and Grow Your Skills
                  From Anywhere in the World!
                </h2>
                <p className="py-2">
                  We understand better that online-based learning can make a
                  significant change to reach students from all over the world!
                  Giving options to learn better always can offer the best
                  outcomes!
                </p>
                <div className="row py-2 pb-5">
                  <div className="col-12 col-md-6 d-flex gap-1 align-items-center justify-content-start">
                    <SiTrainerroad className="display-6 rounded-circle p-2 bg-light  text-success" />{" "}
                    <p className="p-2 train_text ">Expert Trainers</p>
                  </div>
                  <div className="col-12 col-md-6 d-flex gap-1 align-items-center justify-content-start">
                    <FaRegClock className="display-6 rounded-circle p-2 bg-light  text-success" />{" "}
                    <p className="p-2 train_text">Remote Learning</p>
                  </div>
                  <div className="col-12 col-md-6 d-flex gap-1 align-items-center justify-content-start">
                    <RiRemoteControlFill className="display-6 rounded-circle p-2 bg-light  text-success" />{" "}
                    <p className="p-2 train_text">Lifetime Acces</p>
                  </div>

                  <div className="col-12 col-md-6 d-flex gap-1 align-items-center justify-content-start">
                    <IoIosMan className="display-6 rounded-circle p-2 bg-light  text-success" />{" "}
                    <p className="p-2 train_text">Self Development</p>
                  </div>
                </div>

                <NavLink to="#">
                  <button className="button">
                    <span className="button_lg">
                      <span className="button_sl"></span>
                      <span className="button_text d-flex justify-content-center align-items-center  ">
                        <FaUser className="m-1" /> View All Courses
                      </span>
                    </span>
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section-4*/}
      <div className="container-fluid ">
        <div className="p-5 py-5 ">
          <div className="text-center">
            <h6 className=" text-success">LEARN AT YOUR OWN PACE</h6>
            <h1 className="font-weight-bold ">eLearniv Popular Courses</h1>
            <div className="d-flex justify-content-center">
              <p className="pb-5 pt-3 w-75">
                Explore all of our courses and pick your suitable ones to enroll
                and start learning with us! We ensure that you will never regret
                it!
              </p>
            </div>
          </div>

          <div className="d-flex flex-wrap px-5 flex-md-nowrap gap-4 ">
            <CourceCard
              title={"Web Development Masterclass - Online Cer..."}
              dec={
                "Cloud Computing | Web Apps | Linux | Web Servers | DBMS | LAMP Stack | HTML + More"
              }
              lessons={"10 Lessons"}
              students={"8 Students"}
            />
            <CourceCard
              title={"Ruby on Rails 2022 Live Class..."}
              dec={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"
              }
              lessons={"20 Lessons"}
              students={"11 Students"}
            />
            <CourceCard
              title={"Automate the Boring Stuff with Python Pr..."}
              dec={
                "If you're an office worker, student, administrator, or just want to become more productive with your compute"
              }
              lessons={"21 Lessons"}
              students={"3 Students"}
            />
          </div>

          <div className="d-flex justify-content-center">
            <p className="text-center py-5 w-50 ">
              Enjoy the top notch learning methods and achieve next level
              skills! You are the creator of your own career & we will guide you
              through that.<NavLink to="#"> Register Free Now!</NavLink>
            </p>
          </div>
        </div>
      </div>

      {/* Section-5*/}

      <div className="container-fluid m-0 main_banner py-5">
        <div className="p-5">
          <div className="row">
            <div className="col-12  col-md-6 m-0 p-5">
              <div className="text-start ">
                {" "}
                <h6 className="text-success py-2">DISTANCE LEARNING</h6>
                <h3 className="text_color">
                  Flexible Study at Your Own Pace, According to Your Own Needs
                </h3>
                <p>
                  With the eLearniv, you can study whenever and wherever you
                  choose. We have students in over 175 countries and a global
                  reputation as a pioneer in the field.
                </p>
              </div>
              <div className="">
                <CarouselSlider  />
              </div>
            </div>
            <div className="col-12 col-md-6 m-0 ">
              <div className="d-flex border  justify-content-center align-items-center h-100">
                <div className="row m-0  border  gap-3    ">
                  <div className="col-12  col-md-5 d-flex flex-column justify-content-center align-items-center bg-light  rounded shadow">
                    <div className=" d-flex  flex-column justify-content-center align-items-center">
                      {" "}
                      <h3 className="text-success text_color">3</h3>
                      <h6>ACTIVE LEARNERS</h6>
                    </div>
                  </div>
                  <div className="col-12 col-md-5 p-5 text-center d-flex flex-column  bg-light rounded shadow ">
                  <div className=" d-flex flex-column justify-content-center align-items-center">
                      {" "}
                      <h3 className="text-success text_color">56</h3>
                      <h6>ENROLLED COURSES</h6>
                    </div>
                  </div>
                  <div className="col-12 col-md-5 p-5 text-center d-flex flex-column  bg-light rounded shadow">
                  <div className=" d-flex flex-column justify-content-center align-items-center">
                  {" "}
                  <h3 className="text-success text_color">2</h3>
                  <h6>ONLINE INSTRUCTORS</h6>
                </div>
                  </div>
                  <div className="col-12 col-md-5 p-5 text-center d-flex flex-column bg-light rounded shadow ">
                  <div className=" d-flex flex-column justify-content-center align-items-center">
                  {" "}
                  <h3 className="text-success text_color">10</h3>
                  <h6>ON DEMAND COURSES</h6>
                </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section-6*/}
      <div className="container-fluid m-0  bg-light py-5">
        <div className="p-5">
          <div className="row p-5 ">
            <div className="col-12 col-md-6 main_banner p-5  d-flex justify-content-center align-items-center ">
              <div className="p-2">
                <h6 className="text-success">GET INSTANT ACCESS TO THE FREE</h6>
                <h2 className="text_color py-2">Self Development Course</h2>
                <p className="pb-2">
                  eLearniv Self Development Course can assist you in bringing
                  the significant changes in personal understanding and
                  reshaping the confidence to achieve the best from your career!
                  We trust that learning should be enjoyable, and only that can
                  make substantial changes!
                </p>
                <NavLink to="#">
                  <button className="button">
                    <span className="button_lg">
                      <span className="button_sl"></span>
                      <span className="button_text d-flex justify-content-center align-items-center  ">
                        <FaUser className="m-1" /> Start For Free
                      </span>
                    </span>
                  </button>
                </NavLink>
              </div>
            </div>
            <div className="col-12 col-md-6 p-5 main_banner ">
              <img className=" img-fluid" src={man} alt="man"></img>
            </div>
          </div>
        </div>
      </div>

      {/* Section-7*/}
      <div className="container-fluid m-0  main_banner py-5">
        <div className="container  ">
          <div className="row ">
            <div className="col-12 col-md-6 border d-flex justify-content-center align-items-center ">
              <div className="p-2">
                <h6 className="text-success">DISTANCE LEARNING</h6>
                <h2 className="text_color py-2">
                  Feel Like You Are Missing Something?
                </h2>
                <p className="pb-2">
                  eLearniv training programs can bring you a super exciting
                  experience of learning through online! You never face any
                  negative experience while enjoying your Classes virtually by
                  sitting in your comfort zone. Our flexible learning
                  initiatives will help you to learn better and quicker than the
                  traditional ways of learning.
                </p>
                <NavLink to="#">
                  <button className="button">
                    <span className="button_lg">
                      <span className="button_sl"></span>
                      <span className="button_text d-flex justify-content-center align-items-center  ">
                        <FaBookOpen className="m-1" /> Review My Wishlist
                      </span>
                    </span>
                  </button>
                </NavLink>
              </div>
            </div>
            <div className="col-12 col-md-6 p-5">
              <img className=" img-fluid" src={man_leptop} alt="man"></img>
            </div>
          </div>
        </div>
      </div>

      {/* Section-8*/}

      <div className="container-fluid">
        <div className="row justify-content-center py-5">
          <div className="col-6 col-md-2">
            <img className="img-fluid" src={img1} alt="img"></img>
          </div>

          <div className="col-6 col-md-2">
            <img className="img-fluid" src={img2} alt="img"></img>
          </div>
          <div className="col-6 col-md-2">
            <img className="img-fluid" src={img3} alt="img"></img>
          </div>
          <div className="col-6 col-md-2">
            <img className="img-fluid" src={img4} alt="img"></img>
          </div>
          <div className="col-6 col-md-2">
            <img className="img-fluid" src={img5} alt="img"></img>
          </div>
        </div>
      </div>

      {/* Section-8*/}

      <div className="container-fluid color_white py-5">
        <div className="container  d-flex justify-content-center">
          <div className="w-75  text-center">
            <p className="text_success">GO AT YOUR OWN PACE</p>
            <h2 className="text_color text-center">Subscribe To Our Newsletter</h2>
            <p className="py-2 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div class="input-group">
              <input
                type="email  "
                className="form-control  h-75 p-3"
                placeholder="Enter your Email Address"
                aria-label="Text input with dropdown button"
              />
              <div class="input-group-append mt-1">
                <NavLink to="#">
                  <button className="button">
                    <span className="button_lg">
                      <span className="button_sl"></span>
                      <span className="button_text d-flex justify-content-center align-items-center  ">
                        <FaUser className="m-1" /> Subscribe Now
                      </span>
                    </span>
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
