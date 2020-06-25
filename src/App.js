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
      // announcement notes
      note: "Sâmbătă, 27 Iunie - adunare pentru copii. Tema: Luca 15:11-32 Pilda Fiului Risipitor, ",
      noteLinkTxt: "vezi ora",
      noteLink: "https://www.timeanddate.com/worldclock/fixedtime.html?msg=Adunare+pentru+Copii&iso=20200627T18&p1=49",
      // next meeting
      nextMeetingDate: "25 Iunie, Volumul 6",
      nextMeetingSubject: [
        "Cum trebuie conduse căminele Noilor Creaţii şi când şi cum trebuie folosită nuiaua dacă este necesar? Pag. 524 p. 1, 2",
        "Definiţi cuvântul ordine, care a fost numită \"prima lege a cerului\", şi arătaţi cum răsplăţile şi pedepsele sunt însoţitoarele necesare ale Legii Iubirii într-un cămin ideal. Pag. 525 p. 1, 2"
  ],

      archiveList: [
        //add last meeting details
        //always include  questionList: [], if no content leave it empty
        {
          subjectLabel: "Adunare de experiențe",
          date: "18.06.2020",
          questionList: [],
          videoSrc: "https://www.youtube.com/watch?v=Qni3WyGyUr4&feature=youtu.be"
        },
        {
          subjectLabel: "Întrebări discutate:",
          date: "11.06.2020",
          questionList: [
            "Cum trebuie să avem grijă de hrana și sănătatea copiilor noștri? Vol. 6 pag. 522 - 523 [ 23:44 ]"
          ],
          videoSrc: "https://m.youtube.com/watch?v=2Y8YjhPFXj4"
        },
        {
          subjectLabel: "Întrebări discutate:",
          date: "4.06.2020",
          questionList: [
            "Cum putem influența, educa, crește copii mai avantajos în condițiile imperfecte din prezent? [ 19:20 ]"
          ],
          refOpen: false,
          button: "Vezi Referința",
          referenceNote: "Vol. 6 pag. 521: \"În timp ce mintea Noii Creaturi înţelege speranţele făgăduinţele şi idealurile spirituale şi caută în mod cuvenit să le imprime asupra tuturor celor pe care Domnul Dumnezeul nostru îi va chema prin adevărul şi harul Său caută în mod special să dezvolte copii ai lui Dumnezeu totuşi dacă dintr-un motiv oarecare intră într-o legătură matrimonială şi consideră înţelept să procreeze o familie umană aceştia au mare avantaj în această privinţă comparativ cu bărbatul natural şi cu femeia naturală.\"",
          videoSrc: "https://www.youtube.com/watch?v=m_HWlMmS8EI&feature=emb_title"
        },
        {
          subjectLabel: "Întrebări discutate:",
          date: "28.05.2020",
          questionList: [
            "Program copii - poezii & cântări [ 10:32 ]",
            "Rolul reproducerii în viața omenirii și a Noii creații? - Vol. 6 pag. 520 par. 2 [ 1:09:54 ]",
            "Responsabilitatea noastră și a Domnului în creșterea urmașilor."
          ],
          videoSrc: "https://www.youtube.com/watch?v=Tna0fxadpNA&feature=emb_title"
        },
        {
          subjectLabel: "Întrebări discutate:",
          date: "21.05.2020",
          questionList: [
            "Decizia de a avea copii sau nu. [ 13:54 ]",
            "Câți copii să avem? [ 1:34:18 ]"
          ],
          videoSrc: "https://www.youtube.com/watch?v=gnwQ7HpVqR0&feature=emb_title"
        }
      ],

      // general info
      zoomLink: "https://us02web.zoom.us/j/9163857157?pwd=aUxkTlBDU1dsS3ZOSHVJV01PT0NpZz09",
      meetingHour: "https://www.timeanddate.com/worldclock/fixedtime.html?msg=%C3%8Entalnirea+Tinerilor&iso=20200625T20&p1=49",
      bannerQuote: "Caută să te înfăţişezi înaintea lui Dumnezeu ca un om încercat, ca un lucrător care n-are de ce să-i fie ruşine şi care împarte drept Cuvântul adevărului.",
      bannerVerse: "2 Timotei 2:15"
    };

    //bind this
    this.handleArchiveButton = this.handleArchiveButton.bind(this);
  }

  handleArchiveButton(index) {
    let list = this.state.archiveList
    list[index].refOpen = !list[index].refOpen;
    this.setState({
      list
    });
  }


  render() {
    return (
      <HashRouter basename="/adunarea-tinerilor">
        <div className="App">
          <Header/>
          <Route exact path="/" render={() =>
            <Home
              note={this.state.note}
              noteLink={this.state.noteLink}
              noteLinkTxt={this.state.noteLinkTxt}
              bannerQuote={this.state.bannerQuote}
              bannerVerse={this.state.bannerVerse}
              zoomLink={this.state.zoomLink}
              meetingHour={this.state.meetingHour}
              nextMeetingDate={this.state.nextMeetingDate}
              nextMeetingSubject={this.state.nextMeetingSubject}
            />}
          />
          <Route path="/arhiva" render={() =>
            <Archive
              archiveList={this.state.archiveList}
              handleArchiveButton={this.handleArchiveButton}
            />}
          />
          <Footer/>
        </div>
      </HashRouter>
    );
  }
}