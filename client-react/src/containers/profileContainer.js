import { connect } from "react-redux";
import React, { useState, useContext, useEffect } from "react";

import Index from "../components/myProfile/profile";
import { withRouter } from "react-router";
import { AuthContext } from "../authentication/authContext";
import {Component} from 'react'


function ProfileContainer(props) {
  console.log(props.user)
  const  authContext = useContext(AuthContext)
  return (
    <Index user={authContext.user}  />
  );
}

export default ProfileContainer;
