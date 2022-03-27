import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import data from "../../../mockData/projectCarouselData";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination]);
class ProjectsCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectData: data,
      
    };
  }
  render() {
    const { projectData } = this.state;
    return (
      <div className="project-carousel">
        <div className="MiniCarouselHeading">
          <span className="MiniCarouselTitle">Projects</span>
          <Link className="view-all" to="/project">
            View All <i className="fas fa-eye fa-sm"></i>
          </Link>
        </div>
        <div className="MovieCarouselBody">
          <div className="wrapper">
            <section id="section1">
              <Swiper
                spaceBetween={10}
                slidesPerView={8}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                navigation
              >
                {projectData.map((data) => (
                  <SwiperSlide key={data.id} >
                    <div className="item project-carousel">
                      <img className="movieImage1" src={data.image} />
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

export default ProjectsCarousel;
