import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import data from "../../../mockData/castcrewCarouselData";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import "./castcrewCarousel.scss";

SwiperCore.use([Navigation, Pagination]);
class CastCrewCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      castcrewData: data,
    };
  }
  render() {
    const { castcrewData } = this.state;
    return (
      <div className="castcrew-carousel">
        <div className="MiniCarouselHeading">
          <span className="MiniCarouselTitle">Cast&Crew</span>
          <Link className="view-all" to="/castcrew">
            View All <i className="fas fa-eye fa-sm"></i>
          </Link>
        </div>
        <div className="MovieCarouselBody">
          <div className="wrapper1">
            <section id="section1">
              <Swiper
                spaceBetween={10}
                slidesPerView={8}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                navigation
              >
                {castcrewData.map((data) => (
                  <SwiperSlide key={data.id} className="cast-crew" >
                    <div className="item cast-crew">
                      <img className="movieImage1 castcrew-Image" src={data.image} />
                      <div className="card-body">
                        <h5 className="card-title">{data.title}</h5>
                        <p className="card-details">
                          <small className="text-lang">English</small>
                          {/* Later update it with APi data */}
                          <small className="card-date">
                            <i className="fas fa-calendar-alt fa-sm calendar-icon"></i>
                            {data.Date}
                          </small>
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default CastCrewCarousel;
