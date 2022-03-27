import React, { useState } from "react";
import "./homePage.scss";
import themeSample from '../../assets/images/theme-example.png';

function homePage () {
  return (
    <div className="homepage">
      <div className='image-sample'><img className='sample-theme' src={themeSample} /></div>
    </div>
  );
};

// dashboard.propTypes = {
// }

export default homePage;
