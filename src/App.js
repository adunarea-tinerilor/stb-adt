import React from 'react';
import {HashRouter, Route} from "react-router-dom";
//COMPONENTS
import Header from "./global-components/Header";
import Footer from "./global-components/Footer";
import Home from "./pages/Home";
import Archive from "./pages/Archive";
// DATA
import ArchiveData from "./data/archive-data";
import ChildrenMeeting from "./data/children-meeting-data";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // SITE UPDATE DATE:
      footerUpdateDate: "1 Octombrie 2020",

      // Meeting TIME Link:
      meetingHour: "https://www.timeanddate.com/worldclock/fixedtime.html?msg=%C3%8Ent%C3%A2lnirea+Tinerilor&iso=20201001T10&p1=202&ah=2&am=30",

      // NEXT MEETING Details:
      nextMeetingDate: "Joi, 1 Octombrie",
      nextMeetingSubject: "Discuții Studiu",
      nextDiscussedLinkText: "Volumul 6, Obligațiile Părintești ale Noii Creații",
      nextDiscussedLink: "http://www.acsib.com/HTDB/Volume6/V6C13.htm#z0009344",
      nextMeetingQuestions: [
        "Cum pot fi învăţaţi copiii să le placă ocupaţiile folositoare şi de ajutor? pag. 540 p. 1",
        "De ce trebuie să fie introduse în mintea tânără economia de timp şi de mijloace? pag. 540 p.  2",
        "Cum trebuie învăţat un copil să aleagă ce să citească şi ce să nu citească? pag. 541 p. 1",
        "Cât de serioasă şi îndelungată este influenţa sugestiilor rele? pag. 541 p. 2",
        "Cine trebuie să fie îndrumătorul copilului în pregătirea religioasă? Şi de ce este nedrept şi de asemenea dezavantajos să se încerce instruirea religioasă în şcolile publice? pag. 542 p. 1 - pag. 543 p. 1, 2."

      ],

      // ANNOUNCEMENTS:
      // note: "Adunare pentru Copii - Sâmbătă, 10 Octombrie - ",
      // noteLinkTxt: "vezi ora",
      // noteLink: "https://www.timeanddate.com/worldclock/fixedtime.html?msg=Adunare+pentru+Copii&iso=20201010T08&p1=202&ah=1",

      // GENERAL INFO:
      zoomLink: "https://us02web.zoom.us/j/88287573616?pwd=WGtCUjdEZWFmb1ZPNkZLcHpvMHBNdz09",
      bannerQuote: "Caută să te înfăţişezi înaintea lui Dumnezeu ca un om încercat, ca un lucrător care n-are de ce să-i fie ruşine şi care împarte drept Cuvântul adevărului.",
      bannerVerse: "2 Timotei 2:15",
      showScroll: false,
      value: "",
      archiveList: [],
      filteredList: [],
      childrenMeeting: [],
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
    if (!showScroll && window.pageYOffset > 600) {
      this.setState({
        showScroll: true
      })
    } else if (showScroll && window.pageYOffset <= 600) {
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
          <Header/>
          <Route exact path="/" render={() =>
            <Home
              note={this.state.note}
              childrenMeeting={this.state.childrenMeeting}

              noteLink={this.state.noteLink}
              noteLinkTxt={this.state.noteLinkTxt}

              bannerQuote={this.state.bannerQuote}
              bannerVerse={this.state.bannerVerse}

              zoomLink={this.state.zoomLink}
              meetingHour={this.state.meetingHour}

              nextMeetingDate={this.state.nextMeetingDate}
              nextMeetingSubject={this.state.nextMeetingSubject}
              nextMeetingQuestions={this.state.nextMeetingQuestions}
              nextDiscussedLinkText={this.state.nextDiscussedLinkText}
              nextDiscussedLink={this.state.nextDiscussedLink}
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
          <Footer footerUpdateDate={this.state.footerUpdateDate}/>
        </div>
      </HashRouter>
    );
  }
}