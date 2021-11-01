import React from 'react'
import ShareTable from '../ShareTable'
import {
    CPagination,
    CPaginationItem
  } from '@coreui/react'
  
  import PropTypes from 'prop-types';
  import '../../scss/ShareTable.css'

const ShareApp = () => {
  return (
    <div className="share">
      <div>
        <ShareTable />
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

export default ShareApp
