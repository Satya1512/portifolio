import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
  background-color: white;
  color: black;
  text-align: center;
  padding: 1opx;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const Footer = () => {
  return (
    <FooterSection>
      <p>&copy; {new Date().getFullYear()} Satya. All rights reserved.</p>
    </FooterSection>
  );
};

export default Footer;
