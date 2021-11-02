import React from 'react'
import ShareTable from '../ShareTable'
import { CPagination, CPaginationItem } from '@coreui/react'

import PropTypes from 'prop-types'
import '../../scss/ShareTable.css'
import CustomerTable from '../CustomerTable'
import { Link } from 'react-router-dom'

const Customer = () => {
  return (
    <div className="share">
      <Link to="/CreateCustomer">
        <button className="createdemo" style={{marginBottom:"16px"}}>Add Customers</button>
      </Link>

      <div>
        <CustomerTable />
      </div>
      <div>
        <CPagination size="lg" className="Pagination" aria-label="Page navigation">
          <CPaginationItem>←</CPaginationItem>
          <CPaginationItem className="activate">1</CPaginationItem>
          <CPaginationItem>2</CPaginationItem>
          <CPaginationItem>3</CPaginationItem>
          <CPaginationItem>→</CPaginationItem>
        </CPagination>
      </div>
    </div>
  )
}

export default Customer
