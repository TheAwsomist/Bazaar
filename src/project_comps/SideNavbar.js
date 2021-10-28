import '../scss/SideNavbar.css';
import React from 'react'
import ReactDOM from 'react-dom'
import share from '../assets/images/icons/share.png';

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
            <div className="nav-options">
                <NavItems icon={share} title="Share Link Of App"/>
            </div>
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
 

 
export default SideNavbar;