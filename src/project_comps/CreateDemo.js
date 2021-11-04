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
                <CFormLabel htmlFor="TallyName">Contact Person Name</CFormLabel>
                <CFormInput
                  type="text"
                  id="ConPersonName"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="Brand">Tally Company Name</CFormLabel>
                <CFormInput type="text" id="TalCompName" aria-describedby="emailHelp" className="input" />
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="ItemName">Actual Company Name</CFormLabel>
                <CFormInput
                  type="text"
                  id="ActCompName"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="Alias">Billing Address</CFormLabel>
                <CFormInput type="text" id="BilAddress" aria-describedby="emailHelp" className="input" />
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="Category">Area</CFormLabel>
                <CFormInput
                  type="text"
                  id="Area"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="Company">City</CFormLabel>
                <CFormInput
                  type="text"
                  id="City"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="ItemDescription">City Code</CFormLabel>
                <CFormInput
                  type="text"
                  id="CityCode"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="HSNCode">Pin Code</CFormLabel>
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
                <CFormLabel htmlFor="CorrectHSNCode">State</CFormLabel>
                <CFormInput
                  type="text"
                  id="state"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="SubHSNCode">Country</CFormLabel>
                <CFormInput
                  type="text"
                  id="Country"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="PacketSize">LandMark</CFormLabel>
                <CFormInput
                  type="text"
                  id="Landmark"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="PacketUnit">Mobile No.</CFormLabel>
                <CFormInput
                  type="number"
                  id="MobileNum"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="BagSize">Alternative Mobile No.</CFormLabel>
                <CFormInput
                  type="number"
                  id="AltMobileNum"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="BasicUnitValue">Telephone Number</CFormLabel>
                <CFormInput
                  type="number"
                  id="TelNum"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="BasicUnitPacket">Email ID</CFormLabel>
                <CFormInput
                  type="text"
                  id="EmailID"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="AltUnitVal">CC Email ID</CFormLabel>
                <CFormInput
                  type="text"
                  id="CCEmailID"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="AltUnit">Fax No.</CFormLabel>
                <CFormInput
                  type="number"
                  id="Fax"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="GSTEffectDat">Website</CFormLabel>
                <CFormInput
                  type="text"
                  id="Website"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="EffectiveData">Opening Balance</CFormLabel>
                <CFormInput
                  type="number"
                  id="OpenBalance"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="ReorderLevel">Opening Balance Type</CFormLabel>
                <CFormInput
                  type="number"
                  id="OpenBalanceType"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="ReorderQty">Registration Type</CFormLabel>
                <CFormInput
                  type="text"
                  id="RegistrationType"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="CessRate">Company Type</CFormLabel>
                <CFormInput
                  type="text"
                  id="CompType"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="APMCEffectiveDat">Business Type</CFormLabel>
                <CFormInput
                  type="text"
                  id="BusinessType"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="DaysRefill">Week Of The Day</CFormLabel>
                <CFormInput
                  type="text"
                  id="WeekOfDay"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="ItemReturnable">GST IN</CFormLabel>
                <CFormInput
                  type="nuber"
                  id="GSTIN"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="ItemCode">PAN</CFormLabel>
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
                <CFormLabel htmlFor="ItemName">Bank Name</CFormLabel>
                <CFormInput
                  type="text"
                  id="BankName"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="Status">Bank Details</CFormLabel>
                <CFormInput
                  type="text"
                  id="BankDetails"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="Status">Branch</CFormLabel>
                <CFormInput
                  type="text"
                  id="BankDetails"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="Status">Account No.</CFormLabel>
                <CFormInput
                  type="text"
                  id="AccNo"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="Status">IFSC</CFormLabel>
                <CFormInput
                  type="number"
                  id="IFSC"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="Status">Credit Type</CFormLabel>
                <CFormInput
                  type="text"
                  id="CredType"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="Status">Category Type</CFormLabel>
                <CFormInput
                  type="text"
                  id="CategoryType"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="Status">Category Type A</CFormLabel>
                <CFormInput
                  type="text"
                  id="CategoryTypeA"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="Status">Credit Limit</CFormLabel>
                <CFormInput
                  type="number"
                  id="CredLimit"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="Status">Credit Days</CFormLabel>
                <CFormInput
                  type="number"
                  id="CredDays"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="Status">No. Of Outstanding Bills</CFormLabel>
                <CFormInput
                  type="number"
                  id="NumOutBills"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="Status">Active Calculated Interest</CFormLabel>
                <CFormInput
                  type="number"
                  id="ActCalcInt"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="Status">Billwise</CFormLabel>
                <CFormInput
                  type="number"
                  id="Billwise"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="Status">Narration</CFormLabel>
                <CFormInput
                  type="text"
                  id="Narration"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="Status">Description</CFormLabel>
                <CFormInput
                  type="textarea"
                  id="Description"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="Status">Check For Credit Days During Voucher Entry</CFormLabel>
                <CFormInput
                  type="text"
                  id="CredDaysVouchEntry"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="Status">Overside Credit Limit</CFormLabel>
                <CFormInput
                  type="number"
                  id="OverCredLim"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="Status">Inventory values are effect</CFormLabel>
                <CFormInput
                  type="number"
                  id="InventValEffect"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="Status">Calculated Transaction Interest</CFormLabel>
                <CFormInput
                  type="number"
                  id="CalcTransInterest"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="Status">By Transition</CFormLabel>
                <CFormInput
                  type="text"
                  id="Transition"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="Status">Overide Parameter For Each  Transaction</CFormLabel>
                <CFormInput
                  type="number"
                  id="CalcTransInterest"      
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
              <div className="inputfield">
                <CFormLabel htmlFor="Status">Customer ID</CFormLabel>
                <CFormInput
                  type="number"
                  id="CustomID"
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
              <div className="inputfield">
                <CFormLabel htmlFor="Status">Remarks</CFormLabel>
                <CFormInput
                  type="text"
                  id="Remarks"
                  aria-describedby="emailHelp"
                  className="input"
                />
              </div>
            </div>
            <div className="row">
              <div className="inputfield">
                <CFormLabel htmlFor="Status">Ledger Type</CFormLabel>
                <CFormInput
                  type="text"
                  id="LedgeType"      
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
        <div className="submitdiv"><button className="submit">Submit</button></div>
      </div>
    </div>
  )
}

export default CreateDemo
