import React from 'react';
import styled from 'styled-components';
//Media
import BannerImg from '../img/banner3.jpg'

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
  top: 50%;
  left: 50%;
  max-width: 860px;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  
  h3 {
    font-size: 20px;
  }
  
  @media only screen and (min-width: 1080px) {
    padding: 40px;
    
    h3 {
      font-size: 22px;
    }
  }
 
`;

export default function Banner(props) {

  return (
    <BannerContainer className="component">
      <BannerImage src={BannerImg} alt="Young people holding hands" />
      <BannerText>
        <h3>{props.bannerQuote}</h3>
        <p>{props.bannerVerse}</p>
      </BannerText>
    </BannerContainer>
  );
}