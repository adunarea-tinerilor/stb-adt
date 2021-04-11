import React from 'react';
// COMPONENTS
import Banner from "../partials/Banner";
import Intro from "../partials/Intro";
import Arrow from "../img/Arrow-Up.png";
import styled from "styled-components";

const ScrollTop = styled.button`
  cursor: pointer;
  position: fixed;
  right: 20px;
  bottom: 20px;
  background: transparent;
  border: 0;
  outline: none;
  transition: all .3s linear;

  img {
    object-fit: cover;
    width: 30px;
  }
  
   @media only screen and (min-width: 1080px) {
    right: 40px;
    bottom: 40px;
    padding: 0;
    
    &:hover {
       bottom: 48px;
    }
   }
`;

export default function Home(props) {
  return (
    <div>
      <Banner
        bannerQuote={props.bannerQuote}
        bannerVerse={props.bannerVerse}/>
      <Intro
        note={props.note}
        announcement={props.announcement}
        noteLink={props.noteLink}
        noteLinkTxt={props.noteLinkTxt}
        zoomLink={props.zoomLink}
        meetingHour={props.meetingHour}
        nextMeetingDate={props.nextMeetingDate}
        nextMeetingSubject={props.nextMeetingSubject}
        nextDiscussedLinkText={props.nextDiscussedLinkText}
        nextDiscussedLink={props.nextDiscussedLink}
        nextMeetingQuestions={props.nextMeetingQuestions}
        nextMeetingAnnouncement={props.nextMeetingAnnouncement}
        childrenMeeting={props.childrenMeeting}
      />
      {props.showScroll === true && <ScrollTop onClick={props.scrollTop}><img src={Arrow} alt="Biblia deschisă" /></ScrollTop>}
    </div>
  );
}