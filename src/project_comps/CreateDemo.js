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
} from '@coreui/react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import '../scss/CreateDemo.css'

const CreateDemo = () => {
  return (
    <div className="formpage">
      <Router>
        <div className="create">
          <Link to="/">
            <button>Item Demo</button>
          </Link>
          <Link to="/newcustomerdemo">
            <button>Customer Demo</button>
          </Link>
        </div>
        <div style={{ borderRadius: '30px' }}>
          <Switch>
            <Route exact path="/">
              <ItemDemo />
            </Route>
            <Route path="/newcustomerdemo">
              <CustomerDemo />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

const ItemDemo = () => {
  return (
    <div className="form">
      <div>
        <h2>Item Demo</h2>
      </div>
      <div>
        <form action="">
          <CForm>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="TallyName">Tally Item Name</CFormLabel>
                <CFormInput
                  type="text"
                  id="TallyName"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="Brand">Brand</CFormLabel>
                <CFormInput type="text" id="Brand" aria-describedby="emailHelp" className="input" />
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="ItemName">Item Name</CFormLabel>
                <CFormInput
                  type="text"
                  id="ItemName"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="Alias">Alias</CFormLabel>
                <CFormInput type="text" id="Alias" aria-describedby="emailHelp" className="input" />
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="Category">Category</CFormLabel>
                <CFormInput
                  type="text"
                  id="Category"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="Company">Company</CFormLabel>
                <CFormInput
                  type="text"
                  id="Company"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="ItemDescription">Item Description</CFormLabel>
                <CFormInput
                  type="text"
                  id="ItemDescription"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="HSNCode">Tally HSN Code</CFormLabel>
                <CFormInput
                  type="number"
                  id="HSNCode"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="CorrectHSNCode">Correct HSN Code</CFormLabel>
                <CFormInput
                  type="number"
                  id="CorrectHSNCode"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="SubHSNCode">Sub HSN Code</CFormLabel>
                <CFormInput
                  type="number"
                  id="SubHSNCode"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="PacketSize">Packet Size &gt= 250g</CFormLabel>
                <CFormInput
                  type="number"
                  id="PacketSize"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="PacketUnit">Packet Unit</CFormLabel>
                <CFormInput
                  type="number"
                  id="PacketUnit"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="BagSize">Bag Size</CFormLabel>
                <CFormInput
                  type="number"
                  id="BagSize"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="BasicUnitValue">Basic Unit Value</CFormLabel>
                <CFormInput
                  type="number"
                  id="BasicUnitValue"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="BasicUnitPacket">Basic Unit Packet</CFormLabel>
                <CFormInput
                  type="number"
                  id="BasicUnitPacket"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="AltUnitVal">Alternative unit value</CFormLabel>
                <CFormInput
                  type="number"
                  id="AltUnitVal"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="AltUnit">Alternative Unit</CFormLabel>
                <CFormInput
                  type="number"
                  id="AltUnit"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="GSTEffectDat">GST Effective Date</CFormLabel>
                <CFormInput
                  type="date"
                  id="GSTEffectDat"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="EffectiveData">Sys effective date</CFormLabel>
                <CFormInput
                  type="date"
                  id="EffectiveData"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="ReorderLevel">Reorder level</CFormLabel>
                <CFormInput
                  type="number"
                  id="ReorderLevel"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="ReorderQty">ReOrder Qty</CFormLabel>
                <CFormInput
                  type="number"
                  id="ReorderQty"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="CessRate">APMC cess rate</CFormLabel>
                <CFormInput
                  type="number"
                  id="CessRate"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="APMCEffectiveDat">APMC sys effective date</CFormLabel>
                <CFormInput
                  type="date"
                  id="APMCEffectiveDat"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="DaysRefill">Days to refill</CFormLabel>
                <CFormInput
                  type="number"
                  id="DaysRefill"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="ItemReturnable">Is Item Returnable</CFormLabel>
                <CFormInput
                  type="text"
                  id="ItemReturnable"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="ItemCode">Is item code</CFormLabel>
                <CFormInput
                  type="text"
                  id="ItemCode"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="ItemName">New Item name</CFormLabel>
                <CFormInput
                  type="text"
                  id="ItemName"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="Status">Status</CFormLabel>
                <CFormInput
                  type="text"
                  id="Status"
                  aria-describedby="emailHelp"
                  className="input"
                />
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
        <div className="submitdiv"><button className="submit">Submit</button></div>
      </div>
    </div>
  )
}
const CustomerDemo = () => {
  return (
    <div className="form">
      <div>
        <h2>Customer Demo</h2>
      </div>
      <div>
        <form action="">
          <CForm>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="TallyName">Tally Item Name</CFormLabel>
                <CFormInput
                  type="text"
                  id="TallyName"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="Brand">Brand</CFormLabel>
                <CFormInput type="text" id="Brand" aria-describedby="emailHelp" className="input" />
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="ItemName">Item Name</CFormLabel>
                <CFormInput
                  type="text"
                  id="ItemName"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="Alias">Alias</CFormLabel>
                <CFormInput type="text" id="Alias" aria-describedby="emailHelp" className="input" />
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="Category">Category</CFormLabel>
                <CFormInput
                  type="text"
                  id="Category"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="Company">Company</CFormLabel>
                <CFormInput
                  type="text"
                  id="Company"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="ItemDescription">Item Description</CFormLabel>
                <CFormInput
                  type="text"
                  id="ItemDescription"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="HSNCode">Tally HSN Code</CFormLabel>
                <CFormInput
                  type="number"
                  id="HSNCode"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="CorrectHSNCode">Correct HSN Code</CFormLabel>
                <CFormInput
                  type="number"
                  id="CorrectHSNCode"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="SubHSNCode">Sub HSN Code</CFormLabel>
                <CFormInput
                  type="number"
                  id="SubHSNCode"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="PacketSize">Packet Size &gt= 250g</CFormLabel>
                <CFormInput
                  type="number"
                  id="PacketSize"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="PacketUnit">Packet Unit</CFormLabel>
                <CFormInput
                  type="number"
                  id="PacketUnit"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="BagSize">Bag Size</CFormLabel>
                <CFormInput
                  type="number"
                  id="BagSize"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="BasicUnitValue">Basic Unit Value</CFormLabel>
                <CFormInput
                  type="number"
                  id="BasicUnitValue"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="BasicUnitPacket">Basic Unit Packet</CFormLabel>
                <CFormInput
                  type="number"
                  id="BasicUnitPacket"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="AltUnitVal">Alternative unit value</CFormLabel>
                <CFormInput
                  type="number"
                  id="AltUnitVal"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="AltUnit">Alternative Unit</CFormLabel>
                <CFormInput
                  type="number"
                  id="AltUnit"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="GSTEffectDat">GST Effective Date</CFormLabel>
                <CFormInput
                  type="date"
                  id="GSTEffectDat"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="EffectiveData">Sys effective date</CFormLabel>
                <CFormInput
                  type="date"
                  id="EffectiveData"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="ReorderLevel">Reorder level</CFormLabel>
                <CFormInput
                  type="number"
                  id="ReorderLevel"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="ReorderQty">ReOrder Qty</CFormLabel>
                <CFormInput
                  type="number"
                  id="ReorderQty"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="CessRate">APMC cess rate</CFormLabel>
                <CFormInput
                  type="number"
                  id="CessRate"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="APMCEffectiveDat">APMC sys effective date</CFormLabel>
                <CFormInput
                  type="date"
                  id="APMCEffectiveDat"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="DaysRefill">Days to refill</CFormLabel>
                <CFormInput
                  type="number"
                  id="DaysRefill"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="ItemReturnable">Is Item Returnable</CFormLabel>
                <CFormInput
                  type="text"
                  id="ItemReturnable"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="ItemCode">Is item code</CFormLabel>
                <CFormInput
                  type="text"
                  id="ItemCode"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="ItemName">New Item name</CFormLabel>
                <CFormInput
                  type="text"
                  id="ItemName"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="Status">Status</CFormLabel>
                <CFormInput
                  type="text"
                  id="Status"
                  aria-describedby="emailHelp"
                  className="input"
                />
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
      </div>
    </div>
  )
}

export default CreateDemo
