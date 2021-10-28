import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import Logo from '../../assets/images/BazaarLogo.png'

const LoginPage = () => {
  return (
    <div className="bg-custom min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8} style={{ width: '420px', height: '582px' }}>
            <CCardGroup>
              <CCard className="" style={{ height: '582px' }}>
                <CCardBody className="logincard">
                  <img src={Logo} alt="" width="112px" height="105px" />
                  <div className="Login">
                    <h1 className="loginh1">Log In To Dashboard</h1>
                    <p className="text-medium-emphasis">Enter Your Email And Password Below</p>
                  </div>
                  <CForm className="loginform">
                    <CInputGroup className="mb-3 textfield">
                      <label htmlFor="">Email:</label>
                      <CFormInput
                        name="username"
                        placeholder="Email address"
                        autoComplete="username"
                        className="loginfield"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4 textfield">
                      <label htmlFor="">Password:</label>
                      <CFormInput
                        type="password"
                        name="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        className="loginfield"
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={12}>
                        <CButton color="primary" style={{ width: '100%',height:"48px",backgroundColor:"#FD6B09",border:"none" }}>
                          Login
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default LoginPage
