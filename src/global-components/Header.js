import React from 'react';
import {NavLink} from "react-router-dom";
import styled from 'styled-components';
import LogoImg from "../img/CC-logo.png";

// Styles
const HeaderContainer = styled.header`
  text-align: right;
  padding: 24px;
  margin-bottom: 40px;
  
  @media only screen and (min-width: 1080px) {
    display: flex;
    justify-content: space-between;
  }
`;

const Menu = styled.ul`
display flex;
 justify-content: center;

 @media only screen and (min-width: 1080px) {
    justify-content: flex-end;
  }
`;

const Item = styled.li`
  padding: 0 10px;
  text-align: center;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  
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

export default function Header() {

  return (
    <HeaderContainer className="component">
      <Logo>
        <img src={LogoImg} alt="Bible Students Logo: Cross & Crown"/>
        <div>
          <h3>Studenții Bibliei</h3>
          <h3>Adunarea Tinerilor</h3>
        </div>
      </Logo>
      <Menu>
        <Item>
          <NavLink exact to="/">Acasă</NavLink>
        </Item>
        <Item>
          <NavLink to="/studyformat">Format Studiu</NavLink>
        </Item>
        <Item>
          <NavLink to="/arhiva">Arhivă</NavLink>
        </Item>
      </Menu>
    </HeaderContainer>
  );
}