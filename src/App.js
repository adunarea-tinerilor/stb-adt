import React from 'react';
import {HashRouter, Route} from "react-router-dom";
//components
import Header from "./global-components/Header";
import Footer from "./global-components/Footer";
import Home from "./pages/Home";
import Archive from "./pages/Archive";


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // general
      footerUpdateDate: "12.07.2020",
      meetingHour: "https://www.timeanddate.com/worldclock/fixedtime.html?msg=%C3%8Ent%C3%A2lnirea+Tinerilor&iso=20200716T10&p1=202",


      // next meeting
      nextMeetingDate: "Joi, 16 Iulie",
      nextDiscussedTitle: "Volumul 6, Obligațiile Părintești ale Noii Creații",
      nextDiscussedLink: "https://adevarprezent.org/obligatiile-parintesti-ale-noii-creatii/",
      nextMeetingSubject: [
        "Care element ar trebui să caracterizeze în principal atmosfera unui cămin, oricât de sărac ar fi? Pag. 529 p.1",
        "Ce se poate aştepta de la un copil educat în mod potrivit în ceea ce priveşte consacrarea faţă de Domnul? Pag. 529 p.2",
        "Cum se manifestă în părinţi şi copii influenţa rea a unui cămin în care egoismul este legea? Pag. 530 p.1, 2"
      ],


      // announcement notes
      // note: "Adunare pentru Copii & Tineri - Sâmbătă, 11 Iulie - ",
      // noteLinkTxt: "vezi ora",
      // noteLink: "https://www.timeanddate.com/worldclock/fixedtime.html?msg=Adunare+pentru+Copii&iso=20200711T18&p1=49",

      // Adunare Copii INFO
      // childrenMeeting : [
      //   {
      //     title: "",
      //     subject: [ "" ]
      //   }
      // ],

      // archive list
      //add last meeting details
      //always include  questionList: [], if no content leave it empty
      // {
      //   subjectLabel: "Întrebări discutate:",
      //     date: "date.month.year",
      //   questionList: [
      //   "Question  [ start time ]"
      // ],
      //   refOpen: false,
      //   button: "Vezi Referința",
      //   referenceNote: "Reference text",
      //   videoSrc: "Video Link"
      // }

      archiveList: [
        {
          date: "09.07.2020",
          subjectLabel: "Întrebări discutate:",
          questionList: [
           "[ 28:04 ] Cum să discute părinţii creştini cu copiii lor şi să-i ajute să înţeleagă cerinţele divine şi necesitatea pentru disciplină? (Vol. 6 pag. 526 p. 2)",
           "[ 1:08:39 ] Cât de devreme poate un copil să aprecieze principiile dreptăţii şi când trebuie să înceapă un părinte clădirea caracterului în copil? (Vol. 6 pag. 527 p. 1)",
           "[ 1:43:50 ] Care este lucrul atotimportant să ni-l amintim în educarea unui copil? (Vol. 6 pag. 528 p. 1)",
           "[ 1:59:50 ] Care va fi pierderea precum şi experienţa amară a părinţilor care nu reuşesc să-şi educe copiii în mod potrivit? (Vol. 6 pag. 528 p. 2)"],
          videoSrc: "https://www.youtube.com/watch?v=56H5N9KfpXo"
        },
        {
          date: "02.07.2020",
          subjectLabel: "Întrebări discutate:",
          questionList: ["[ 23:22 ] Definiţi cuvântul ordine, care a fost numită \"prima lege a cerului\", şi arătaţi cum răsplăţile şi pedepsele sunt însoţitoarele necesare ale Legii Iubirii într-un cămin ideal. (Vol. 6 pag. 525 p. 1,2)",
            "[ 1:47:00 ] Cum să aibă grijă părinţii atunci când corectează pe copii prin cuvânt sau faptă? (Vol. 6 pag. 526 p. 1)"],
          videoSrc: "https://www.youtube.com/watch?v=Sela3kKs8ng"
        },
        {
          date: "25.06.2020",
          subjectLabel: "Întrebări discutate:",
          questionList: ["[ 18:52 ] Program copii - poezii & cântări",
            "[ 1:17:03 ] Cum trebuie conduse căminele Noilor Creaţii şi când şi cum trebuie folosită nuiaua dacă este necesar? (Vol. 6 pag. 524 p. 1,2)"],
          videoSrc: "https://www.youtube.com/watch?v=Xtt-TKpBGkc"
        },
        {
          date: "18.06.2020",
          subjectLabel: "Discuții",
          questionList: ["Adunare de experiențe"],
          videoSrc: "https://www.youtube.com/watch?v=Qni3WyGyUr4&feature=youtu.be"
        },
        {
          subjectLabel: "Întrebări discutate:",
          date: "11.06.2020",
          questionList: ["[ 23:44 ] Cum trebuie să avem grijă de hrana și sănătatea copiilor noștri? (Vol. 6 pag. 522 - 523)"],
          videoSrc: "https://m.youtube.com/watch?v=2Y8YjhPFXj4"
        },
        {
          subjectLabel: "Întrebări discutate:",
          date: "4.06.2020",
          questionList: ["[ 19:20 ] Cum putem influența, educa, crește copii mai avantajos în condițiile imperfecte din prezent?"],
          videoSrc: "https://www.youtube.com/watch?v=m_HWlMmS8EI&feature=emb_title"
        },
        {
          subjectLabel: "Întrebări discutate:",
          date: "28.05.2020",
          questionList: ["[ 10:32 ] Program copii - poezii & cântări",
            "[ 1:09:54 ] Rolul reproducerii în viața omenirii și a Noii creații? (Vol. 6 pag. 520 par. 2)",
            "Responsabilitatea noastră și a Domnului în creșterea urmașilor."],
          videoSrc: "https://www.youtube.com/watch?v=Tna0fxadpNA&feature=emb_title"
        },
        {
          subjectLabel: "Întrebări discutate:",
          date: "21.05.2020",
          questionList: ["[ 13:54 ] Decizia de a avea copii sau nu.",
            "[ 1:34:18 ] Câți copii să avem?"],
          videoSrc: "https://www.youtube.com/watch?v=gnwQ7HpVqR0&feature=emb_title"
        }
      ],
      filteredList: [],

      // general info
      zoomLink: "https://us02web.zoom.us/j/88287573616?pwd=WGtCUjdEZWFmb1ZPNkZLcHpvMHBNdz09",
      // zoomLink: "https://us02web.zoom.us/j/9163857157?pwd=aUxkTlBDU1dsS3ZOSHVJV01PT0NpZz09",
      bannerQuote: "Caută să te înfăţişezi înaintea lui Dumnezeu ca un om încercat, ca un lucrător care n-are de ce să-i fie ruşine şi care împarte drept Cuvântul adevărului.",
      bannerVerse: "2 Timotei 2:15",
      value: ""
    };
  }

  componentDidMount() {
    this.setState({
      filteredList: this.state.archiveList
    })
  }

  // Toggle Reference button
  handleArchiveButton = index => {
    let list = this.state.archiveList
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
    console.log("test")
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
              nextDiscussedTitle={this.state.nextDiscussedTitle}
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
            />}
          />
          <Footer footerUpdateDate={this.state.footerUpdateDate}/>
        </div>
      </HashRouter>
    );
  }
}