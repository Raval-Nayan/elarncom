import React from "react";


const CourseDetailsIcon = ({Icon,title,dec}) => {
  return (
    <div className="d-flex justify-content-between  align-items-center">
      <div className=" d-flex justify-content-center align-items-center gap-2  py-2">
        <Icon className="display-6 p-1 text-muted" /><h6 className="  ">{title}</h6>
      </div>
      <div><h6 className="p-1 text-muted">{dec}</h6></div>
    </div>
  );
};

export default CourseDetailsIcon;
