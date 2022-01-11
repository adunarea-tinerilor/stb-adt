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
// import downloadFile from "../data/PROGRAM-Conventie12Decembrie2020.docx"

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // SITE UPDATE DATE:
      footerUpdateDate: "11 Ianuarie 2022",

      // Meeting TIME Link:
      // meetingHour: "https://www.timeanddate.com/worldclock/fixedtime.html?msg=%C3%8Ent%C3%A2lnirea+Tinerilor+de+Joi&iso=20210930T1030&p1=202&ah=2&am=30",

      // NEXT MEETING Details:
      // nextMeetingDate: "Joi, 30 Septembrie",

      // testimonyMeeting: "Adunare de Experiențe și Program Pentru Copii",
      nextMeetingSubject: "Discuții Studiu",
      nextDiscussedLink: "https://www.acsib.com/HTDB/Volume6/V6C15.htm#z0009529",
      nextDiscussedLinkText: "Volumul 6, cap. 15 - Vrăjmaşii şi Atacurile Împotriva Noii Creaţii",

      // nextMeetingAnnouncement: "<hr/><p>Întrebări adiționale:<br/><br/>" +
        // "1. Cum practicăm rugăciunea în familie soț-soție, în armonie cu cea individuala? Mi-ar placea să aud frați care au pus în practică, în armonie cele două.</p>",

      nextMeetingQuestionsStudyFormat: [
        "Care este lucrarea specială a Preoţimii Împărăteşti în timpul prezent? Pag. 608 p. 2, 3",
        "Citaţi dovezi Scripturale ale caracterului lui Satan. Pag. 609 până la pag. 611",
        "Ce dovadă Scripturală avem că Satan nu este numai vrăjmaşul Bisericii, ci şi al întregii omeniri? Pag. 611 p. 1",
        "Explicaţi cum opoziţia lui Satan faţă de Noua Creaţie diferă de cea a lumii şi a propriei noastre cărni? Pag. 611 p. 2",
        "Ce Scriptură declară că Satan a fost cel care a început revolta împotriva lui Dumnezeu şi i-a condus pe primii noştrii părinţi în păcat şi moarte? Pag. 612 p. 1 (primele două fraze) --- Daţi dovadă Scripturală că Satan a fost creat perfect şi drept. Pag. 612 p. 1 (ultima parte)",
        "Cum a creat Dumnezeu toate creaturile Sale inteligente astfel încât a fi perfect nu garantează a rămâne în perfecţiune? Pag. 612 p. 2",
        "Sunt între îngeri diferite ranguri şi poziţii? Şi cum au privit îngerii crearea omului? Pag. 613 p. 1",
        "Care a fost probabil gândul lui Satan în ceea ce-i priveşte pe primii noştrii părinţi? Pag. 613 p. 2; pag. 614 p. 1",
        "Cum a putut sugera Satan minţii Evei gândul de nedreptate din partea lui Iehova? Pag. 614 p. 2; pag. 615 p. 1",
        "Care a fost probabil dezamăgirea lui Satan văzând rezultatele înşelării lui? Şi de ce a fost responsabilitatea lui Adam mai mare decât a Evei? Pag. 615 p. 2",
        "Rezultatele primei minciuni a lui Satan l-au înclinat spre reformare? Pag. 616 p. 1",

        "Care a fost scopul suprem al tuturor eforturilor lui Satan? Pag. 616 p. 2",
        "Din moment ce Adevărul este mult mai rezonabil decât Eroarea, de ce nu a predominat, şi ce sistem religios a fost capodopera şi reprezentantul vrednic al lui Satan? Pag. 617 p. 1",
        "Arătaţi cum Isaia 14:12-17 se aplică la Satan şi la principalul său sistem reprezentativ? Pag. 618 p. 1, 2",
        "Care este asemănarea între Babilonul literal şi cel simbolic? Şi care va fi soarta lor precum şi soarta lui Satan? Pag. 619 p. 1",
        "A avut Satan ceva îngeri asociaţi la începutul rebeliunii sale? Dacă nu, cum şi când a primit el aderenţi din rândurile îngerilor sfinţi? Pag. 619 p. 2",
        "Cum au cooperat cu Satan aceşti îngeri căzuţi în înşelarea şi degradarea lumii? Pag. 620 p. 1",
        "Ce implică afirmaţia că omul este un liber arbitru moral”? Şi de ce este posibil pentru demoni să controleze în mod absolut fiinţele umane ca medii? Pag. 620 p. 2",
        "Care sunt metodele generale şi scopurile acestor îngeri căzuţi? Amintiţi opt învăţături eronate pe care ei le-au răspândit cu succes în lume. Pag. 621 p. 1 până la pag. 623 p. 2",
        "Din moment ce spiritismul nu a avut succes să înşele majoritatea creştinilor, care alte două înşelări mai subtile le-a introdus recent Satan pentru a-i captura? Pag. 623 p. 3; pag. 624 p. 1",
        "De ce Satan şi-a întors recent atenţia spre vindecarea celor bolnavi? Şi ce înseamnă aceasta? Pag. 624 p. 2",
        "Care a fost efectul degradant al acestor lucrări ale diavolului asupra păgânilor? Pag. 624 p. 3",
        "Care au fost experienţele Domnului şi ale apostolilor cu aceşti îngeri căzuţi? Pag. 625 p. 1, 2",
        "Înţelegând deci influenţa mare şi demoralizatoare a acestor spirite rele asupra omenirii, de ce le permite Dumnezeu să-şi exercite puterile lor rele? Şi, în consecinţă, care sunt cele trei lecţii mari pe care le va fi învăţat omenirea la sfârşitul Veacului Milenar? Pag. 626, 627",

        // new
        "Între timp, care au fost rezultatele be­nefice ale permisiunii răului? Pag. 627 p. 1; Pag. 628 p. 1",
        "Între oameni, cine sunt cei mai mari împotrivitori ai lui Dumnezeu şi ai Împăcării, din punctul de vedere popular şi din punctul de vedere divin? Pag. 629 p. 1",
        "Care este speranţa noastră pentru unii dintre cei mai violenţi dar ignoranţi împotrivitori ai Adevărului? Şi care este poziţia mai gravă ocupată de împotrivitorii cu bună ştiinţă ai Adevărului din prezent, şi care ar trebui să fie atitudinea noastră faţă de aceştia? Pag. 629 p. 2",
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
      bereanQuestions: [],
    };
  }

  componentDidMount() {
    this.setState({
      archiveList: ArchiveData,
      filteredList: ArchiveData,
      childrenMeetingData: ChildrenMeetingData,
      studyResource: StudyResource,
      nextMeetingQuestions: this.state.nextMeetingQuestionsStudyFormat,
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
    console.log()
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
