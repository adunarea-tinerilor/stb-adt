import React from 'react';
import styled from 'styled-components';
//Media
import BannerImg from '../img/banned-bible-cover.jpg';
import LogoImg from "../img/CC-logo.png";


// Styles
const BannerContainer = styled.section`
   height: 440px;
   position: relative;
   background: black;
`;
const BannerImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  opacity: 60%;
  object-position: bottom;
`;
const BannerText = styled.div`
  width: 95%;
  padding: 0 24px;
  position: absolute;
  bottom: 0;
  left: 50%;
  max-width: 860px;
  transform: translateX(-50%);
  color: white;
  text-align: center;
  
  h3 {
    font-size: 20px;
    text-shadow: 2px 2px 14px #000;
  }
  
  @media only screen and (min-width: 1080px) {   
    h3 {
      font-size: 22px;
    }
  }
`;
const Logo = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  
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

export default function Banner(props) {

  return (
    <BannerContainer className="component">
      <BannerImage src={BannerImg} alt="Opened Bible" />
      <Logo>
        <img src={LogoImg} alt="Bible Students Logo: Cross & Crown"/>
        <div>
          <h3>Studenții Bibliei</h3>
          <h3>Adunarea Tinerilor</h3>
        </div>
      </Logo>
      <BannerText>
        <h3>{props.bannerQuote}</h3>
        <p>{props.bannerVerse}</p>
      </BannerText>
    </BannerContainer>
  );
}