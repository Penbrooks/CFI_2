import React, { Component } from "react";
// import "../styles/eventContainer.scss";
import ViewAllEvents from '../components/eventList/viewAllEvents';

class EventsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="eventsPage">
        <div><ViewAllEvents /></div>
      </div>
    );
  }
}

export default EventsContainer;
