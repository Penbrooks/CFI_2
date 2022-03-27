import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./eventCarousel.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import data from "../../../mockData/eventCarouselData";

SwiperCore.use([Navigation, Pagination]);
class EventCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventsData: data,
    };
  }
  
  render() {
    const { eventsData } = this.state;
    return (
      <div className="movie-carousel">
        <div className="MiniCarouselHeading">
          <span className="MiniCarouselTitle">Events</span>
          <Link className="view-all" to="/events">
            View All <i className="fas fa-eye fa-sm"></i>
          </Link>
        </div>
        <div className="eventCarouselBody">
          <div className="wrapper">
            <section id="section1">
              <Swiper
                spaceBetween={10}
                slidesPerView={5}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                navigation
              >
                {eventsData.map((data) => (
                  
                  <SwiperSlide  key={data.id} >
                    
                    <div className="item">
                      <img className="movieImage" src={data.image} />
                      <div className="card-body">
                        <h5 className="card-title">{data.title}</h5>
                        <p className="event-card-details">
                          <small className="event-card-date">
                            <i className="calendar-icon"></i>
                            {data.Date}
                          </small>
                          <small className="event-loc">
                            <i className="fas fa-map-marker-alt fa-sm calendar-icon"></i>
                            Dallas, USA
                            {/* Later update it with API data */}
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

export default EventCarousel;

