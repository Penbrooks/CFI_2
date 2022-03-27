import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./movieCarousel.scss";
import data from "../../../mockData/movieCarouselData";
import "./movieCarousel.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination]);
class MovieCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesData: data,
    };
  }
  render() {
    const { moviesData } = this.state;
    return (
      <div className="movie-carousel">
        <div className="MiniCarouselHeading">
          <span className="MiniCarouselTitle">Movies</span>
          <Link className="view-all" to="/movies">
            View All <i className="fas fa-eye fa-sm"></i>
          </Link>
        </div>
        <div className="MovieCarouselBody">
          <div className="wrapper">
            <section id="section1">
              <Swiper
                spaceBetween={10}
                slidesPerView={5}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                navigation
              >
                {moviesData.map((data) => (
                  <SwiperSlide key={data.id} >
                    <div className="item">
                      <div className="favorite">
                        <h6 className="percentage">
                          <i className="fas fa-heart text-danger"></i> 50%
                        </h6>
                        <small className="count">8,784</small>
                      </div>
                      <img className="movieImage" src={data.image} />
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

export default MovieCarousel;
