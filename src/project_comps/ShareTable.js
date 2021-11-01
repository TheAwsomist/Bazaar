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
import '../scss/ShareTable.css';


const ShareTable = ({name,link}) => {
    return ( 
        <div className="demotable">
            <CTable>
            <CTableHead>
              <CTableRow>
                    <CTableHeaderCell scope="col" className="tableheader tabledata" style={{paddingLeft:"30px"}}><input type="checkbox" name="" id="" /></CTableHeaderCell>
                    <CTableHeaderCell scope="col" className="tableheader tabledata">Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col" className="tableheader tabledata">Email</CTableHeaderCell>
                    <CTableHeaderCell scope="col" className="tableheader tabledata">Mobile Number</CTableHeaderCell>
                    <CTableHeaderCell scope="col" className="tableheader tabledata">Category</CTableHeaderCell>
                    <CTableHeaderCell scope="col" className="tableheader tabledata">Status</CTableHeaderCell>
                    <CTableHeaderCell scope="col" className="tableheader tabledata">Options</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow>
                <CTableHeaderCell scope="row" style={{paddingLeft:"30px"}} className="tabledata"><input type="checkbox" name="" id="" /></CTableHeaderCell>
                <CTableDataCell className="tablename tabledata sharenamekeeper"><div className="sharepicture"></div> John Doe</CTableDataCell>
                <CTableDataCell className="links tabledata">jane.doe@gmail.com</CTableDataCell>
                <CTableDataCell className="tabledata">+91258444444</CTableDataCell>
                <CTableDataCell className="tabledata">Silver</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row" style={{paddingLeft:"30px"}} className="tabledata"><input type="checkbox" name="" id="" /></CTableHeaderCell>
                <CTableDataCell className="tablename tabledata sharenamekeeper"><div className="sharepicture"></div>Jane Doe</CTableDataCell>
                <CTableDataCell className="links tabledata">jane.doe@gmail.com</CTableDataCell>
                <CTableDataCell className=" tabledata">+91258444444</CTableDataCell>
                <CTableDataCell className="tabledata">Silver</CTableDataCell>

              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row" style={{paddingLeft:"30px"}} className="tabledata"><input type="checkbox" name="" id="" /></CTableHeaderCell>
                <CTableDataCell className="tablename tabledata sharenamekeeper"><div className="sharepicture"></div>Larry the Bird</CTableDataCell>
                <CTableDataCell className="links tabledata">jane.doe@gmail.com</CTableDataCell>
                <CTableDataCell className=" tabledata">+91258444444</CTableDataCell>
                <CTableDataCell className="tabledata">Silver</CTableDataCell>

              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row" style={{paddingLeft:"30px"}} className="tabledata"><input type="checkbox" name="" id="" /></CTableHeaderCell>
                <CTableDataCell className="tablename tabledata sharenamekeeper"><div className="sharepicture"></div>Larry the Bird</CTableDataCell>
                <CTableDataCell className="links tabledata">jane.doe@gmail.com</CTableDataCell>
                <CTableDataCell className=" tabledata">+91258444444</CTableDataCell>
                <CTableDataCell className="tabledata">Silver</CTableDataCell>

              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row" style={{paddingLeft:"30px"}} className="tabledata"><input type="checkbox" name="" id="" /></CTableHeaderCell>
                <CTableDataCell className="tablename tabledata sharenamekeeper"><div className="sharepicture"></div>Larry the Bird</CTableDataCell>
                <CTableDataCell className="links tabledata">jane.doe@gmail.com</CTableDataCell>
                <CTableDataCell className=" tabledata">+91258444444</CTableDataCell>
                <CTableDataCell className="tabledata">Silver</CTableDataCell>

              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row" style={{paddingLeft:"30px"}} className="tabledata"><input type="checkbox" name="" id="" /></CTableHeaderCell>
                <CTableDataCell className="tablename tabledata sharenamekeeper"><div className="sharepicture"></div>Larry the Bird</CTableDataCell>
                <CTableDataCell className="links tabledata">jane.doe@gmail.com</CTableDataCell>
                <CTableDataCell className=" tabledata">+91258444444</CTableDataCell>
                <CTableDataCell className="tabledata">Silver</CTableDataCell>

              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row" style={{paddingLeft:"30px"}} className="tabledata"><input type="checkbox" name="" id="" /></CTableHeaderCell>
                <CTableDataCell className="tablename tabledata sharenamekeeper"><div className="sharepicture"></div>Larry the Bird</CTableDataCell>
                <CTableDataCell className="links tabledata">jane.doe@gmail.com</CTableDataCell>
                <CTableDataCell className=" tabledata">+91258444444</CTableDataCell>
                <CTableDataCell className="tabledata">Silver</CTableDataCell>

              </CTableRow>
            </CTableBody>
                  </CTable>
        </div>
     );
}


ShareTable.propTypes = {
    name: PropTypes.arrayOf(PropTypes.any).isRequired,
    link: PropTypes.arrayOf(PropTypes.any).isRequired,
}


export default ShareTable;