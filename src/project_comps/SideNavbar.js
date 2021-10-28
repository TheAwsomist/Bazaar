import '../scss/SideNavbar.css';
import React from 'react'
import ReactDOM from 'react-dom'
import share from '../assets/images/icons/share.png';
import menu from '../assets/images/icons/menu.png';
import people from '../assets/images/icons/people.png';
import demo from '../assets/images/icons/demo.png';
import person from '../assets/images/icons/person.png';
import deals from '../assets/images/icons/deals.png';
import medal from '../assets/images/icons/medal.png';
import setting from '../assets/images/icons/setting.png';
import PropTypes from 'prop-types'


const SideNavbar = () => {
    return ( 
    <div className="Side">
        <p className="titleside">MWB Bazaar</p>
        <hr className="Line"/>
        <div className="UserCredentials">
            <div className="avatar"></div>
            <div className="userdetails">
                <p className="username">Sierra Ferguson</p>
                <p className="email">someone@gmail.com</p>
            </div>
        </div>
        <div className="nav-options">
                <NavItems icon={menu} title="DashBoard"/>
                <NavItems icon={demo} title="Demo"/>
                <NavItems icon={share} title="Share Link Of App"/>
                <NavItems icon={person} title="Members"/>
                <NavItems icon={people} title="Customers"/>
                <NavItems icon={deals} title="Products"/>
                <NavItems icon={medal} title="Offers"/>
                <NavItems icon={setting} title="Settings"/>
            </div>
    </div> );
}

const NavItems = ({icon,title}) => {
    return ( 
    <div className="navitem">
        <img src={icon} alt="" width="15px" height="15px"/>
        <h3 className="navtitle">{title}</h3>
    </div> );
}
 
NavItems.propTypes = {
    icon: PropTypes.arrayOf(PropTypes.any).isRequired,
    title: PropTypes.arrayOf(PropTypes.any).isRequired
  }
  
 
export default SideNavbar;