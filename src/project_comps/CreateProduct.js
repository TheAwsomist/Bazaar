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

const CreateProduct = () => {
  return (
    <div className="form">
      <div>
        <h2>Add Product</h2>
      </div>
      <div>
        <form action="">
          <CForm>
          <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="TallyName">Product Name</CFormLabel>
                <CFormInput
                  type="text"
                  id="ProductName"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="Brand">Date</CFormLabel>
                <CFormInput
                  type="date"
                  id="date"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
              <CFormLabel htmlFor="Company">Category</CFormLabel>
                <CFormSelect
                  aria-label="Default select example"
                  type="text"
                  id="category"
                  aria-describedby="emailHelp"
                  className="input"
                >
                  <option>Select Category</option>
                  <option value="1">Category 1</option>
                  <option value="2">Category 2</option>
                  <option value="3">Category 3</option>
                </CFormSelect>
              </div>
              <div className="inputfield">
              <CFormLabel htmlFor="Company">Sub Category</CFormLabel>
                <CFormSelect
                  aria-label="Default select example"
                  type="text"
                  id="subcategory"
                  aria-describedby="emailHelp"
                  className="input"
                >
                  <option>Select Sub Category</option>
                  <option value="1">Category 1</option>
                  <option value="2">Category 2</option>
                  <option value="3">Category 3</option>
                </CFormSelect>
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="Category">Quantity</CFormLabel>
                <CFormInput
                  type="number"
                  id="Quantity"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
              <CFormLabel htmlFor="Category">Expiry Date</CFormLabel>
                <CFormInput
                  type="date"
                  id="ExpDate"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
            </div>
            <div className="row" style={{padding:"0px 40px"}}>
              <a href="" className="documentupload">
                Upload Document 1
              </a>
              <a href="" className="documentupload">
                Upload Document 2
              </a>
            </div>
            <div className="row" style={{padding:"0px 40px"}}>
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

export default CreateProduct;
