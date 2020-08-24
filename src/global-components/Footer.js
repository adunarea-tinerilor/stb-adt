import React from 'react';
import styled from 'styled-components';

// Styles
const FooterContainer = styled.footer`
  text-align: center;
  padding: 40px;
  margin-top: 40px;
  
  & a {
  color: teal;
  word-break: break-all;
  }
  
  @media only screen and (max-width:400px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;
const FooterEmail = styled.a`
  display: block;
  padding: 5px;
  width: fit-content;
  margin: auto;
  
  @media only screen and (max-width:370px) {
    font-size: 15px;
  }
`;
const FooterDate = styled.p`
  font-size: 13px;
  margin: 0;
`;

export default function Footer(props) {

  return (
    <FooterContainer className="component">
      <p>Dacă ai întrebări te rugăm să ne scrii un email  <FooterEmail href="mailTo:adunarea.tinerilor@gmail.com">adunarea.tinerilor@gmail.com</FooterEmail></p>
      <FooterDate>{props.footerUpdateDate}</FooterDate>
    </FooterContainer>
  );
}