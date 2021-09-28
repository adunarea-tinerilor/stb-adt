import React from 'react';
import {HashRouter, Route} from "react-router-dom";

//COMPONENTS
import Header from "./global-components/Header";
import Home from "./pages/Home";
import StudyFormat from "./pages/StudyFormat";
import ChildrenMeeting from "./pages/Children-meeting";
import Archive from "./pages/Archive";
import Footer from "./global-components/Footer";
// DATA
import ArchiveData from "./data/archive-data";
import StudyResource from "./data/resource-text";
import ChildrenMeetingData from "./data/children-meeting-data";
import QuestionsList from "./data/questions-list";
// import downloadFile from "../data/PROGRAM-Conventie12Decembrie2020.docx"

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // SITE UPDATE DATE:
      footerUpdateDate: "24 Septembrie 2021",

      // Meeting TIME Link:
      meetingHour: "https://www.timeanddate.com/worldclock/fixedtime.html?msg=%C3%8Ent%C3%A2lnirea+Tinerilor+de+Joi&iso=20210930T1030&p1=202&ah=2&am=30",

      // NEXT MEETING Details:
      nextMeetingDate: "Joi, 30 Septembrie",

      // testimonyMeeting: "Adunare de Experiențe și Program Pentru Copii",
      nextMeetingSubject: "Discuții Studiu",
      nextDiscussedLink: "http://www.acsib.com/HTDB/Volume6/V6C15.htm#z0009509",
      nextDiscussedLinkText: "Volumul 6, cap. 15 - Vrăjmaşii şi Atacurile Împotriva Noii Creaţii",

      // nextMeetingAnnouncement: "<hr/><p>Întrebări adiționale:<br/><br/>" +
        // "1. Cum practicăm rugăciunea în familie soț-soție, în armonie cu cea individuala? Mi-ar placea să aud frați care au pus în practică, în armonie cele două.</p>",

      nextMeetingQuestionsStudyFormat: [
        "Care este vrăjmaşul principal al Noii Creaţii? Are Noua creatură două minţi sau este controlată de două voinţe? Pag. 599, p. 1 ",
        "Este moartea corpului pământesc cu voinţa lui şi învierea ulterioară un fapt real sau socotit? Şi cum trebuie menţinute aceste condiţii ale „morţii” şi „învierii” de către Noua Creatură? Pag. 600, p.1",
        "Care este declaraţia Scripturii cu privire la inima naturală? Şi cum este diferită inima Noii Creaturi? Pag. 600, p.2",
        "Cum este asaltată şi înşelată inima nouă de către inima veche cu dispoziţia egoistă? Pag. 601, p.1",
        "Care este unul dintre argumentele favo­rite şi înşelătoare ale acestei inimi vechi? Pag. 601, p.2",
        "Cum trebuie să întâmpine inima nouă aceste atacuri? Pag. 602, p.1, 2",
        "Ce este fanatismul şi cum trebuie evitat? şi ce este absolut necesar pentru a aplica potrivit principiile dreptăţii în vieţile noastre zilnice? Pag. 603 p. 1",
        "Ce gând ar trebui ţinut constant în minte de Noua Creatură? Şi care este singura restricţie ce trebuie s-o recunoaştem în această direcţie? Pag. 603 p. 2",
        "De ce este spiritul lumii în general opus standardului Noii Creaţii? Pag. 604 p. 1, 2",
        "De ce este lumea unul dintre cei mai mari vrăjmaşi ai Noii Creaţii şi de ce un antagonism este inevitabil? Pag. 604 p. 3",
        "Explicaţi de ce şi cele mai nobile obiective şi scopuri ale lumii în general sunt contrare standardelor Noii Creaţii? Pag. 605 p. 1",
        "Cu ce spirit ar trebui primite de către noi ura şi opoziţia din partea lumii? Pag. 605 p. 2",
        "Explicaţi îndemnul Scripturii nu iubiţi lumea” etc. ( Ioan 2:15) Pag. 606 p. 1, 2",
        "A stabilit Domnul pentru noi lucrarea herculeană de a reforma lumea? Şi ar fi potrivit pentru noi să ne înrolăm în denunţarea ordinii prezente a lucrurilor? Pag. 607 p. 1, 2",
        "Ce exemple scripturale putem urma în această direcţie? Pag. 608 p. 1",
      ],


      //ANNOUNCEMENTS
      // announcementsNotes: "<h3>Alte Anunțuri</h3>" +
      //   "<p>Adunare pentru Copii - 5 Iunie, " +
      //   " <a rel='noopener noreferrer' target='_blank' href='https://www.timeanddate.com/worldclock/fixedtime.html?msg=Adunare+pentru+Copii&iso=20210605T1730&p1=177'>vezi ora</a>" +
      //   "</p>",

      // GENERAL:
      zoomLink: "https://us02web.zoom.us/j/88287573616?pwd=WGtCUjdEZWFmb1ZPNkZLcHpvMHBNdz09",
      bannerQuote: "Caută să te înfăţişezi înaintea lui Dumnezeu ca un om încercat, ca un lucrător care n-are de ce să-i fie ruşine şi care împarte drept Cuvântul adevărului.",
      bannerVerse: "2 Timotei 2:15",
      childrenMeetingData: [],

      // showScroll: false,
      // value: "",
      archiveList: [],
      filteredList: [],
      nextMeetingQuestions: [],
      studyResource: "",
      noResourceMessage: "",
    };
  }

  componentDidMount() {
    this.setState({
      archiveList: ArchiveData,
      filteredList: ArchiveData,
      childrenMeetingData: ChildrenMeetingData,
      studyResource: StudyResource,
      nextMeetingQuestions: QuestionsList
    });

    // check page scroll
    window.addEventListener('scroll', this.checkScrollTop);
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
              testimonyMeeting={this.state.testimonyMeeting}
              nextMeetingSubject={this.state.nextMeetingSubject}
              nextMeetingQuestions={this.state.nextMeetingQuestions}
              nextDiscussedLinkText={this.state.nextDiscussedLinkText}
              nextMeetingAnnouncement={this.state.nextMeetingAnnouncement}
              {...meetingDetails}

              // Info Note
              announcementsNotes={this.state.announcementsNotes}
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
            nextMeetingQuestionsStudyFormat={this.state.nextMeetingQuestionsStudyFormat}
            studyResource={this.state.studyResource}
            noResourceMessage={this.state.noResourceMessage}
          />}
          />
          <Route path="/adunarecopii" render={() => <ChildrenMeeting
            // Children Meeting Announcements
            childrenMeetingData={this.state.childrenMeetingData}/>}
          />
          <Footer footerUpdateDate={this.state.footerUpdateDate}/>
        </div>
      </HashRouter>
    );
  }
}
