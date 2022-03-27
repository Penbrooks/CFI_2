import React, { Component } from "react";
import "./bannerCarousel.scss";
import Slider from "react-slick";
import banner1 from "../../assets/images/banners/banner1.jpg";
import banner2 from "../../assets/images/banners/banner2.jpg";
import banner3 from "../../assets/images/banners/banner3.jpg";

class BannerCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const settings = {
      dots: true,
      centerMode: true,
      className: "center",
      cssEase: "linear",
      slidesToShow: 1,
      centerPadding: "60px",
    };
    return (
      <div className="banner-container">
        <Slider className="banner-slick" {...settings}>
          <div>
            <img src={banner1} />
          </div>
          <div>
            <img src={banner2} />
          </div>
          <div>
            <img src={banner3} />
          </div>
        </Slider>
      </div>
    );
  }
}

export default BannerCarousel;
