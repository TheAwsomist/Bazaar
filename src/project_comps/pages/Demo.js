import React from 'react'
import ReactDOM from 'react-dom'
import '../../scss/DemoPage.css'
import Demo from '../DemoTable'
import {Link} from 'react-router-dom';

const DemoPage = () => {
  return (
    <div className="demopage">
      <div className="demotitle">
        <h1>Demo</h1>
      </div>
      <div className="demofilter">
        <p>
          Demos:{' '}
          <select
            name="filter"
            className="filter"
            style={{ background: 'none', color: '#FD6B09', border: 'none' }}
          >
            <option value="All">All</option>
            <option value="Item">Item Demo</option>
            <option value="Customer">Customer Demo</option>
          </select>
        </p>
        <Link to="/createnewdemo"><button className="createdemo">Create A New Demo</button></Link>
      </div>
      <div>
          <Demo/>
      </div>
    </div>
  )
}

export default DemoPage
