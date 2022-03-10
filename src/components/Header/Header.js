import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'
import { AiOutlineHome, AiOutlinePlusCircle, AiOutlineStar, AiOutlineUser, AiOutlineExport } from 'react-icons/ai'

const authenticatedOptions = (
  <>
    <NavLink to='/vibes/all' className='nav-link'><AiOutlineHome /></NavLink>
    <NavLink to='/vibes' className='nav-link-vibes'>V</NavLink>
    <NavLink to='/vibes/create' className='nav-link'><AiOutlinePlusCircle className='icon' /></NavLink>
    <NavLink to='/vibes/favorites' className='nav-link'><AiOutlineStar /></NavLink>
    <NavLink to='/change-password' className='nav-link'><AiOutlineUser /></NavLink>
    <NavLink to='/sign-out' className='nav-link'><AiOutlineExport /></NavLink>
  </>
)

const unauthenticatedOptions = (
  <>
    <NavLink to='/sign-up' className='nav-link'>Sign Up</NavLink>
    <NavLink to='/sign-in' className='nav-link'>Sign In</NavLink>
  </>
)

const alwaysOptions = (
  <>
    {/* <NavLink to='/' className='nav-link'><AiOutlineHome /></NavLink> */}
  </>
)

const Header = ({ user }) => (
  <Navbar bg='dark' variant='dark' expand='md' className='navbar-styling sticky-top'>
    <Container>
      <Navbar.Brand>
        <Link to='/' style={{ color: '#DB3EB1', textDecoration: 'none' }}>V I B E N</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ms-auto'>
          {user && (
            <span className='navbar-text me-2'>Welcome, {user.username}</span>
          )}
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default Header
