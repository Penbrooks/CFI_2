import React from 'react';
import PropTypes from 'prop-types';


const Card =({property}) => {
    const{index,picture,title,Date}=property;
    return(
        <div id={`card-${index}`} className="card">
            <img src={picture} alt=""/>
            <div className="details">
                  <p>{title} <br/> {Date}</p>
            </div>
        </div>
    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;