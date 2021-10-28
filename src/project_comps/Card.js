import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardGroup,
  CCardHeader,
  CCardImage,
  CCardLink,
  CCardSubtitle,
  CCardText,
  CCardTitle,
  CListGroup,
  CListGroupItem,
  CNav,
  CNavItem,
  CNavLink,
  CCol,
  CRow,
} from '@coreui/react'

import testimage from '../assets/images/react.jpg';

const Card = () => {
    return ( <CCard style={{ width: '18rem' }}>
    <CCardImage orientation="top" src={testimage} />
    <CCardBody>
      <CCardTitle>Card title</CCardTitle>
      <CCardText>
        Some quick example text to build on the card title and make up the bulk of the card&aposs content.
      </CCardText>
      <CButton href="#">Go somewhere</CButton>
    </CCardBody>
  </CCard> );
}
 
export default Card;