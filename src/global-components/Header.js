import React from 'react';
import styled from 'styled-components';
import {NavLink, Link} from "react-router-dom"
import LogoImg from "../img/CC-logo.png"

// Styles
const HeaderContainer = styled.header`
  text-align: center;
  padding: 24px;
  margin-bottom: 40px;
  
  @media only screen and (min-width: 1080px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px;
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
  
  & h3 {
    text-align: left;
    margin: 0;
  }
  
  & img {
    height: 60px;
    position: relative;
    left: -7px
  }
`;
const Menu = styled.ul`
  margin: 45px 0 0;
    
  & li {
    display: inline-block;
  
  & a {
    padding: 4px 15px;         
    }
  }
  
  @media only screen and (min-width: 1080px) {
    margin-top: 0;
  }
`;

export default function Header() {

  return (
    <HeaderContainer className="component">
      <Logo>
        <Link to="/">
          <img src={LogoImg} alt="Bible Students Logo: Cross & Crown"/>
          <div>
            <h3>Studenții Bibliei</h3>
            <h3>Adunarea Tinerilor</h3>
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