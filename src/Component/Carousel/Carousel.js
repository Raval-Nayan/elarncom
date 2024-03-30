import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const images = [
  {
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
    dec: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    name: "Raval Nayan",
    designation: "React Developer",
  },
  {
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
    dec: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    name: "Raval Nayan",
    designation: "React Developer",
  },
  {
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
    dec: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    name: "Raval Nayan",
    designation: "React Developer",
  },
  {
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
    dec: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    name: "Raval Nayan",
    designation: "React Developer",
  },
];

const CarouselSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="shadow rounded p-5 w-70 w-md-80 bg-light border-right-1" >
      {" "}
      {/* Set the width here */}
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <p>{image.dec}</p>

            <div className="row p-2 ">
              <div className="col-12  col-md-3  d-flex justify-content-center align-items-center">
                <div className=" w-100 d-flex justify-content-end  ">
                  {" "}
                  <img
                  className="img-fluid  rounded-circle "
                    src={image.imgPath}
                    alt={image.name}
                    style={{ width: "100%" , height:"12vh"}}
                  />{" "}
                  {/* Set image width to 100% */}
                </div>
              </div>
              <div className="col-12 col-md-6   ">
                {" "}
                <h3>{image.name}</h3>
                <p>{image.designation}</p>
              </div>
            </div>

            <div></div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselSlider;
