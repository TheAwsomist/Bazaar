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
import share_active from '../assets/images/icons/share-active.png'
import menu_active from '../assets/images/icons/menu-active.png'
import people_active from '../assets/images/icons/people-active.png'
import demo_active from '../assets/images/icons/demo-active.png'
import person_active from '../assets/images/icons/person-active.png'
import deals_active from '../assets/images/icons/deals-active.png'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const SideNavbar = () => {
  const [navclass, SetNavClass] = useState('etc')

  useEffect(() => {}, [navclass]);

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
          <NavItems icon={menu} icon_active={menu_active} title="DashBoard" id="dashboard" isActive={'dashboard' === navclass} SetClass={(id)=>SetNavClass(id)} />
        </Link>
        <Link to="/demopage">
          <NavItems icon={demo} icon_active={demo_active} title="Demo" id="demo" isActive={"demo" === navclass} SetClass={(id)=>SetNavClass(id)} />
        </Link>
        <Link to="/ShareApp">
          <NavItems icon={share} icon_active={share_active} title="Share Link Of App" id="share"  isActive={"share" === navclass}  SetClass={(id)=>SetNavClass(id)} />
        </Link>
        <Link to="/Members">
          <NavItems icon={person} icon_active={person_active} title="Members" id="member"  isActive={"member" === navclass}  SetClass={(id)=>SetNavClass(id)} />
        </Link>
        <Link to="/Customer">
          <NavItems icon={people} icon_active={people_active} title="Customers" id="customer"  isActive={"customer" === navclass}  SetClass={(id)=>SetNavClass(id)} />
        </Link>
        <Link to="/Product">
          <NavItems icon={deals} icon_active={deals_active} title="Products" id="product"  isActive={"product" === navclass}  SetClass={(id)=>SetNavClass(id)} />
        </Link>
        <NavItems icon={medal} icon_active={medal} title="Offers" id="offer" isActive={"offer" === navclass}   SetClass={(id)=>SetNavClass(id)} />
        <NavItems icon={setting} icon_active={setting} title="Settings" id="setting" isActive={"setting" === navclass}   SetClass={(id)=>SetNavClass(id)} />
      </div>
    </div>
  )
}

const NavItems = ({ icon, icon_active, title, id, isActive, SetClass}) => {
  console.log(typeof(SetClass));
  console.log(SetClass);
  return (
    <div className="navitem" id={id}>
      <img src={isActive ? icon_active : icon } alt="" width="15px" height="15px" />
      <h3
        className={isActive ? 'navtitle-active' : 'navtitle'}
        onClick={(e) => SetClass(id)}
      >
        {title}
      </h3>
    </div>
  )
}

NavItems.propTypes = {
  icon: PropTypes.arrayOf(PropTypes.any).isRequired,
  icon_active: PropTypes.arrayOf(PropTypes.any).isRequired,
  title: PropTypes.arrayOf(PropTypes.any).isRequired,
  id: PropTypes.arrayOf(PropTypes.any).isRequired,
  isActive: PropTypes.arrayOf(PropTypes.any).isRequired,
  SetClass: PropTypes.arrayOf(PropTypes.any).isRequired,
}

export default SideNavbar
