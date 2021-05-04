import React from 'react';
import styled from 'styled-components';

//MEDIA
// import ZoomLogo from "../img/zoom-logo.png"
// import downloadFile from "file source"

export default function Intro(props) {

  return (
    <IntroContainer>
      <div>
        <IntroCardContainer className="component">
          <p>Adunarea tinerilor se ține pe Zoom în fiecare joi. Fă click în linkul de mai jos pentru a intra la adunare:<br/><a href={props.zoomLink} rel="noopener noreferrer" target="_blank">Linkul Adunării</a></p>
          <hr/>
          <p>Click în linkul de mai jos pentru a afla ora adunării în zona ta:<br/><a href={props.meetingHour} rel="noopener noreferrer" target="_blank">Ora Adunării de Joi</a></p>
        </IntroCardContainer>
        {props.announcementsNotes && <IntroCardContainer className="component">
          <div dangerouslySetInnerHTML={{__html: `${props.announcementsNotes}`}}></div>
        </IntroCardContainer>}
      </div>
      <div>
        <IntroCardContainer className="component">
          <CardTitle>Următoarea întâlnire va fi {props.nextMeetingDate}</CardTitle>
          {props.nextMeetingSubject && <h2>{props.nextMeetingSubject}</h2>}
          <DiscussedTitle>
            <a href={props.nextDiscussedLink}
               rel="noopener noreferrer"
               target="_blank">
              {props.nextDiscussedLinkText}
            </a>
          </DiscussedTitle>
          <ol>
            {props.nextMeetingQuestions.map((subject, index) => {
              return <li key={index}><p>{subject}</p></li>
            })}
          </ol>
          {props.nextMeetingAnnouncement && <div dangerouslySetInnerHTML={{__html: `${props.nextMeetingAnnouncement}`}}></div>}
        </IntroCardContainer>
        {props.childrenMeeting && props.childrenMeeting.map((meeting, index) => {
          return (
            <IntroCardContainer key={index} className="component">
              <h2>{meeting.title}</h2>
              <div dangerouslySetInnerHTML={{__html: `${meeting.subject}`}}></div>
            </IntroCardContainer>
          )
        })}
      </div>
    </IntroContainer>
  );
}

// Styles
const IntroContainer = styled.section`
  margin: 40px 0;
 
   & > div:first-child {
      text-align: center;
    }
    
    a {
      color: teal;
    }
  
  @media only screen and (min-width: 1080px) {
    display: flex;
    justify-content: space-between;
    
    & > div:first-child {
      width: 40%;
      margin: 0 40px 0 0;
      align-self: flex-start;
    }
    
     & > div:last-child {
      width: 70%
    }
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
`;
