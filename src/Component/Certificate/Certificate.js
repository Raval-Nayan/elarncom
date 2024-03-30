import React, { useState } from "react";
import cer from "../../images/certificate.png";
import '../Layout/certificate.css'

const Certificate = () => {
    const [data,setData]=useState("Student Profile")
  return (
    <div className="container">
      <div className="row py-5">
        <div className="col-12 col-md-4">
          <label className="p-1">Enter Your Name</label>
          <input
          value={data}
          onChange={(e)=>{setData(e.target.value)}}
            className="form-control p-3"
            type="text"
            placeholder="Student Profile"
          ></input>
        </div>
        <div className="col-12 col-md-8">
          <div>
            <div className="content">
              <div className="profile_text w-50 ">
                <h3 className="text-center">{data}</h3>
                <h6 className="text-center">
                  For completing the Fitness-Yoga-Pilates Combined - Quick Home
                  Workout Program
                </h6>
              </div>
              
                <img src={cer} className="img-fluid" alt="certificate"></img>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
