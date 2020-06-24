import React from 'react';
import styled from 'styled-components';

// Styles
const FooterContainer = styled.footer`
  text-align: center;
  padding: 40px;
  margin-top: 40px;
  
  & a {
  color: teal
  }
`;

export default function Footer() {

  return (
    <FooterContainer className="component">
      <p>Pentru a afla parola sau răspuns la alte întrebări, te rugăm să ne scrii un email: <a href="mailTo:adunarea.tinerilor@gmail.com">adunarea.tinerilor@gmail.com</a>.</p>
    </FooterContainer>
  );
}