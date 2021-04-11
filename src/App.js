import React from 'react';
import {HashRouter, Route} from "react-router-dom";

//COMPONENTS
import Header from "./global-components/Header";
import Home from "./pages/Home";
import StudyFormat from "./pages/StudyFormat";
import Archive from "./pages/Archive";
import Footer from "./global-components/Footer";
// DATA
import ArchiveData from "./data/archive-data";
import StudyResource from "./data/resource-text";
import ChildrenMeeting from "./data/children-meeting-data";
// import downloadFile from "../data/PROGRAM-Conventie12Decembrie2020.docx"

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // SITE UPDATE DATE:
      footerUpdateDate: "8 Aprilie 2021",

      // Meeting TIME Link:
      meetingHour: "https://www.timeanddate.com/worldclock/fixedtime.html?msg=%C3%8Ent%C3%A2lnirea+Tinerilor+de+Joi&iso=20210415T10&p1=202&ah=2&am=30",

      // NEXT MEETING Details:
      nextMeetingDate: "Joi, 15 Aprilie",
      // nextMeetingSubject: "Adunare de Expreriențe",

      nextMeetingSubject: "Discuții Studiu",
      nextDiscussedLinkText: "",
      nextDiscussedLink: "",
      nextMeetingAnnouncement: "<p>Întrebări și răspunsuri din capitolul studiat: Volumul 6, Obligațiile Părintești ale Noii Creații, și alte întrebări.</p>" +
        "<p>Va fi de ajutor dacă poți scrie întrebările tale în grupul de pe WhatsApp pentru a ne pregăti.</p>" +
        "<p>Se vor propune subiecte pentru următoarele studii.</p>",
      nextMeetingQuestions: [

      ],

      // ANNOUNCEMENTS:
      // announcement: "<h3>RTE</h3>",

      // note: "Adunare pentru Copii - Sâmbătă, 10 Aprilie",
      // noteLinkTxt: "vezi ora",
      // noteLink: "https://www.timeanddate.com/worldclock/fixedtime.html?msg=Adunare+pentru+Copii&iso=20201010T08&p1=202&ah=1",

      // GENERAL INFO:
      zoomLink: "https://us02web.zoom.us/j/88287573616?pwd=WGtCUjdEZWFmb1ZPNkZLcHpvMHBNdz09",
      bannerQuote: "Caută să te înfăţişezi înaintea lui Dumnezeu ca un om încercat, ca un lucrător care n-are de ce să-i fie ruşine şi care împarte drept Cuvântul adevărului.",
      bannerVerse: "2 Timotei 2:15",
      childrenMeeting: [],

      // showScroll: false,
      // value: "",
      archiveList: [],
      filteredList: [],
      studyResource: "",
      noResourceMessage: "",
    };
  }

  componentDidMount() {
    console.log(StudyResource);
    console.log(ArchiveData);

    this.setState({
      archiveList: ArchiveData,
      filteredList: ArchiveData,
      childrenMeeting: ChildrenMeeting,
      studyResource: StudyResource
    });

    // check page scroll
    window.addEventListener('scroll', this.checkScrollTop)
  }

  checkScrollTop = () => {
    let showScroll = this.state.showScroll;
    let offsetSize = 700;
    if (!showScroll && window.pageYOffset > offsetSize) {
      this.setState({
        showScroll: true
      })
    } else if (showScroll && window.pageYOffset <= offsetSize) {
      this.setState({
        showScroll: false
      })
    }
  };

  handleScrollTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };


  // Toggle Reference button
  handleArchiveButton = index => {
    let list = this.state.archiveList;
    list[index].refOpen = !list[index].refOpen;
    this.setState({
      list
    });
  };


  handleInput = e => {
    let archiveList = this.state.archiveList;

    let filteredList = archiveList.filter(function (item) {
      return item.questionList.toString().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(e.target.value.toLowerCase())
    });

    this.setState({
      filteredList: filteredList,
      value: e.target.value
    });
  };

  handleClearSearch = () => {
    this.setState({
      filteredList: this.state.archiveList,
      value: ""
    });
  };


  render() {
    const meetingDetails = {
      nextMeetingQuestions: this.state.nextMeetingQuestions,
      nextDiscussedLink: this.state.nextDiscussedLink
    };
    return (
      <HashRouter basename="/stb-adt">
        <div className="App">
          <Header/>
          <Route exact path="/" render={() =>
            <Home
              // Banner
              bannerQuote={this.state.bannerQuote}
              bannerVerse={this.state.bannerVerse}
              // Info Notes
              zoomLink={this.state.zoomLink}
              meetingHour={this.state.meetingHour}
              // Study Announcements
              nextMeetingDate={this.state.nextMeetingDate}
              nextMeetingSubject={this.state.nextMeetingSubject}
              nextMeetingQuestions={this.state.nextMeetingQuestions}
              nextDiscussedLinkText={this.state.nextDiscussedLinkText}
              nextMeetingAnnouncement={this.state.nextMeetingAnnouncement}
              {...meetingDetails}

              // Children Meeting Announcements
              childrenMeeting={this.state.childrenMeeting}
              // Info Note
              note={this.state.note}
              noteLink={this.state.noteLink}
              noteLinkTxt={this.state.noteLinkTxt}
              announcement={this.state.announcement}
              scrollTop={this.handleScrollTop}
              showScroll={this.state.showScroll}
            />}
          />
          <Route path="/arhiva" render={() =>
            <Archive
              filteredList={this.state.filteredList}
              handleArchiveButton={this.handleArchiveButton}
              value={this.state.value}
              handleInput={this.handleInput}
              handleClearSearch={this.handleClearSearch}
              scrollTop={this.handleScrollTop}
              showScroll={this.state.showScroll}
            />}
          />
          <Route path="/studyformat" render={() => <StudyFormat
            {...meetingDetails}
            studyResource={this.state.studyResource}
            noResourceMessage={this.state.noResourceMessage}
          />}
          />
          <Footer footerUpdateDate={this.state.footerUpdateDate}/>
        </div>
      </HashRouter>
    );
  }
}