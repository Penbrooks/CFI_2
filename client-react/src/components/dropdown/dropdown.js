import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProfileIcon from "../../assets/images/myprofile.png";
import "./dropdown.scss";

class Dropdown extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
  }

  render() {
    return (
      <div className="menu-dropdown">
        <div onClick={this.showMenu} className="profileName">
          <span className="fullName">Michel Calvin</span>
          <span className="profileIcon">
            <img src={ProfileIcon} className="myImage" />
          </span>
        </div>

        {this.state.showMenu ? (
          <div
            className="menu"
            ref={(element) => {
              this.dropdownMenu = element;
            }}
          >
            <div className="profile-dropdown"> 
            <Link className="link-menu" to='/profile'> <div className="menu-item"><div className="profile Menu-Icon"><i className="profile profile-icon fas fa-user-circle" /></div> <div className="profile Menu-text"> Profile </div></div></Link> 
              <div className="menu-item"><div className="profile Menu-Icon"><i className="profile profile-icon fas fa-users" /> </div><div className="profile Menu-text">My Groups </div></div>
              <div className="menu-item"><div className="profile Menu-Icon"> <i className="profile profile-icon fas fa-handshake" /></div><div className="profile Menu-text">My Projects</div> </div>
              <div className="menu-item"><div className="profile Menu-Icon"> <i className="profile profile-icon fa fa-calendar" /></div><div className="profile Menu-text">My Events</div> </div>
              <div className="menu-item"> <div className="profile Menu-Icon"><i className="profile profile-icon fas fa-cog" /></div><div className="profile Menu-text">Settings</div> </div>
              <div className="dropdown-divider"></div>
              <div className="menu-item"><div className="profile Menu-Icon"> <i className="profile profile-icon fas fa-sign-out-alt"></i></div><div className="profile Menu-text">Logout</div> </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Dropdown;
