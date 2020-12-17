import React from 'react';
import {HashRouter, Route} from "react-router-dom";

//COMPONENTS
// import Header from "./global-components/Header";
import Footer from "./global-components/Footer";
import Home from "./pages/Home";
// import Archive from "./pages/Archive";
// DATA
import ArchiveData from "./data/archive-data";
import ChildrenMeeting from "./data/children-meeting-data";
// import downloadFile from "../data/PROGRAM-Conventie12Decembrie2020.docx"

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // SITE UPDATE DATE:
      footerUpdateDate: "17 Decembrie 2020",

      // Meeting TIME Link:
      meetingHour: "https://www.timeanddate.com/worldclock/fixedtime.html?msg=%C3%8Ent%C3%A2lnirea+Tinerilor+de+Joi&iso=20201217T10&p1=202&ah=2&am=30",

      // NEXT MEETING Details:
      nextMeetingDate: "Joi, 24 Decembrie",
      // nextMeetingSubject: "Adunare de Expreriențe",

      nextMeetingSubject: "Discuții Studiu",
      nextDiscussedLinkText: "Volumul 6, Obligațiile Părintești ale Noii Creații",
      nextDiscussedLink: "http://www.acsib.com/HTDB/Volume6/V6C13.htm#z0009380",
      nextMeetingQuestions: [
        "Din ce punct de vedere trebuie administrată mustrarea în cazul neascultării din partea copilului? pag. 553 p. 1",
        "Care trebuie să fie standardul în toate sugestiile? pag. 554 p. 1",
        "Poate Noua Creatură să se aştepte în mod rezonabil la o protecţie miraculoasă pentru copiii săi în marele timp de strâmtorare? Pag. 554 p. 2",
        "Ce promisiune scripturală pare să se aplice atât la copii cât şi la toţi cei care iubesc dreptatea? pag. 555 p. 1",
        "Care este neliniştea naturală a părinţilor pentru copiii lor în această perioadă şi cum trebuie ea învinsă? pag. 555 p. 2",
        "Explicaţi care este cea mai bună pregătire posibilă ce poate să o facă o Nouă Creatură pentru protejarea copiilor săi în timpul de strâmtorare. pag. 556 p. 1",
        "Care trebuie să fie atitudinea Noii Creaturi faţă de distracţiile pentru copiii săi? pag. 556 p. 2",

        // "Se aplică sfatul apostolic cu privire la căsătoria Noilor Creaţii şi pentru copiii lor neconsacraţi? pag. 557 p. 1",
        // "Cum greşesc mulţi din Noua Creaţie în această privinţă? pag. 557 p. 2, 3, 4",
        // "La ce vârstă ar părea potrivit ca bărbaţii şi respectiv femeile să se căsătorească? pag. 558 p. 1",
        // "Cum pot ajuta nişte părinţi înţelepţi pe copiii lor în găsirea partenerului potrivit? pag. 558 p. 2",
        // "Care este legătura strânsă între mintea curată şi sănătoasă şi corpul curat şi sănătos? pag. 559 p. 1",
        // "În acest scop, cum ar trebui să procedeze părintele în privinţa aerisirii, curăţeniei şi a exerciţiului mintal şi fizic al copiilor lui? pag. 559 p. 2",
        // "În care trei categorii se pot împărţi alimentele? Şi care este proporţia potrivită din fiecare pentru hrănire pe durata unei zile? pag. 560 p. 1-4",
        // "Cum ar putea fi aranjată satisfăcător o dietă vegetariană dacă ar fi nevoie să facem economie? pag. 561 p. 1",
        // "Explicaţi rezultatele dăunătoare a unei diete disproporţionate în special a hranei ce conţine amidon. pag. 561 p. 2",
        // "Să avem grijă ca să nu facem din dietă o manie”? pag. 561 p. 3",
        // "De ce este o discuţie veselă şi folositoare un însoţitor de dorit la masa familiei? pag. 562 p. 1"
      ],

      // ANNOUNCEMENTS:
      // announcement: "<h3>RTE</h3>",

      // note: "Adunare pentru Copii - Sâmbătă, 10 Octombrie - ",
      // noteLinkTxt: "vezi ora",
      // noteLink: "https://www.timeanddate.com/worldclock/fixedtime.html?msg=Adunare+pentru+Copii&iso=20201010T08&p1=202&ah=1",

      // GENERAL INFO:
      zoomLink: "https://us02web.zoom.us/j/88287573616?pwd=WGtCUjdEZWFmb1ZPNkZLcHpvMHBNdz09",
      bannerQuote: "Caută să te înfăţişezi înaintea lui Dumnezeu ca un om încercat, ca un lucrător care n-are de ce să-i fie ruşine şi care împarte drept Cuvântul adevărului.",
      bannerVerse: "2 Timotei 2:15",
      childrenMeeting: []

      // showScroll: false,
      // value: "",
      // archiveList: [],
      // filteredList: [],
    };
  }

  componentDidMount() {
    this.setState({
      archiveList: ArchiveData,
      filteredList: ArchiveData,
      childrenMeeting: ChildrenMeeting
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
    return (
      <HashRouter basename="/adunarea-tinerilor">
        <div className="App">
          {/*<Header/>*/}
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
              nextDiscussedLink={this.state.nextDiscussedLink}
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
          {/*<Route path="/arhiva" render={() =>*/}
          {/*  <Archive*/}
          {/*    filteredList={this.state.filteredList}*/}
          {/*    handleArchiveButton={this.handleArchiveButton}*/}
          {/*    value={this.state.value}*/}
          {/*    handleInput={this.handleInput}*/}
          {/*    handleClearSearch={this.handleClearSearch}*/}
          {/*    scrollTop={this.handleScrollTop}*/}
          {/*    showScroll={this.state.showScroll}*/}
          {/*  />}*/}
          {/*/>*/}
          <Footer footerUpdateDate={this.state.footerUpdateDate}/>
        </div>
      </HashRouter>
    );
  }
}