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

import share from '../assets/images/icons/share-active.png'
import eye from '../assets/images/icons/Eye.png'
import edit from '../assets/images/icons/Edit.png'
import trash from '../assets/images/icons/delete-active.png'
import whatsapp from '../assets/images/icons/whatsapp.png'
import message from '../assets/images/icons/Message.png'
import deleteicon from '../assets/images/icons/delete.png'
import PropTypes from 'prop-types'
import '../scss/ShareTable.css'

const CustomerTable = ({ name, email, MobNum, Category, Stat }) => {
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
                Email
              </CTableHeaderCell>
              <CTableHeaderCell scope="col" className="tableheader tabledata">
                Mobile Number
              </CTableHeaderCell>
              <CTableHeaderCell scope="col" className="tableheader tabledata">
                Category
              </CTableHeaderCell>
              <CTableHeaderCell scope="col" className="tableheader tabledata">
                Share Link
              </CTableHeaderCell>
              <CTableHeaderCell scope="col" className="tableheader tabledata">
                Status
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
              <CTableDataCell className="tablename tabledata sharenamekeeper">
                <div className="sharepicture"></div> John Doe
              </CTableDataCell>
              <CTableDataCell className="links tabledata">jane.doe@gmail.com</CTableDataCell>
              <CTableDataCell className="tabledata">+91258444444</CTableDataCell>
              <CTableDataCell className="tabledata">Silver</CTableDataCell>
              <CTableDataCell className="tabledata">
                {' '}
                <img src={whatsapp} alt="" width="21px" height="21px" className="shareoptions"/>
                <img src={message} alt="" width="24px" height="24px" className="shareoptions"/>
              </CTableDataCell>
              <CTableDataCell className="tabledata">
                <Status status="Verified" />
              </CTableDataCell>
              <CTableDataCell className="tabledata">
              <div>
                <img src={eye} alt="" width="24px" height="24px" />
                  <img src={edit} alt="" width="24px" height="24px" className="memberoptions"/>
                  <img src={trash} alt="" width="24px" height="24px" className="memberoptions"/>
                </div>
              </CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell scope="row" style={{ paddingLeft: '30px' }} className="tabledata">
                <input
                  type="checkbox"
                  name=""
                  id="2"
                  className="selection"
                  onClick={(e) => SecondarySelector(e.target.id)}
                />
              </CTableHeaderCell>
              <CTableDataCell className="tablename tabledata sharenamekeeper">
                <div className="sharepicture"></div>Jane Doe
              </CTableDataCell>
              <CTableDataCell className="links tabledata">jane.doe@gmail.com</CTableDataCell>
              <CTableDataCell className=" tabledata">+91258444444</CTableDataCell>
              <CTableDataCell className="tabledata">Silver</CTableDataCell>
              <CTableDataCell className="tabledata">
                {' '}
                <img src={whatsapp} alt="" width="21px" height="21px" className="shareoptions"/>
                <img src={message} alt="" width="24px" height="24px" className="shareoptions"/>
              </CTableDataCell>
              <CTableDataCell className="tabledata">
                <Status status="Verified" />
              </CTableDataCell>
              <CTableDataCell className="tabledata">
              <div>
                <img src={eye} alt="" width="24px" height="24px" />
                  <img src={edit} alt="" width="24px" height="24px" className="memberoptions"/>
                  <img src={trash} alt="" width="24px" height="24px" className="memberoptions"/>
                </div>
              </CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell scope="row" style={{ paddingLeft: '30px' }} className="tabledata">
                <input
                  type="checkbox"
                  name=""
                  id="3"
                  className="selection"
                  onClick={(e) => SecondarySelector(e.target.id)}
                />
              </CTableHeaderCell>
              <CTableDataCell className="tablename tabledata sharenamekeeper">
                <div className="sharepicture"></div>Larry the Bird
              </CTableDataCell>
              <CTableDataCell className="links tabledata">jane.doe@gmail.com</CTableDataCell>
              <CTableDataCell className=" tabledata">+91258444444</CTableDataCell>
              <CTableDataCell className="tabledata">Silver</CTableDataCell>
              <CTableDataCell className="tabledata">
                {' '}
                <img src={whatsapp} alt="" width="21px" height="21px" className="shareoptions"/>
                <img src={message} alt="" width="24px" height="24px" className="shareoptions"/>
              </CTableDataCell>
              <CTableDataCell className="tabledata">
                <Status status="Unverified" />
              </CTableDataCell>
              <CTableDataCell className="tabledata">
              <div>
                <img src={eye} alt="" width="24px" height="24px" />
                  <img src={edit} alt="" width="24px" height="24px" className="memberoptions"/>
                  <img src={trash} alt="" width="24px" height="24px" className="memberoptions"/>
                </div>
              </CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell scope="row" style={{ paddingLeft: '30px' }} className="tabledata">
                <input
                  type="checkbox"
                  name=""
                  id="4"
                  className="selection"
                  onClick={(e) => SecondarySelector(e.target.id)}
                />
              </CTableHeaderCell>
              <CTableDataCell className="tablename tabledata sharenamekeeper">
                <div className="sharepicture"></div>Larry the Bird
              </CTableDataCell>
              <CTableDataCell className="links tabledata">jane.doe@gmail.com</CTableDataCell>
              <CTableDataCell className=" tabledata">+91258444444</CTableDataCell>
              <CTableDataCell className="tabledata">Silver</CTableDataCell>
              <CTableDataCell className="tabledata">
                {' '}
                <img src={whatsapp} alt="" width="21px" height="21px" className="shareoptions"/>
                <img src={message} alt="" width="24px" height="24px" className="shareoptions"/>
              </CTableDataCell>
              <CTableDataCell className="tabledata">
                <Status status="Unverified" />
              </CTableDataCell>
              <CTableDataCell className="tabledata">
              <div>
                <img src={eye} alt="" width="24px" height="24px" />
                  <img src={edit} alt="" width="24px" height="24px" className="memberoptions"/>
                  <img src={trash} alt="" width="24px" height="24px" className="memberoptions"/>
                </div>
              </CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell scope="row" style={{ paddingLeft: '30px' }} className="tabledata">
                <input
                  type="checkbox"
                  name=""
                  id="5"
                  className="selection"
                  onClick={(e) => SecondarySelector(e.target.id)}
                />
              </CTableHeaderCell>
              <CTableDataCell className="tablename tabledata sharenamekeeper">
                <div className="sharepicture"></div>Larry the Bird
              </CTableDataCell>
              <CTableDataCell className="links tabledata">jane.doe@gmail.com</CTableDataCell>
              <CTableDataCell className=" tabledata">+91258444444</CTableDataCell>
              <CTableDataCell className="tabledata">Silver</CTableDataCell>
              <CTableDataCell className="tabledata">
                {' '}
                <img src={whatsapp} alt="" width="21px" height="21px" className="shareoptions"/>
                <img src={message} alt="" width="24px" height="24px" className="shareoptions"/>
              </CTableDataCell>
              <CTableDataCell className="tabledata">
                <Status status="Unverified" />
              </CTableDataCell>
              <CTableDataCell className="tabledata">
              <div>
                <img src={eye} alt="" width="24px" height="24px" />
                  <img src={edit} alt="" width="24px" height="24px" className="memberoptions"/>
                  <img src={trash} alt="" width="24px" height="24px" className="memberoptions"/>
                </div>
              </CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell scope="row" style={{ paddingLeft: '30px' }} className="tabledata">
                <input
                  type="checkbox"
                  name=""
                  id="6"
                  className="selection"
                  onClick={(e) => SecondarySelector(e.target.id)}
                />
              </CTableHeaderCell>
              <CTableDataCell className="tablename tabledata sharenamekeeper">
                <div className="sharepicture"></div>Larry the Bird
              </CTableDataCell>
              <CTableDataCell className="links tabledata">jane.doe@gmail.com</CTableDataCell>
              <CTableDataCell className=" tabledata">+91258444444</CTableDataCell>
              <CTableDataCell className="tabledata">Silver</CTableDataCell>
              <CTableDataCell className="tabledata">
                {' '}
                <img src={whatsapp} alt="" width="21px" height="21px" className="shareoptions"/>
                <img src={message} alt="" width="24px" height="24px" className="shareoptions"/>
              </CTableDataCell>
              <CTableDataCell className="tabledata">
                <Status status="Verified" />
              </CTableDataCell>
              <CTableDataCell className="tabledata">
              <div>
                <img src={eye} alt="" width="24px" height="24px" />
                  <img src={edit} alt="" width="24px" height="24px" className="memberoptions"/>
                  <img src={trash} alt="" width="24px" height="24px" className="memberoptions"/>
                </div>
              </CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell scope="row" style={{ paddingLeft: '30px' }} className="tabledata">
                <input
                  type="checkbox"
                  name=""
                  id="7"
                  className="selection"
                  onClick={(e) => SecondarySelector(e.target.id)}
                />
              </CTableHeaderCell>
              <CTableDataCell className="tablename tabledata sharenamekeeper">
                <div className="sharepicture"></div>Larry the Bird
              </CTableDataCell>
              <CTableDataCell className="links tabledata">jane.doe@gmail.com</CTableDataCell>
              <CTableDataCell className=" tabledata">+91258444444</CTableDataCell>
              <CTableDataCell className="tabledata">Silver</CTableDataCell>
              <CTableDataCell className="tabledata">
                {' '}
                <img src={whatsapp} alt="" width="21px" height="21px" className="shareoptions"/>
                <img src={message} alt="" width="24px" height="24px" className="shareoptions"/>
              </CTableDataCell>
              <CTableDataCell className="tabledata">
                <Status status="Unverified" />
              </CTableDataCell>
              <CTableDataCell className="tabledata">
              <div>
                <img src={eye} alt="" width="24px" height="24px" />
                  <img src={edit} alt="" width="24px" height="24px" className="memberoptions"/>
                  <img src={trash} alt="" width="24px" height="24px" className="memberoptions"/>
                </div>
              </CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </div>
    </div>
  )
}

const Status = ({ status }) => {
  const color = status === 'Verified' ? 'verified' : 'unverified'
  return <div className={`statustag ${color}`}>{status}</div>
}

CustomerTable.propTypes = {
  name: PropTypes.arrayOf(PropTypes.any).isRequired,
  email: PropTypes.arrayOf(PropTypes.any).isRequired,
  MobNum: PropTypes.arrayOf(PropTypes.any).isRequired,
  Category: PropTypes.arrayOf(PropTypes.any).isRequired,
  Stat: PropTypes.arrayOf(PropTypes.any).isRequired,
}
Status.propTypes = {
  status: PropTypes.arrayOf(PropTypes.any).isRequired,
}

export default CustomerTable
