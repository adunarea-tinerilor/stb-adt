import React from 'react';
import styled from 'styled-components';
//MEDIA
import ZoomLogo from "../img/zoom-logo.png"

// Styles
const IntroContainer = styled.section`
  padding: 20px;
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
      margin: 0 40px 0 0;
      text-align: center;
      align-self: flex-start;
    }
    
     & > div:last-child {
      width: 70%
    }
  }
`;
const IntroCardContainer = styled.div`
  box-shadow: 0px 0px 7px 0px #C9C9C9;
  padding: 20px;
  margin-bottom: 40px;
  
  &:last-child {
    margin-bottom: 0;
  }
  
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
const LinkMeeting = styled.p`
  & img {
    top: 5px;
    height: 18px;
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
const DiscussedTitle = styled.h3`
  text-align: center;
  & a {
    color: teal;
  }  
`;
const InfoNote = styled.p`
  font-weight: bold;
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
        {props.note && <InfoNote>{props.note} <a href={props.noteLink} rel="noopener noreferrer"
                                                 target="_blank">{props.noteLinkTxt}</a></InfoNote>}
      </IntroCardContainer>

      <div>
        <IntroCardContainer>
          <CardTitle>Următoarea întâlnire va fi {props.nextMeetingDate}</CardTitle>
          <h2>Discuții Studiu {props.nextDiscussedVol}</h2>
          <DiscussedTitle><a href={props.nextDiscussedLink} rel="noopener noreferrer"
                             target="_blank">{props.nextDiscussedTitle}</a></DiscussedTitle>
          <ol>
            {props.nextMeetingSubject.map((subject, index) => {
              return <li key={index}><p>{subject}</p></li>
            })}
          </ol>
        </IntroCardContainer>

        {props.childrenMeeting && props.childrenMeeting.map((meeting, index) => {
          return (
            <IntroCardContainer>
              <h2>{meeting.title}</h2>
              {
                meeting.subject.map((subj, index) => {
                  return <p key={index}>{subj}</p>
                })}
            </IntroCardContainer>
          )
        })}
      </div>

    </IntroContainer>
  );
}