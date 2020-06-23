import React from 'react';
import styled from 'styled-components';
import {NavLink, Link} from "react-router-dom"
import LogoImg from "../img/CC-logo.png"

// Styles
const HeaderContainer = styled.header`
  text-align: center;
  padding: 35px;
  margin-bottom: 40px;
  
  @media only screen and (min-width: 1080px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 40px;
  }
`;
const Logo = styled.div`
  & a {
    display: flex;
    align-items: center;
    justify-content: center;
    
      &:hover {
      text-decoration: none;
      }
  }
  
  & h4 {
    text-align: left;
    font-size: 40px;
         
     @media only screen and (min-width: 1080px) {
     font-size: 16px;
     }
  }
  
  & img {
    height: 80px;
    position: relative;
    left: -7px
  }
`;
const Menu = styled.ul`
  & li {
    display: inline-block;
    
    & a {
      padding: 4px 15px;
      font-size: 40px;
      margin-top: 40px;
         
     @media only screen and (min-width: 1080px) {
     font-size: 18px;
     margin-top: 0;
     }
    }
  }
`;

export default function Header() {

  return (
    <HeaderContainer className="component">
      <Logo>
        <Link to="/">
          <img src={LogoImg} alt="Bible Students Logo: Cross & Crown"/>
          <div>
            <h4>Studenții Bibliei</h4>
            <h4>Adunarea Tinerilor</h4>
          </div>
        </Link>
      </Logo>
      <nav>
        <Menu>
          <li>
            <NavLink exact to="/">Acasă</NavLink>
          </li>
          <li>
            <NavLink to="/arhiva">Arhivă</NavLink>
          </li>
        </Menu>
      </nav>
    </HeaderContainer>
  );
}