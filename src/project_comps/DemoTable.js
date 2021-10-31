import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

import eye from '../assets/images/icons/Eye.png';
import PropTypes from 'prop-types'


const Demo = ({name,link}) => {
    return ( 
        <div className="demotable">
            <CTable>
            <CTableHead>
              <CTableRow>
                    <CTableHeaderCell scope="col" className="tableheader tabledata" style={{paddingLeft:"30px"}}><input type="checkbox" name="" id="" /></CTableHeaderCell>
                    <CTableHeaderCell scope="col" className="tableheader tabledata">Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col" className="tableheader tabledata">Links</CTableHeaderCell>
                    <CTableHeaderCell scope="col" className="tableheader tabledata">Options</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow>
                <CTableHeaderCell scope="row" style={{paddingLeft:"30px"}} className="tabledata"><input type="checkbox" name="" id="" /></CTableHeaderCell>
                <CTableDataCell className="tablename tabledata">John Doe</CTableDataCell>
                <CTableDataCell className="links tabledata">https://docs.google.com/spreadsheets/d/1fPkGm--EWoAZWNxm2ZlnCQCHrXS1i2dHSqFHkPcf5wA/edit?usp=sharing</CTableDataCell>
                <CTableDataCell className="option tabledata"><img src={eye} alt="" width="24px" height="24px" /></CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row" style={{paddingLeft:"30px"}} className="tabledata"><input type="checkbox" name="" id="" /></CTableHeaderCell>
                <CTableDataCell className="tablename tabledata">Jane Doe</CTableDataCell>
                <CTableDataCell className="links tabledata">https://docs.google.com/spreadsheets/d/1fPkGm--EWoAZWNxm2ZlnCQCHrXS1i2dHSqFHkPcf5wA/edit?usp=sharing</CTableDataCell>
                <CTableDataCell className="option tabledata"><img src={eye} alt="" width="24px" height="24px" /></CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row" style={{paddingLeft:"30px"}} className="tabledata"><input type="checkbox" name="" id="" /></CTableHeaderCell>
                <CTableDataCell className="tablename tabledata">Larry the Bird</CTableDataCell>
                <CTableDataCell className="links tabledata">https://docs.google.com/spreadsheets/d/1fPkGm--EWoAZWNxm2ZlnCQCHrXS1i2dHSqFHkPcf5wA/edit?usp=sharing</CTableDataCell>
                <CTableDataCell className="option tabledata"><img src={eye} alt="" width="24px" height="24px" /></CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row" style={{paddingLeft:"30px"}} className="tabledata"><input type="checkbox" name="" id="" /></CTableHeaderCell>
                <CTableDataCell className="tablename tabledata">Larry the Bird</CTableDataCell>
                <CTableDataCell className="links tabledata">https://docs.google.com/spreadsheets/d/1fPkGm--EWoAZWNxm2ZlnCQCHrXS1i2dHSqFHkPcf5wA/edit?usp=sharing</CTableDataCell>
                <CTableDataCell className="option tabledata"><img src={eye} alt="" width="24px" height="24px" /></CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row" style={{paddingLeft:"30px"}} className="tabledata"><input type="checkbox" name="" id="" /></CTableHeaderCell>
                <CTableDataCell className="tablename tabledata">Larry the Bird</CTableDataCell>
                <CTableDataCell className="links tabledata">https://docs.google.com/spreadsheets/d/1fPkGm--EWoAZWNxm2ZlnCQCHrXS1i2dHSqFHkPcf5wA/edit?usp=sharing</CTableDataCell>
                <CTableDataCell className="option tabledata"><img src={eye} alt="" width="24px" height="24px" /></CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row" style={{paddingLeft:"30px"}} className="tabledata"><input type="checkbox" name="" id="" /></CTableHeaderCell>
                <CTableDataCell className="tablename tabledata">Larry the Bird</CTableDataCell>
                <CTableDataCell className="links tabledata">https://docs.google.com/spreadsheets/d/1fPkGm--EWoAZWNxm2ZlnCQCHrXS1i2dHSqFHkPcf5wA/edit?usp=sharing</CTableDataCell>
                <CTableDataCell className="option tabledata"><img src={eye} alt="" width="24px" height="24px" /></CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row" style={{paddingLeft:"30px"}} className="tabledata"><input type="checkbox" name="" id="" /></CTableHeaderCell>
                <CTableDataCell className="tablename tabledata">Larry the Bird</CTableDataCell>
                <CTableDataCell className="links tabledata">https://docs.google.com/spreadsheets/d/1fPkGm--EWoAZWNxm2ZlnCQCHrXS1i2dHSqFHkPcf5wA/edit?usp=sharing</CTableDataCell>
                <CTableDataCell className="option tabledata"><img src={eye} alt="" width="24px" height="24px" /></CTableDataCell>
              </CTableRow>
            </CTableBody>
                  </CTable>
        </div>
     );
}


Demo.propTypes = {
    name: PropTypes.arrayOf(PropTypes.any).isRequired,
    link: PropTypes.arrayOf(PropTypes.any).isRequired,
}


export default Demo;