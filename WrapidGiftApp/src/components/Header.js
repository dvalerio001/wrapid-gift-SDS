import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import fire from '../firebase';
import FirebaseAuth from './FirebaseAuth'

const Navbar = styled.nav`
  height: 60px;
  background: #603BBB;
  padding: 0rem calc((100vw -1300px)/2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  `;

const Logo = styled(Link)`
  color: #FFF;
  padding-left: 1rem;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  font-style: italic;
`;

const NavItems = styled.div``;

const NavbarLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 1rem;
`;


const Header = ({handleLogout}) => {
  return <Navbar>
  <Logo to="/">Wrapid Gift</Logo>
  <NavItems>
    <NavbarLink to='/'>Home</NavbarLink>
    <NavbarLink to='/about'>About</NavbarLink>
    <NavbarLink to='/login'>Login</NavbarLink>
    <NavbarLink to='/login'><button onClick={fire.auth().signOut()}>Logout</button></NavbarLink>
  </NavItems>
  </Navbar>
};

export default Header
