import React from 'react';
import styled from 'styled-components';
//MEDIA
import ZoomLogo from "../img/zoom-logo.png"

// Styles
const IntroContainer = styled.section`
  padding: 40px;
  margin: 40px 0;
  
   & > div:first-child {
      text-align: center;
    }
  
  @media only screen and (min-width: 1080px) {
    padding: 40px;
    display: flex;
    justify-content: space-between;
    
    & > div:first-child {
      width: 38%;
      margin-right: 40px;
      text-align: center;
    }
    
     & > div:last-child {
      width: 70%
    }
  }
`;
const IntroCardContainer = styled.div`
  box-shadow: 0px 0px 7px 0px #C9C9C9;
  padding: 35px;
  margin: 40px 0;
  
   @media only screen and (min-width: 1080px) {
    padding: 20px;
 }
  
  & p a {
    color: teal;
  }
  
  & p {
    margin-bottom: 15px;
  }
  
  & h2 {
  text-align: center;
 
 }
   
 @media only screen and (min-width: 1080px) {
   width: 48%;
   margin: 0 0 40px;
 }
`;
const LinkMeeting = styled.p`
  & img {
    top: 4px;
    height: 32px;
    position: relative;
    
    @media only screen and (min-width: 1080px) {
     height: 16px;
 }
  }
`;
const CardTitle = styled.h2`
  border-bottom: 1px solid lightgray;
  padding-bottom: 24px;
`;

export default function Intro(props) {

  return (
    <IntroContainer className="component">
      <IntroCardContainer>
        <h2>Informații</h2>
        <LinkMeeting>Adunarea se ține pe <img src={ZoomLogo} alt="Zoom Logo"/></LinkMeeting>
        <p>Se solicită o parolă pentru întâlnire</p>
        <p><a href={props.zoomLink} rel="noopener noreferrer" target="_blank"> Linkul adunării</a></p>
        <p><a href={props.meetingHour} rel="noopener noreferrer" target="_blank">Ora Adunării</a></p>
      </IntroCardContainer>


      <IntroCardContainer>
        <CardTitle>Următoarea întâlnire va fi Joi, 25 Iunie</CardTitle>
        <h2>Discuții Studiu</h2>
        <ol>
          {props.nextMeetingSubject.map((subject, index) => {
            return <li key={index}><p>{subject}</p></li>
          })}
        </ol>
      </IntroCardContainer>
    </IntroContainer>
  );
}