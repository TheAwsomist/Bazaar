import React from 'react'
import ReactDOM from 'react-dom'
import '../../scss/DemoPage.css'
import {Link} from 'react-router-dom';
import MembersTable from '../MembersTable';

const Member = () => {
    return ( 
        <div className="demopage">
        <div className="demotitle">
          <h1>Members</h1>
        </div>
        <div className="demofilter">
          <p>
            Members:{' '}
            <select
              name="filter"
              className="filter"
              style={{ background: 'none', color: '#FD6B09', border: 'none' }}
            >
              <option value="All">All</option>
              <option value="Item">Role 1</option>
              <option value="Customer">Role 2</option>
            </select>
          </p>
          <Link to="/CreateMember"><button className="createdemo">Add Members</button></Link>
        </div>
        <div>
            <MembersTable/>
        </div>
      </div> );
}
 
export default Member;