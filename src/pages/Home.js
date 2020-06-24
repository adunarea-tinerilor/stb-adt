import React from 'react';
// COMPONENTS
import Banner from "../partials/Banner";
import Intro from "../partials/Intro";

export default function Home(props) {
  return (
    <div>
      <Banner
        bannerQuote={props.bannerQuote}
        bannerVerse={props.bannerVerse}/>
      <Intro
        note={props.note}
        noteLink={props.noteLink}
        noteLinkTxt={props.noteLinkTxt}
        zoomLink={props.zoomLink}
        meetingHour={props.meetingHour}
        nextMeetingDate={props.nextMeetingDate}
        nextMeetingSubject={props.nextMeetingSubject}
      />
    </div>
  );
}