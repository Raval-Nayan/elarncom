import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import card from "../../images/card.jpg";
import { IoLogoAppleAr } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import "../Layout/Courcecard.css";

const CourceCard = ({ title, dec, lessons, students, widths }) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    // Check if the current card data is already liked
    const storedData = localStorage.getItem("courseCardData");
    if (storedData) {
      // console.log(storedData,"data")
      const parsedData = JSON.parse(storedData);
      // console.log(parsedData,"hello")
      const isLiked = parsedData.some(
        (item) =>
          item.title === title &&
          item.dec === dec &&
          item.lessons === lessons &&
          item.students === students
      );
      setLiked(isLiked);
    }
  }, [title, dec, lessons, students]);

  // Function to handle like button click
  const handleLikeClick = () => {
    setLiked(true);
    // Get existing data from local storage or initialize an empty array
    const storedData = localStorage.getItem("courseCardData");
    const data = storedData ? JSON.parse(storedData) : [];
    // Append current card data to the array
    const newData = [...data, { title, dec, lessons, students }];
    // Save the updated data to local storage
    localStorage.setItem("courseCardData", JSON.stringify(newData));
  };

  // Function to handle unlike button click
  const handleUnlikeClick = () => {
    setLiked(false);
    // Get existing data from local storage
    const storedData = localStorage.getItem("courseCardData");
    if (storedData) {
      // Parse the data
      const data = JSON.parse(storedData);
      // Filter out the current card data
      const newData = data.filter(
        (item) =>
          item.title !== title ||
          item.dec !== dec ||
          item.lessons !== lessons ||
          item.students !== students
      );
      // Save the updated data to local storage
      localStorage.setItem("courseCardData", JSON.stringify(newData));
    }
  };

  return (
    <div className="card  border w-100" style={{ width: "18rem" }}>
      <div className="card_images ">
        <img
          className="card-img-top image_relative"
          src={card}
          alt="Card"
        ></img>
        <div className="like_icon">
          {liked ? (
            <AiFillLike className="display-6" onClick={handleUnlikeClick} />
          ) : (
            <AiOutlineLike className="display-6" onClick={handleLikeClick} />
          )}
        </div>

        <div className=" d-flex gap-2 w-100 h-100 d-flex justify-content-end price_tag">
          <div className="  circle   d-flex justify-content-center align-items-center">
            <h5 className="p-1 text-decoration-line-through text-light font-weight-bold">
              $499
            </h5>
          </div>

          <div className="  bg-info circle text-center  d-flex justify-content-center align-items-center">
            <h5 className="p-1  text-light font-weight-bold">$499</h5>
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
        <div className="card-title">
          <NavLink className="text-decoration-none text-dark  " to="#">
            <h3 className="font_text">{title}</h3>
          </NavLink>
        </div>
        <p className="card-text">{dec}</p>
      </div>

      <ul className="p-0">
        <li className="list-group-item d-flex justify-content-around  ">
          <p className="">
            <FaBook className="m-1 " />
            {lessons}
          </p>
          <p>
            <FaUsers className="m-1" />
            {students}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default CourceCard;
