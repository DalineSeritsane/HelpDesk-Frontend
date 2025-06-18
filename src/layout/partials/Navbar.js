import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import logo from "../../assests/logo.jpg";
import "../../CSS/navbar.css";




const NavbarComp = () => {
  return (
    <Navbar
    collapseOnSelect bg='info'
    variant='dark' expand='md'
    >
      <Navbar.Brand>
        <img src={logo} alt='logo' width="50px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className='ms-auto'>
          {/* <Link to='/dashboard'>Dashboard</Link>
          <Link to='/tickets'>Tickets</Link>
          <Link to=''>Logout</Link> */}

          <LinkContainer to='/dashboard'>
          <Nav.Link >Dashboard</Nav.Link></LinkContainer>
          <LinkContainer to='/tickets'>
          <Nav.Link >Tickets</Nav.Link></LinkContainer>

          <Nav.Link href='#'>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      
    </Navbar>
  )
}

export default NavbarComp;
