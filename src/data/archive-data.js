// ARCHIVE LIST
// Reference Button Use:
// {
//   refOpen: false,
//   button: "Vezi Referința",
//   referenceNote: "Reference content....",
// }

const ArchiveData = [
  {
    date: "10.09.2020",
    subjectLabel: "Întrebări discutate:",
    questionList: [
      "[ 32:35 ] Cum trebuie privită educaţia unui copil în special în ceea ce priveşte urmarea unui colegiu? Vol. pag. 537 p. 1 și pag. 538 p. 1",
      "[ 1:29:49 ] Ce fel de educaţie trebuie privită ca mult superioară în orice privinţă faţă de cea obţinută în şcolile acestei lumi? Vol. pag. 538 p. 2",
      "[ 2:01:37 ] Care ar fi o educaţie potrivită în privinţa unei pregătiri ocupaţionale rezonabile? Şi de ce este aceasta preferabilă faţă de un curs la colegiu? Vol. pag. 539 p. 1"
    ],
    videoSrc: "https://www.youtube.com/watch?v=22InSjsacIs&ab_channel=IgorGutu"
  },
  {
    date: "03.09.2020",
    subjectLabel: "Întrebări discutate:",
    questionList: [
      "[ 28:09 ] În cazul în care copiii nu au fost educaţi în mod potrivit când erau mai mici, ce încurajare şi sugestii pot fi oferite părinţilor? Vol. pag. 534 p.1 până la pag. 535 p. 2",
      "[ 59:01 ] Care două principii în special, ar trebui să ghideze pe părinţi în educarea copiilor lor? Vol. pag. 536 p. 1",
      "Cum să fie recunoscute şi luate în considerare de către părinte drepturile unui copil ajuns la maturitate? Vol. pag. 536 p. 2"
    ],
    videoSrc: "https://www.youtube.com/watch?v=pX8dUCXKOpE&ab_channel=IgorGutu",
  },
  {
    date: "13.08.2020",
    subjectLabel: "Întrebări discutate:",
    questionList: [
      "[ 34:06 ] În cazul de mai înainte, asupra cărui părinte cade răspunderea de cap al familiei, dacă soţia ar fi Nouă Creatură? Vol. pag. 532 p. 3",
      "[ 1:00:19 ] În cazul în care soţul ar fi Noua Creatură, care trebuie să fie calea sa în privinţa familiei? Vol. pag. 533 p. 1",
      "[ 1:50:23 ] În cazul în care copiii nu au fost educaţi în mod potrivit când erau mai mici, ce încurajare şi sugestii pot fi oferite părinţilor? Vol. pag. 534 p. 1 până la pag. 535 p. 2"
    ],
    videoSrc: "https://www.youtube.com/watch?v=lm0jt8_1K2Y&ab_channel=IgorGutu"
  },
  {
    date: "06.08.2020",
    subjectLabel: "Întrebări discutate:",
    questionList: [
      "[ 49:05 ] Explicaţi cum copiii născuţi din părinţi consacraţi sunt îndreptăţiţi? Vol. 6 pag. 531 p. 1",
      "[ 1:29:26 ] Care este pregătirea harului divin în ce-i priveşte pe copii, atunci când doar unul din părinţi este credincios? Vol. 6 pag. 532 p. 1, 2"
    ],
    videoSrc: "https://www.youtube.com/watch?v=LTk8YDA9Nmw",
  },
  {
    date: "30.07.2020",
    subjectLabel: "Întrebări discutate:",
    questionList: [
      "[ 26:28 ] Program cu copiii - versete, poezii & cântări",
      "[ 1:27:18 ] Cum se manifestă în părinţi şi copii influenţa rea a unui cămin în care egoismul este legea? Vol. 6 Pag. 530 p. 1, 2",
    ],
    videoSrc: "https://www.youtube.com/watch?v=YkBheDC9bB4",
  }, {
    date: "16.07.2020",
    subjectLabel: "Întrebări discutate:",
    questionList: [
      "[ 28:24 ] Care element ar trebui să caracterizeze în principal atmosfera unui cămin, oricât de sărac ar fi? (Vol. 6 pag. 529 p. 1)",
      "[ 1:29:25 ] Ce se poate aştepta de la un copil educat în mod potrivit în ceea ce priveşte consacrarea faţă de Domnul? (Vol. 6 pag. 529 p. 2)",
    ],
    videoSrc: "https://www.youtube.com/watch?v=YpzLM2dp3BE",
  },
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
    questionList: [
      "[ 18:52 ] Program cu copiii - versete, poezii & cântări",
      "[ 1:17:03 ] Cum trebuie conduse căminele Noilor Creaţii şi când şi cum trebuie folosită nuiaua dacă este necesar? (Vol. 6 pag. 524 p. 1,2)"],
    videoSrc: "https://www.youtube.com/watch?v=Xtt-TKpBGkc"
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
    questionList: ["[ 10:32 ] Program cu copiii - versete, poezii & cântări",
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
];

export default ArchiveData;