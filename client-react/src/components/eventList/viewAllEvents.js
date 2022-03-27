import React, { Component, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./viewAllEvents.scss";
import data from "../../mockData/eventCarouselData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "../carousels/eventCarousels/eventCarousel.scss";
import { Loader } from "./Loader";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Menu, Dropdown, Button, message, Space, Tooltip } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";

class ViewAllEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventsData: data,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  viewEvent = (id, name) => {
    this.props.history.push("/view-event/" + id);
  };

  render() {
    const { eventsData } = this.state;
    const menu = (
      <Menu >
        <Menu.Item key="1">Generes</Menu.Item>
        <Menu.Item key="2">All Events</Menu.Item>
        <Menu.Item key="3">List</Menu.Item>
      </Menu>
    );
    return (
      <div>
        <div className="viewEventsheading">
          <span className="viewEventsTitle">Events</span>{" "}
          <span className="viewEventsButton">
          <Dropdown overlay={menu}>
            <Button  shape="round">
              Geners <DownOutlined />
            </Button>
          </Dropdown>
          </span>
        </div>
        <div className="viewAllEvents">
          {eventsData.map((item) => (
            <div
              className="row-viewall"
              onClick={() => this.viewEvent(item.id, item.title)}
            >
              <img className="movieImage" src={item.image} />
              <div className="card-body viewall-card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="event-card-details">
                  <small className="event-card-date">
                    <i className="calendar-icon"></i>
                    {item.Date}
                  </small>
                  <small className="event-loc">
                    <i className="fas fa-map-marker-alt fa-sm calendar-icon"></i>
                    Dallas, USA
                    {/* Later update it with API data */}
                  </small>
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="loader">
          <Loader />
        </div>
      </div>
    );
  }
}

export default withRouter(ViewAllEvents);
