import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Navbar = styled.nav`
  height: 60px;
  background: #000;
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

const Header = () => {
  return <Navbar>
  <Logo to="/">Gift</Logo>
  <NavItems>
    <NavbarLink to='/'>Home</NavbarLink>
    <NavbarLink to='/about'>About</NavbarLink>
    <NavbarLink to='/login'>Login</NavbarLink>
  </NavItems>
  </Navbar>
};

export default Header