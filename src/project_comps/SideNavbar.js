import '../scss/SideNavbar.css'
import '../scss/DemoPage.css'
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import share from '../assets/images/icons/share.png'
import menu from '../assets/images/icons/menu.png'
import people from '../assets/images/icons/people.png'
import demo from '../assets/images/icons/demo.png'
import person from '../assets/images/icons/person.png'
import deals from '../assets/images/icons/deals.png'
import medal from '../assets/images/icons/medal.png'
import setting from '../assets/images/icons/setting.png'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const SideNavbar = () => {
  const [navclass, SetNavClass] = useState('etc')

  return (
    <div className="Side">
      <p className="titleside">MWB Bazaar</p>
      <hr className="Line" />
      <div className="UserCredentials">
        <div className="avatar"></div>
        <div className="userdetails">
          <p className="username">Sierra Ferguson</p>
          <p className="email">someone@gmail.com</p>
        </div>
      </div>
      <div className="nav-options">
        <Link to="/">
          <NavItems
            icon={menu}
            title="DashBoard"
            id="dashboard"
            isActive={'dashboard' === navclass}
          />
        </Link>
        <Link to="/demopage">
          <NavItems icon={demo} title="Demo" id="demo"  isActive={"dashboard" === navclass} SetClass={SetNavClass} />
        </Link>
        <Link to="/ShareApp">
          <NavItems icon={share} title="Share Link Of App" id="share"  isActive={"dashboard" === navclass}  SetClass={SetNavClass} />
        </Link>
        <Link to="/Members">
          <NavItems icon={person} title="Members" id="member"  isActive={"dashboard" === navclass}  SetClass={SetNavClass} />
        </Link>
        <Link to="/Customer">
          <NavItems icon={people} title="Customers" id="customer"  isActive={"dashboard" === navclass}  SetClass={SetNavClass} />
        </Link>
        <Link to="/Product">
          <NavItems icon={deals} title="Products" id="product"  isActive={"dashboard" === navclass}  SetClass={SetNavClass} />
        </Link>
        <NavItems icon={medal} title="Offers" id="offer" isActive={"dashboard" === navclass}   SetClass={SetNavClass} />
        <NavItems icon={setting} title="Settings" id="setting" isActive={"dashboard" === navclass}   SetClass={SetNavClass} />
      </div>
    </div>
  )
}

const NavItems = ({ icon, title, id, isActive, SetClass}) => {
    console.log(SetClass);
  return (
    <div className="navitem">
      <img src={icon} alt="" width="15px" height="15px" />
      <h3
        className={isActive ? 'navtitle-active' : 'navtitle'}
        onClick={() => {SetClass(id);}}
      >
        {title}
      </h3>
    </div>
  )
}

NavItems.propTypes = {
  icon: PropTypes.arrayOf(PropTypes.any).isRequired,
  title: PropTypes.arrayOf(PropTypes.any).isRequired,
  id: PropTypes.arrayOf(PropTypes.any).isRequired,
  isActive: PropTypes.arrayOf(PropTypes.any).isRequired,
  SetClass: PropTypes.arrayOf(PropTypes.any).isRequired,
}

export default SideNavbar
