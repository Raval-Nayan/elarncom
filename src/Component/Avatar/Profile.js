import React from "react";

import "./Profile.css";
import profile from "../../images/man.jpg";
import { NavLink } from "react-router-dom";
import { FaBookOpen } from "react-icons/fa";
import { GiBuyCard } from "react-icons/gi";
import { FcLike } from "react-icons/fc";
import { MdManageAccounts } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { useGlobalContext } from "../Contex/Contex";

const Profile = () => {
  const {  isLogin,  Removetoken } = useGlobalContext();
  console.log(isLogin)
  return (
    <div class="dropdown z-3 ">
      <div>
        <img src={profile} alt="profile" className="avatar"></img>
      </div>
      <div class="dropdown-content z-3 ">
        <div className="">
          <ul className="list-group index">
            <li className="list-unstyled p-1">
              <div className="d-flex justify-content-start align-items-center m-0">
                <div className="">
                  <img src={profile} alt="profile" className="avatar"></img>
                </div>
                <div className="d-flex  flex-column gap-1">
                  <h6 className="m-0">Student</h6>
                  <h6 className="m-0">Student@gmail.com</h6>
                </div>
              </div>
            </li>
            <hr />

            <li className="list-unstyled ">
              <div>
                <NavLink
                  to="/learning/my-courses"
                  className={"text-decoration-none text-muted p-2"}
                >
                  <FaBookOpen className="m-1" /> My Learning
                </NavLink>
              </div>
            </li>
            <li className="list-unstyled ">
              <div>
                <NavLink
                  to="/learning/my-purchase-history"
                  className={"text-decoration-none text-muted p-2"}
                >
                  {" "}
                  <GiBuyCard className=" m-1" />
                  My Purchases
                </NavLink>
              </div>
            </li>
            <li className="list-unstyled ">
              <div>
                <NavLink
                  to="/learning/wishlist"
                  className={"text-decoration-none text-muted p-2"}
                >
                  {" "}
                  <FcLike className=" m-1" />
                  Wishlist
                </NavLink>
              </div>
            </li>
            <li className="list-unstyled ">
              <div>
                <NavLink
                  to="/profile/basic-information"
                  className={"text-decoration-none text-muted p-2"}
                >
                  {" "}
                  <MdManageAccounts className=" m-1 " />
                  Account Setting
                </NavLink>
              </div>
            </li>
            <hr className="" />
            <li className="list-unstyled ">
              <div>
                <NavLink
                  onClick={Removetoken}
                  className={"text-decoration-none text-muted p-2"}
                >
                  <CiLogout className=" m-1" />
                  Log out
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
