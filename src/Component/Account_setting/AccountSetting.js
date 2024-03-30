import React from "react";
import { useState } from "react";
import "../Layout/accountsettimg.css";

const AccountSetting = () => {
  const [show, setShow] = useState(true);

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    biography: "",
    gender: "",
    website: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    socialMedia: [],
    profilePicture: null, // State to hold the profile picture
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add further logic to submit the form data to the backend
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePictureUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({
        ...formData,
        profilePicture: reader.result, // Set the profile picture data
      });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container py-5">
      <h2>Profile & Settings</h2>
      <div className="setting_menu d-flex gap-2">
        <p
          className={show ? "point " : ""}
          onClick={() => {
            setShow(true);
          }}
        >
          Profile
        </p>
        <p
          className={show ? " " : "point"}
          onClick={() => {
            setShow(false);
          }}
        >
          Profile Picture
        </p>
      </div>

      <hr className=" m-0" />
      <form onSubmit={handleSubmit}>
        {/* form */}
        <div className={show ? "showfrom  " : "hideform"}>
          <div>
            {" "}
            <div className="row">
              {/* Input fields for profile information */}
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label className="py-1" htmlFor="first_name">
                      First Name
                    </label>
                    <input
                      className="form-control"
                      placeholder="First Name"
                      type="text"
                      id="first_name"
                      name="fname"
                      value={formData.fname}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="py-1" htmlFor="last_name">
                      Last Name
                    </label>
                    <input
                      className="form-control"
                      placeholder="Last Name"
                      type="text"
                      id="last_name"
                      name="lname"
                      value={formData.lname}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="py-1" htmlFor="biography">
                      Biography
                    </label>
                    <input
                      className="form-control"
                      placeholder="Biography"
                      type="text"
                      id="biography"
                      name="biography"
                      value={formData.biography}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="py-1" htmlFor="gender">
                      Gender
                    </label>
                    <select
                      className="form-control"
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label className="py-1" htmlFor="website">
                      Website URL
                    </label>
                    <input
                      className="form-control"
                      placeholder="https://"
                      type="text"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="py-1" htmlFor="twitter">
                      Twitter
                    </label>
                    <input
                      className="form-control"
                      placeholder="https://"
                      type="text"
                      id="twitter"
                      name="twitter"
                      value={formData.twitter}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="py-1" htmlFor="facebook">
                      Facebook
                    </label>
                    <input
                      className="form-control"
                      placeholder="https://"
                      type="text"
                      id="facebook"
                      name="facebook"
                      value={formData.facebook}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="py-1" htmlFor="linkedin">
                      Linkedin
                    </label>
                    <input
                      className="form-control"
                      placeholder="https://"
                      type="text"
                      id="linkedin"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="py-1" htmlFor="youtube">
                      Youtube
                    </label>
                    <input
                      className="form-control"
                      placeholder="https://"
                      type="text"
                      id="youtube"
                      name="youtube"
                      value={formData.youtube}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                {/* Add input fields for fname, lname, biography, gender, website, twitter, facebook, linkedin, youtube */}
              </div>
            </div>
          </div>

          <button
            className="btn btn-primary"
            onClick={() => {
              setShow(false);
            }}
          >
            Save
          </button>
        </div>

        {/* image upload */}
        <div className={show ? " hideform" : "showform "}>
          <div>
            {" "}
            <div className="profile-picture-section">
              <h3>Upload Profile Picture</h3>
              <div className="">
                {" "}
                <input
                  type="file"
                  className="border p-2"
                  onChange={handlePictureUpload}
                />
              </div>
              {/* Preview the uploaded profile picture */}
              
                <div className="my-3">
                {formData.profilePicture && (
                  <img className="shadow border p-1"
                    src={formData.profilePicture}
                    alt="Profile"
                    style={{ width: "200px", height: "200px" }}
                  />
                )}
                </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary my-2">
            Save Profile Information
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountSetting;
