import React, { useEffect, useState } from 'react'
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

import eye from '../assets/images/icons/Eye.png'
import edit from '../assets/images/icons/Edit.png'
import PropTypes from 'prop-types'
import deleteicon from '../assets/images/icons/delete.png'
import "../scss/ProductTable.scss";

const ProductTable = ({ name, link }) => {
  const [selected, SetSelected] = useState(0)
  useEffect(() => {
    console.log(selected)
  }, [selected])

  const MainSelector = (key) => {
    const mainselect = document.getElementById(key)
    const selections = document.getElementsByClassName('selection')
    const arrayselections = Array.from(selections)
    arrayselections.map((selection) => (selection.checked = mainselect.checked))
    let temp = null
    temp = arrayselections.length
    if (mainselect.checked) SetSelected(temp)
    else SetSelected(0)
  }

  const SecondarySelector = (key) => {
    const selector = document.getElementById(key)
    if (selector.checked) SetSelected(selected + 1)
    else SetSelected(selected - 1)
  }

  return (
    <div>
      {selected > 0 && (
        <div className="numselected">
          <span style={{ marginRight: '20px', color: '#FD6B09' }}>{selected}</span> selected{' '}
          <img src={deleteicon} alt="" width="20px" height="20px" style={{ marginLeft: '60px' }} />
        </div>
      )}
      <div className="demotable">
        <CTable>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell
                scope="col"
                className="tableheader tabledata"
                style={{ paddingLeft: '30px' }}
              >
                {' '}
                <input
                  type="checkbox"
                  name=""
                  id="selectall"
                  onClick={(e) => MainSelector(e.target.id)}
                />
              </CTableHeaderCell>
              <CTableHeaderCell scope="col" className="tableheader tabledata">
                Name
              </CTableHeaderCell>
              <CTableHeaderCell scope="col" className="tableheader tabledata">
                Product Category
              </CTableHeaderCell>
              <CTableHeaderCell scope="col" className="tableheader tabledata">
                Sub-Category
              </CTableHeaderCell>
              <CTableHeaderCell scope="col" className="tableheader tabledata">
                Quantity
              </CTableHeaderCell>
              <CTableHeaderCell scope="col" className="tableheader tabledata">
                Expiry Date
              </CTableHeaderCell>
              <CTableHeaderCell scope="col" className="tableheader tabledata">
                Product Image 1
              </CTableHeaderCell>
              <CTableHeaderCell scope="col" className="tableheader tabledata">
                Product Image 1
              </CTableHeaderCell>
              <CTableHeaderCell scope="col" className="tableheader tabledata">
                Options
              </CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableHeaderCell scope="row" style={{ paddingLeft: '30px' }} className="tabledata">
                <input
                  type="checkbox"
                  name=""
                  id="1"
                  className="selection"
                  onClick={(e) => SecondarySelector(e.target.id)}
                />
              </CTableHeaderCell>
              <CTableDataCell className="tablename tabledata">ProductName</CTableDataCell>
              <CTableDataCell className="links tabledata">Product Category</CTableDataCell>
              <CTableDataCell className="option tabledata">Sub Category</CTableDataCell>
              <CTableDataCell className="links tabledata">8</CTableDataCell>
              <CTableDataCell className="links tabledata">Expiry Date</CTableDataCell>
              <CTableDataCell className="links tabledata">Image 1</CTableDataCell>
              <CTableDataCell className="links tabledata">Image 2</CTableDataCell>
              <CTableDataCell className="links tabledata">
                <img src={eye} alt="" width="24px" height="24px" className="optionicons"/>
                <img src={edit} alt="" width="24px" height="24px" className="optionicons"/>
              </CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell scope="row" style={{ paddingLeft: '30px' }} className="tabledata">
                <input
                  type="checkbox"
                  name=""
                  id="1"
                  className="selection"
                  onClick={(e) => SecondarySelector(e.target.id)}
                />
              </CTableHeaderCell>
              <CTableDataCell className="tablename tabledata">ProductName</CTableDataCell>
              <CTableDataCell className="links tabledata">Product Category</CTableDataCell>
              <CTableDataCell className="option tabledata">Sub Category</CTableDataCell>
              <CTableDataCell className="links tabledata">8</CTableDataCell>
              <CTableDataCell className="links tabledata">Expiry Date</CTableDataCell>
              <CTableDataCell className="links tabledata">Image 1</CTableDataCell>
              <CTableDataCell className="links tabledata">Image 2</CTableDataCell>
              <CTableDataCell className="links tabledata">
                <img src={eye} alt="" width="24px" height="24px" className="optionicons"/>
                <img src={edit} alt="" width="24px" height="24px" className="optionicons"/>
              </CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </div>
    </div>
  )
}

ProductTable.propTypes = {
  name: PropTypes.arrayOf(PropTypes.any).isRequired,
  link: PropTypes.arrayOf(PropTypes.any).isRequired,
}

export default ProductTable
