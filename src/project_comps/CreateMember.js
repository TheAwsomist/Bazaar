import React from 'react'
import {
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardHeader,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CNav,
  CNavItem,
  CNavLink,
  CForm,
  CFormLabel,
  CFormInput,
  CFormText,
  CFormSelect
} from '@coreui/react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import '../scss/CreateDemo.css'
import '../scss/CreateMember.css'

const CreateMember = () => {
  return (
    <div className="form">
      <div>
        <h2>Add Members</h2>
      </div>
      <div>
        <form action="">
          <CForm>
            <div className="row" style={{ paddingLeft: '52px' }}>
              <div className="addimage">
                <p>+</p>
              </div>
              <div className="uploadphoto">Upload Photo</div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="TallyName">Mobile Number</CFormLabel>
                <CFormInput
                  type="number"
                  id="MobNumber"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="Brand">Alternative Mobile Number</CFormLabel>
                <CFormInput
                  type="number"
                  id="AltMobNum"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="ItemName">Full Name</CFormLabel>
                <CFormInput
                  type="text"
                  id="FullName"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="Alias">Email</CFormLabel>
                <CFormInput type="text" id="Email" aria-describedby="emailHelp" className="input" />
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="Category">Address</CFormLabel>
                <CFormInput
                  type="text"
                  id="Address"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="Company">State</CFormLabel>
                <CFormSelect
                  aria-label="Default select example"
                  type="text"
                  id="State"
                  aria-describedby="emailHelp"
                  className="input"
                >
                  <option>Select State</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </CFormSelect>
              </div>
            </div>
            <div className="row">
            <div className="inputfield">
                <CFormLabel htmlFor="Company">City</CFormLabel>
                <CFormSelect
                  aria-label="Default select example"
                  type="text"
                  id="City"
                  aria-describedby="emailHelp"
                  className="input"
                >
                  <option>Select State</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </CFormSelect>
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="HSNCode">Pin</CFormLabel>
                <CFormInput
                  type="number"
                  id="Pin"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="CorrectHSNCode">Adhaar No.</CFormLabel>
                <CFormInput
                  type="number"
                  id="AdhaarNo"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="SubHSNCode">PAN</CFormLabel>
                <CFormInput
                  type="number"
                  id="PAN"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
            </div>
            <div className="row">
            <div className="inputfield">
                <CFormLabel htmlFor="Company">Role</CFormLabel>
                <CFormSelect
                  aria-label="Default select example"
                  type="text"
                  id="City"
                  aria-describedby="emailHelp"
                  className="input"
                >
                  <option>Select Role</option>
                  <option value="1">Role 1</option>
                  <option value="2">Role 2</option>
                  <option value="3">Role 3</option>
                </CFormSelect>
              </div>
            </div>
            <div className="row">
              <a href="" className="documentupload">
                Upload Document 1
              </a>
              <a href="" className="documentupload">
                Upload Document 2
              </a>
            </div>
            <div className="row">
              <a href="" className="documentupload">
                Upload Document 3
              </a>
              <a href="" className="documentupload">
                Upload Document 4
              </a>
            </div>
          </CForm>
        </form>
        <div className="submitdiv">
          <button className="submit">Submit</button>
        </div>
      </div>
    </div>
  )
}

export default CreateMember
