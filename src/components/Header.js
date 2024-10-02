import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: white;
  padding: 1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  color: #fff;
`;

const NavLinks = styled.div`
  a {
    color: balck;
    margin-left: 25px;
    &:hover {
      color: orange;
    }
  }
`;

const Header = () => {
  return (
    <Nav>
      <Logo>My Portfolio</Logo>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </NavLinks>
    </Nav>
  );
};

export default Header;
