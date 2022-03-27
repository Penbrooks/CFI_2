import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./redux/store/index";
import "./styles/styles.scss";
import RoutingContainer from "./containers/routingContainer";
import 'antd/dist/antd.css'
import AuthProvider from './authentication/authContext';

const store = configureStore({});

render(

  <Provider store={store}>
    <AuthProvider><RoutingContainer /></AuthProvider>
  </Provider>,
  document.getElementById("cfi-app-root")
);
