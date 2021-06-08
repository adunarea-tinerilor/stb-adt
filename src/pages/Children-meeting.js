import React from 'react';
import styled from 'styled-components';
import ActivityKids from "../img/carticica.png";

export default function ChildrenMeeting(props) {

  return (
    <IntroContainer>
      <IntroCardContainer className="component">
        {props.childrenMeetingData && props.childrenMeetingData.map((meeting, index) => {
          return (
            <div key={index}>
              <PageTitle>{meeting.title}</PageTitle>
              <div dangerouslySetInnerHTML={{__html: `${meeting.subject}`}}></div>
              <ImageBlock src={ActivityKids} alt="Lucrari creative biblice pentru copii."/>
            </div>
          )
        })}
        {props.childrenMeetingData.length === 0 && <h2>Încă nu avem detalii despre următoarea adunare pentru copiii.</h2>}
      </IntroCardContainer>
    </IntroContainer>
  );
}

// Styles
const IntroContainer = styled.section`
  margin: 40px 0;    
    a {
      color: teal;
    }
  
  @media only screen and (min-width: 1080px) {
  }
`;
const IntroCardContainer = styled.div`
  
  box-shadow: 0px 0px 10px 0px #C9C9C9;
  padding: 20px;
  margin-bottom: 40px;
  
   @media only screen and (min-width: 1080px) {
    padding: 20px;
 }
  
  & p a {
    color: teal;
  }
  
  & h2 {
  text-align: center;
 }
   
 @media only screen and (min-width: 1080px) {
   margin: 0 0 40px;
 }
`;
const PageTitle = styled.h2`
 text-align: center;
`;
const ImageBlock = styled.img`
   width: 100%;
`;
