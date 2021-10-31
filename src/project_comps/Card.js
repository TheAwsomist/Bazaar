import PropTypes from 'prop-types'
import React from 'react';
import ReactDOM from 'react-dom';
import '../scss/MainLayout.css';


const Card = ({title,number,percentage,icon,gap,direction}) => {
  
const arrow = direction==="negative"?"↓":"↑";
const color = direction ==="negative"?"negative":"positive";
  return ( 
  <div className="Card">
    <div className="section">
      <div className="textarea">
        <p className="title">{title}</p>  {/* add title here */}
        <p className="number">{number}</p>  {/* add number here */}
      </div>
      <div className="cardicon">
        <img src={icon} alt="" width="21px" height="21px"/>  {/* add icon here */}
      </div>
    </div>
    <div className="section" id="lowersection">
      <p className="percentage"><span className={color}>{arrow} {percentage}%</span> Since Last {gap}</p> {/* add arrow,percentage and gap here */}
    </div>
  </div> );
}




Card.propTypes = {
  icon: PropTypes.arrayOf(PropTypes.any).isRequired,
  title: PropTypes.arrayOf(PropTypes.any).isRequired,
  number: PropTypes.arrayOf(PropTypes.any).isRequired,
  percentage: PropTypes.arrayOf(PropTypes.any).isRequired,
  gap: PropTypes.arrayOf(PropTypes.any).isRequired,
  direction: PropTypes.arrayOf(PropTypes.any).isRequired
}


export default Card;