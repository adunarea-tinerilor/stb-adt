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
      footerUpdateDate: "8 Iunie 2021",

      // Meeting TIME Link:
      meetingHour: "https://www.timeanddate.com/worldclock/fixedtime.html?msg=%C3%8Ent%C3%A2lnirea+Tinerilor+de+Joi&iso=20210610T10&p1=202&ah=2&am=30",

      // NEXT MEETING Details:
      nextMeetingDate: "Joi, 10 Iunie",

      // nextMeetingSubject: "Adunare de Experiențe și Program Pentru Copii",
      nextMeetingSubject: "Discuții Studiu",
      nextDiscussedLink: "http://www.acsib.com/HTDB/Volume6/V6C12.htm#z0009243",
      nextDiscussedLinkText: "Volumul 6, cap. 12 - Privilegiile şi obligaţiile Noii Creaţii cu privire la căsătorie, precum şi la alte lucruri",

      // nextMeetingAnnouncement: "<hr/><p>Întrebări adiționale:<br/><br/>" +
        // "1. Cum practicăm rugăciunea în familie soț-soție, în armonie cu cea individuala? Mi-ar placea să aud frați care au pus în practică, în armonie cele două.</p>",

      nextMeetingQuestionsStudyFormat: [
        "Cum înțelegem pedeapsa dată femeii, \"bărbatul va stăpâni peste tine\"? Pag. 492, 493",
        "Ce lecții pentru familie putem extrage din Efeseni 5:22-33? Pag. 494, 495",
        "Ce îndatoriri are soțul credincios în calitate de cap al familiei? Pag. 496, 497",
        // "Din 1 Cor. 11:7: Cum, prin ce sau în ce fel este femeia slava bărbatului, în același fel cum bărbatul este slava lui Dumnezeu? / Care este învăţătura apostolului în 1 Cor. 11:3 cu privire la poziţia de cap? Pag. 491 p. 1",
        // "Se aplică acest argument în ceea ce priveşte relaţiile dintre sexe în general sau în particular? Pag. 491 p. 2",
        //
        // "Care sunt dovezile scripturale că poziţia de cap nu implică tiranie? Şi ce responasabilităţi impune asupra bărbătului această poziţie? Pag. 491 p. 3",
        // "Cum a continuat blestemul mamei Eva (Gen. 3:16, ultima parte) asupra fiicelor ei? Pag. 492 p. 1",
        // "Cum a acţionat folosirea nepotrivită a puterii fizice şi mintale din partea bărbatului asupra propriei lui nefericiri şi asupra degradării generale a rasei? Pag. 492 p. 2 şi Pag. 493 p. 1",
        // "Arătaţi cum indică apostolul că relaţia de căsătorie este o ilustraţie a relaţiei dintre Cristos şi Biserică? Pag. 494 p. 2, 3",
        // "Cum trebuie să considere Noile Creaţii în Isus Cristos relaţia de căsătorie din tip, soţul şi respectiv soţia? Pag. 495 p. 1",
        // "În cazul în care soţia posedă calităţi superioare soţului, ar trebui inversată această ordine a poziţiei de cap? Ce reguli generale n-ar trebui niciodată desconsiderate de către cei ce vor să se căsătorească? Pag. 495 p. 2",
        //
        // "Cum trebuie un adevărat soţ creştin să se îngrijească de interesele soţiei sale, atât naturale cât şi spirituale? Pag. 496 p. 1",
        // "Exercitarea poziţiei de cap implică ignorarea sfatului, sugestiilor sau cooperării soţiei? Pag. 497 p. 1, 2",
        // "Cum trebuie să-şi recunoască o adevărată soţie creştină îndatoririle şi privilegiile? Şi care este porunca specială a apostolului Pavel în această privinţă? Pag. 497 p. 3",
        // "Care este sfatul apostolului Petru? Pag. 498 p. 1",
        // "Cum trebuie să exercite soţia respectul potrivit faţă de soţ în administrarea tuturor lucrurilor casei? Pag. 498 p. 2",
        // "În cazul în care două creaturi noi nu se potrivesc bine, unde soţia este mai superioară, ce dificultăţi vor întâmpina soţul şi soţia? Pag. 499 p. 1, 2",
        // "Într-un astfel de caz ce curs ar trebui să urmeze soţul? Pag. 500 p. 1",
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
