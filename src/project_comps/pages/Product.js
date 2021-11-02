import ProductTable from "../ProductTable";
import React, { useEffect, useState } from 'react'
import '../../scss/DemoPage.css'
import Demo from '../DemoTable'
import {Link} from 'react-router-dom';

const Product = () => {
    return ( 
        <div className="demopage">
        <div className="demotitle">
          <h1>Products</h1>
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
          <div>
              <Link to="/createnewdemo"><button className="createdemo" style={{marginRight:"40px"}}>Update Product</button></Link>
              <Link to="/createnewdemo"><button className="createdemo">Add Product</button></Link>
          </div>
        </div>
        <div>
            <ProductTable/>
        </div>
      </div>);
}
 
export default Product;