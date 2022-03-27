import React, { useContext, useEffect, useState } from 'react';
import { HashRouter, Route, Switch, Redirect, useHistory, BrowserRouter as Router } from "react-router-dom";
import Header from "../components/header/header";
// import BasicHeader from "../components/header/basicHeader";
import HomePage from "./homeContainer";
import LoginPage from "../authentication/user/Login";
import SignUpPage from "../authentication/user/Register";
import DhashboardContainer from "./dashboardContainer";
import MoviesContainer from "./moviesContainer";
import CastCrewContainer from "./castCerwContainer";
import ProjectsContainer from "./projectsContainer";
import EventsContainer from "./eventsContainer";
import FooterContainer from "./footerContainer";
import dashboard from '../components/dashboard/dashboard';
import singleEventDetails from "../components/eventList/singleEventDetails";
import { AuthContext } from '../authentication/authContext';
import AuthServices from '../authentication/authService';
import UserProfile from '../components/myProfile/profile.js'
import ProfileContainer from './profileContainer';

const Layout = ({ children }) => (
  <div>
    <Header />
      {children}
    {/* <FooterContainer /> */}
  </div>
);

// const LoginHeader = ({ children }) => (
//   <div>
//     <BasicHeader />
//       {children}
//     {/* <FooterContainer /> */}
//   </div>
// );

const cfiContainer = () => {

  const history = useHistory()
  const authContext = useContext(AuthContext);

  const gusername = JSON.parse(localStorage.getItem('googleusername'))
  const gemail = JSON.parse(localStorage.getItem('googleemail'))
  const fusername = JSON.parse(localStorage.getItem('facebookusername'))
  const femail = JSON.parse(localStorage.getItem('facebookemail'))
  const [users, setUsers] = useState(null)

  useEffect(() => {
    AuthServices.profile().then(data => {
      setUsers(data)
    })
    if (localStorage.getItem('googleusername')) {
      const user = {
        username: gusername,
        email: gemail
      }
      AuthServices.loginGoogle(user).then(data => {
        const { isAuthenticated, user, message } = data;
        if (message.msgError) {
          history.push('/signup')
        }
        else if (isAuthenticated) {

          authContext.setUser(user);
          authContext.setIsAuthenticated(isAuthenticated);
          // history.push('/edit');
        }
      });
      authContext.setIsAuthenticated(true);
    }
    if (localStorage.getItem('facebookusername')) {
      const user = {
        username: fusername,
        email: femail
      }
      AuthServices.loginFacebook(user).then(data => {
        const { isAuthenticated, user, message } = data;
        if (message.msgError) {
          history.push('/signup')
        }
        else if (isAuthenticated) {
          authContext.setUser(user);
          authContext.setIsAuthenticated(isAuthenticated);
          // history.push('/edit');
        }
      });
      // authContext.setUser({ username: fusername, email: femail });
      authContext.setIsAuthenticated(true);

    }
  }, [])
  console.log(users)
  return (
  <>
    <HashRouter>
      <>
      
        <Switch>
          <Redirect exact from="/" to="/home" />
          {/* <LoginHeader> */}
            
          {/* </LoginHeader> */}
          <Layout>
            <Route path="/login" component={LoginPage} />
            {/* <Route path="/login" exact render={()=>(
                this.props.user ? (alert("You are already LoggedIn!"), (<Redirect to="/dashboard"/>)) : (<LoginPage/>)
            )} /> */}
            <Route path="/signup" component={SignUpPage} />
            <Route path="/home" component={HomePage} />
            <Route path="/dashboard" component={DhashboardContainer} />
            <Route path="/movies" component={MoviesContainer} />
            <Route path="/cast-crew" component={CastCrewContainer} />
            <Route path="/projects" component={ProjectsContainer} />
            <Route path="/events" component={EventsContainer} />
            <Route path="/view-event/:id" component={singleEventDetails} />
            <Route path="/profile" component={ProfileContainer} />
          </Layout>
          
        </Switch>
       
      </>
    </HashRouter>
  </>
  );
}

export default cfiContainer;
