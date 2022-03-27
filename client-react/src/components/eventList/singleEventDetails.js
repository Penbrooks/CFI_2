import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./singleEventDetails.scss";
import data from "../../mockData/singleEventDetails";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Button, Tabs, Radio, Divider } from "antd";
import { ShareAltOutlined } from "@ant-design/icons";
import TabComponent from './tab';
import mapImage from '../../assets/images/map-sample.png';


class singleEventDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventDetailsData: data,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { eventDetailsData } = this.state;
    const titleImage = eventDetailsData.image;
    const artists = eventDetailsData.artists;
    console.log("eventDetailsData.artists", artists);
    return (
      <div className="eventDetails">
        <div
                // className="DetaisImage"
                // style={{
                //   backgroundImage: `url(${titleImage})`,
                // }}
              ><img className="DetaisImage" src={titleImage}></img></div>
        <Container className="eventContainer" fluid="lg">
          <Row>
            {/* <Col className="DetaisImage">
              
            </Col> */}
            <div className="col-xl-12 col-lg-12">
              <div className="eventTitle-Container">
                <div className="eventtitle-heading">
                  <div>
                    <h3 className="event-title">Nation of our GOD</h3>
                    <p className="title-location">
                      <div className="text-muted">
                        <i className="fas fa-map-marker-alt icon-margin"></i>
                        Texas, United States
                      </div>
                    </p>
                  </div>
                  <div>
                    <Button
                      className="share-button"
                      type="primary"
                      shape="circle"
                      icon={<ShareAltOutlined />}
                    />
                    <Button className="danger-button" type="primary">
                      Add to Watchlist
                    </Button>
                    {/* <a href="#" className="watchlist-button"> Add to Watchlist <i class="fas fa-plus fa-sm  ml-1"></i></a> */}
                  </div>
                </div>
                <div className="detailslocation">
                  <div>
                    <p>
                      <i className="fas fa-calendar-alt icon-margin"></i> Mon
                      12th Dec 12:00 PM
                    </p>
                  </div>
                  <div>
                    <p>
                      <i className="fas fa-film icon-margin"></i>Sermon |
                      English | Adults
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </Container>
        <Row className="eventother-details">
          <Col className="event-description">
            <div className="details-tabs"><TabComponent /></div></Col>
          <Col className="location-map" >
            <Row>
              <Col  className="location-details" span={6}>Location Details</Col>
            </Row>
            <Row>
              <Col className="map-details" span={6}><img className='map-image' src={mapImage}></img></Col>
            </Row>
          </Col>
        </Row>
        <Row>
        <Divider><h3>Artists</h3></Divider>
          <Col className="actors-details">
            {artists.map(data => (
               <div className="actors-list">
               <div className="details-profile">
              </div>
              <div className="details-name"> {data.name}
   
              </div>
              <div className="details-role">
              {data.role}
              </div>
               </div>

            ))}
         
          </Col>
        </Row>
       
      </div>
    );
  }
}

export default withRouter(singleEventDetails);
