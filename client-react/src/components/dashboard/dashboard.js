import React, { useState } from "react";
import PropTypes from "prop-types";
import "./dashboard.scss";
import BannerCarousel from "../carousels/bannerCarousel";
import MovieCarousel from '../carousels/movieCarousels/movieCarousel';
import EventCarousel from '../carousels/eventCarousels/eventCarousel';
import CastCrewCarousel from '../carousels/castcrewCarousel/castcrewCarousel';
import ProjectsCarousel from '../carousels/projectsCarousel/projectsCarousel';

function dashboard () {
  return (
    <div className="dashboard">
      <div className="bannerSlider">
        <BannerCarousel />
      </div>
      <div className='mini-carousels'>
      <div className="movieCarousel">
        <MovieCarousel />
      </div>
      <div className="eventCarousel">
        <EventCarousel />
      </div>
      <div className="castcrewCarousel">
        <CastCrewCarousel />
      </div>
      <div className="project-Carousel">
        <ProjectsCarousel />
      </div>
      </div>
    </div>
  );
};

// dashboard.propTypes = {
// }

export default dashboard;
