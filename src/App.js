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
      footerUpdateDate: "20 Aprilie 2021",

      // Meeting TIME Link:
      meetingHour: "https://www.timeanddate.com/worldclock/fixedtime.html?msg=%C3%8Ent%C3%A2lnirea+Tinerilor+de+Joi&iso=20210422T10&p1=202&ah=2&am=30",

      // NEXT MEETING Details:
      nextMeetingDate: "Joi, 22 Aprilie",

      // nextMeetingSubject: "Discuții Studiu",
      nextMeetingSubject: "Program cu Copiii și Adunare de Expreriențe",
      nextDiscussedLinkText: "",
      nextDiscussedLink: "",
      nextMeetingAnnouncement: "<br/>" +
        "<p><strong>Subiectele ce vor fi votate pentru următoarele studii:</strong></p>" +
        "<p>1. Vrăjmaşii şi Atacurile Împotriva Noii Creaţii (vol. 6 capitolul 15) <br>" +
        "2. Botezul <br>" +
        "3. Legămintele <br>" +
        "4. Apărarea adevărului - cum o facem noi și cum ne învățăm copiii să o facă <br>" +
        "5. Relația dintre soț și soție, influența acesteia în familie </p><hr/>" +
        "<p>Adunarea din 29 Aprilie: Discurs fr. Jerry Leslie -  <i>Dincolo de ferestrele lor</i></p><hr/>",
      // "<p>Întrebări din capitolul studiat: <a href='http://www.acsib.com/HTDB/Volume6/V6C13.htm' rel=\"noopener noreferrer\" target=\"_blank\"> Volumul 6, Obligațiile Părintești ale Noii Creații</a>, și alte întrebări. Va fi de ajutor dacă poți scrie întrebările tale în grupul de pe WhatsApp pentru a ne pregăti cu toții.</p>",
      nextMeetingQuestions: [
        // "Cine, când, unde și cum poate avea copii?",
        // "Cum practicăm rugăciunea în familie, soț - soție, în armonie cu cea individuală? Exemple prin experiențele fraților care au reușit să le armonizeze pe cele două în practica de zi cu zi.",
        // "Deși capitolul studiat se referă la noile creații, tinerii,  cuplurile care au sau vor copii, totuși ce sfaturi și recomandări am învățat din capitolul studiat pentru familiile fără copii?",
        // "Ce să facem în calitate de părinți atunci când ni se pare că copii nu ne ascultă și ne întorc vorba sau vorbesc cum nu ne-am aștepta?",
        // "Ce să facem în calitate de copii atunci când ni se pare că părinții nu ne ascultă sau vorbesc cum nu ne-am aștepta?",
        // "Cînd părinții își pedepsesc copiii pentru neascultare de ce nu trebuie să fie furioși?",
        // "Cum trebuie să fie atmosfera în familie, ca copiii după ce vor crește mari și vor pleca de acasă să le fie dor și să-și amintească cu drag de casa și familia unde au crescut?",
        // "De la ce vîrstă putem îndrumă copiii spre consacrare?",
        // "Cum sunt copiii îndreptățiți prin părinții consacrati? 1 Corinteni 7:14",
      ],

      //ANNOUNCEMENTS
      // note: "Adunare pentru Copii - 24 Aprilie | ",
      // noteLinkTxt: "vezi ora",
      // noteLink: "https://www.timeanddate.com/worldclock/fixedtime.html?msg=Adunare+pentru+Copii&iso=20210424T1730&p1=177",

      announcementsNotes: "<h3>Alte Anunțuri</h3><p>Adunare pentru Copii - 24 Aprilie, <a rel='noopener noreferrer' target='_blank' href='https://www.timeanddate.com/worldclock/fixedtime.html?msg=Adunare+pentru+Copii&iso=20210424T1730&p1=177' >vezi ora</a></p>" +
        "<p>Convenție Italia 24 - 25 Aprilie, <a rel='noopener noreferrer' target='_blank' href='https://www.timeanddate.com/worldclock/fixedtime.html?msg=Italian+Convention+24th+-+25th+April&iso=20210424T0930&p1=254' >vezi ora</a></p>",

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
    this.setState({
      archiveList: ArchiveData,
      filteredList: ArchiveData,
      childrenMeeting: ChildrenMeeting,
      studyResource: StudyResource
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
              nextMeetingSubject={this.state.nextMeetingSubject}
              nextMeetingQuestions={this.state.nextMeetingQuestions}
              nextDiscussedLinkText={this.state.nextDiscussedLinkText}
              nextMeetingAnnouncement={this.state.nextMeetingAnnouncement}
              {...meetingDetails}

              // Children Meeting Announcements
              childrenMeeting={this.state.childrenMeeting}
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