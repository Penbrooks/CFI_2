import React, { useContext } from 'react';
import { BrowserRouter, Route, Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import logoIcon from "../../assets/images/logo.png";
import logoTitle from "../../assets/images/logoTitle.png";
import SearchBar from "../searchbar/searchBar";
import HomePage from '../homePage/homepage';
import Dropdown from "../dropdown/dropdown";
import "./header.scss";
import { AuthContext } from '../../authentication/authContext';
import AuthService from '../../authentication/authService';


const Header = props => {
  // console.log("pathnamepathname",location.pathname);
    const { isAuthenticated, user, setIsAuthenticated, setUser } = useContext(AuthContext);
    
    const onClickLogoutHandler = () => {
      localStorage.removeItem('googleusername')
      localStorage.removeItem('googleemail')
      localStorage.removeItem('facebookusername')
      localStorage.removeItem('facebookemail')
      AuthService.logout().then(data => {
          if (data.success) {
              setUser(data.user);
              setIsAuthenticated(false);
          }
      });
    }

    const unauthenticatedNavBar = () => {
      return  (
        <div>
        <div className="app-header">
          <span>
            <a href="/" id="cfiLogo">
              <img src={logoIcon} className="header-icon cfiLogo" />
              <img src={logoTitle} className="header-icon cfiTitle" />
            </a>
          </span>
          {location.pathname == '/login' ? 
          <span className="menu-items login">
         
          <Link className="link-menu" to="/signup">
            <button className="header-button login" type="button">
              <i className="menu-icon fas fa-sign-in-alt" />
              Signup
            </button>
          </Link> 
          </span> :
          <span className="menu-items login">
          <Link className="link-menu" to="/login">
          <button className="header-button login" type="button">
            <i className="menu-icon fas fa-sign-in-alt" />
            Login
          </button>
        </Link>
          </span>}
        </div>
         {/* <HomePage /> */}
        </div>
      );
  }

const authenticatedNavBar = () => {
  let location = useLocation();
  // const { pathname } = window.location;
  // console.log("window.location",pathname)
  console.log("location.pathname",location.pathname)
  let basicPath = true;
  if ((location.pathname == "/login") || (location.pathname ==  "/signup") || (location.pathname == "/home")) {
     basicPath = false
  }
    return (
      <div>
      {basicPath ?
      <div className="app-header">
        <span>
          <a href="#/home" id="cfiLogo">
            <img src={logoIcon} className="header-icon cfiLogo" />
            <img src={logoTitle} className="header-icon cfiTitle" />
          </a>
        </span>
        <div>
        <span className="header-searchbar">
          <SearchBar />
        </span>
        <span className="menu-items">
          <Link className="link-menu" to="/dashboard">
            <button className="header-button" type="button">
              <i className="menu-icon fa fa-tachometer-alt" />
              Dashboard
            </button>
          </Link>
          <Link className="link-menu" to="/movies">
            <button className="header-button" type="button">
              <i className="menu-icon fa fa-film" />
              Movies
            </button>
          </Link>
          <Link className="link-menu" to="/events">
            <button className="header-button" type="button">
              <i className="menu-icon fa fa-calendar" />
              Events
            </button>
          </Link>
          <Link className="link-menu" to="/cast-crew">
            <button className="header-button" type="button">
              <i className="menu-icon fa fa-users" />
              Cast&Crew
            </button>
          </Link>
          <Link className="link-menu" to="/projects">
            <button className="header-button" type="button">
              <i className="menu-icon fas fa-funnel-dollar" />
              Projects
            </button>
          </Link>
        </span>
        <div className="myProfile">
          <Dropdown />
        </div>
        </div>
      </div> : 
      <div className="app-header">
        <span>
          <a href="/" id="cfiLogo">
            <img src={logoIcon} className="header-icon cfiLogo" />
            <img src={logoTitle} className="header-icon cfiTitle" />
          </a>
        </span>
        <div>
        <span className="header-searchbar">
          <SearchBar />
        </span>
        <span className="menu-items">
          {location.pathname == "/home" ? 
          <Link className="link-menu" to="/dashboard">
            <button className="header-button" type="button">
              <i className="menu-icon fa fa-tachometer-alt" />
              Dashboard
            </button>
          </Link> : 
          <Link className="link-menu" to="/home">
          <button className="header-button" type="button">
            <i className="menu-icon fa fa-home" />
            Home
          </button>
        </Link>
          }
          </span>
          </div> 
      </div>}
      </div>
    )
}
  return (
    <div>
       {(!isAuthenticated && !localStorage.getItem('googleusername')) ?unauthenticatedNavBar() :  authenticatedNavBar() }
    </div>
  )
}

export default Header;
