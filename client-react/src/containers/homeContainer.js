import { connect } from "react-redux";
import HomePage from "../components/homePage/homepage";
import { withRouter } from "react-router";

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => {};

const DashboardContainer = connect(
  mapStateToProps
  // mapDispatchToProps,
)(HomePage);

export default withRouter(DashboardContainer);
