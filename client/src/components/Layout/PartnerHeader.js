import React from 'react';
import { Link } from 'react-router-dom';
function PartnerHeader() {
  return (
    <header style={headerStyle}>
      <h1>Lirten Hub</h1>
      <Link style ={linkStyle}to="/">Home</Link> | <Link style= {linkStyle} to="/page">ViewPartners</Link>
    </header>
  )
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'left',
  padding: '10px'
}
/*Header.proptypes ={
    displayResults : PropTypes.func.isRequired
}*/
const linkStyle={
  color: '#fff',
  textDecoration: 'none'
}

export default PartnerHeader;