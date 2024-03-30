import React, { useState } from "react";
import "../Layout/navbar.css";
import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import logo from "../../images/logo.png";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import Profile from "../Avatar/Profile";
import { useGlobalContext } from "../Contex/Contex";

const Navbar = () => {
  const { isLogin } = useGlobalContext();
  const [showmenu, setShowMenu] = useState(false);

  return (
    <div className="container-fluid ">
      <div className=" ">
        <div className="navbar_container  ">
          <div className="first_box  d-flex gap-5">
            <img src={logo} alt="logo"></img>
            <div className="search_box">
              <input
                type="text"
                className="input_search"
                placeholder="search courses"
              ></input>
              <CiSearch className="Search_icon" />
            </div>
          </div>
          <div className="second_box  ">
            <div>
              <ul className="menu_box">
                <ul className="menu_inner">
                  <li className="li_style">
                    <NavLink className="nav_text " to="/">
                      Home
                    </NavLink>
                  </li>
                  <li className="li_style">
                    {" "}
                    <NavLink className="nav_text " to="/courses">
                      Courses
                    </NavLink>
                  </li>
                  {isLogin ? (
                    ""
                  ) : (
                    <li className="li_style">
                      <NavLink className="nav_text" to="/instructor">
                        Become An Instructor
                      </NavLink>
                    </li>
                  )}
                </ul>
                <li className="li_style">
                  {" "}
                  <NavLink className="nav_text" to="#">
                    <CiShoppingCart className="shoping_cart" />
                  </NavLink>
                </li>

                <li className="li_style">
                  {" "}
                  <NavLink className="nav_text" to="#">
                    {isLogin ? <Profile /> : ""}
                  </NavLink>
                </li>

                {isLogin ? (
                  ""
                ) : (
                  <li className="li_style p">
                    <NavLink to="/authentication ">
                      <button className="button m-0">
                        <span className="button_lg">
                          <span className="button_sl"></span>
                          <span className="button_text">Login/Register</span>
                        </span>
                      </button>
                    </NavLink>
                  </li>
                )}

                <li className="li_style menu_icon">
                  {showmenu ? (
                    <IoMdClose
                      onClick={() => {
                        setShowMenu(!showmenu);
                        console.log(showmenu);
                      }}
                    />
                  ) : (
                    <MdMenu
                      onClick={() => {
                        setShowMenu(!showmenu);
                        console.log(showmenu);
                      }}
                    />
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="">
          <ul
            className={showmenu ? "menu_innerss_second" : "menu_inners_second"}
          >
            <li className="li_search">
              <div className="search_boxs">
                <input
                  type="text"
                  className="input_searchs"
                  placeholder="search courses"
                ></input>
                <CiSearch className="Search_icons" />
              </div>
            </li>
            <li className="li_style">
              <NavLink className="nav_text " to="/">
                Home
              </NavLink>
            </li>
            <li className="li_style">
              {" "}
              <NavLink className="nav_text " to="/courses">
                Courses
              </NavLink>
            </li>

            {isLogin ? (
              ""
            ) : (
              <li className="li_style">
                <NavLink className="nav_text" to="/instructor">
                  Become An Instructor
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
