import React from 'react';
import styled from 'styled-components';
import Image from "../img/5064489.png";

export default class StudyFormat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  };

  componentDidMount() {
    if(document.querySelector(".study-format ")){
      setTimeout(function(){
        const firstQ = document.querySelector("[data-id]");
        const firstS= document.querySelector(".section-container");
        firstQ.classList.add("active");
        firstS.classList.add("activeSection")
      }, 500);
    }
  }

  handleActiveSection = (el) => {
  const questions = document.querySelectorAll(".card-question p");
  let elLink = el.target;
  let dataID = elLink.getAttribute("data-id");
  const sections = document.querySelectorAll(".section-container");

    questions.forEach((quest) => {
      quest.classList.remove("active")
    });
    elLink.classList.add("active");

    sections.forEach((section) => {
      let sectionID = section.getAttribute("id");
      section.classList.remove("activeSection");
      if (dataID === sectionID) {
        section.classList.add("activeSection");
      }
    });
  };

  render() {
    const { studyResource, nextMeetingQuestions } = this.props;
    return (

      <div>
        {nextMeetingQuestions.length !== 0 && <div className="study-format">
          <IntroContainer>
            <IntroCardContainer className="component">
              <p>Întrebări:</p>
              <ol>
                {nextMeetingQuestions.map((question, index) => {
                  return <li className="card-question" key={index} onClick={this.handleActiveSection}>
                    <p data-id={`section-${index}`}>{question}</p></li>
                })}
              </ol>
            </IntroCardContainer>

            {studyResource.length !== 0 && studyResource.map((section, index) => {
              return <IntroCardContainer id={`section-${index}`} key={index} className="component section-container">
                <div className="card-wrapper">
                  <div className="card-content">
                    <div dangerouslySetInnerHTML={{__html: `${section}`}}></div>
                  </div>
                </div>
              </IntroCardContainer>
            })}
          </IntroContainer>
        </div>}

        {nextMeetingQuestions.length === 0 && <section>
          <h3>Încă nu este nimic aici.</h3>
          <div  style={{display: "flex", flexDirection: "column"}}>
            <NoStudyImg className="" src={Image} alt="Watercolor Painted Books"/>
            <a href='https://www.freepik.com/vectors/watercolor' style={{fontSize: "7px"}}>Watercolor vector created by pikisuperstar - www.freepik.com</a>
          </div>
        </section>}
      </div>
    );
  }

}

// Styles
const NoStudyImg = styled.img `
width: 100%;
max-width: 480px;
`;
const IntroContainer = styled.section`
  margin: 40px 0;
  
  .card-wrapper {
    height: 85vh;
    overflow: hidden;
    padding: 0 20px
  }
  
  .card-content {
    height: 85vh;
    overflow: auto;
  }

  
  .card-content::-webkit-scrollbar {
    width: 7px;
  }
  .card-content::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px #00808029;
  }
  
  .card-content::-webkit-scrollbar-thumb {
    background-color: teal;
  }

  
  @media only screen and (min-width: 1080px) {
    display: flex;
    justify-content: space-between;
    

    & > div:first-child {
      width: 42%;
      margin: 0 40px 0 0;
      align-self: flex-start;
    }
    
    & > div.section-container {
    width: 58%;
    }
  }
`;
const IntroCardContainer = styled.div`
  box-shadow: 0px 0px 10px 0px #C9C9C9;
  padding: 20px;
  margin-bottom: 40px;
  
  #iframe_wrapper {
  overflow: hidden;
  height: 600px;
  }
        
  .card-question:hover {
    cursor: pointer;     
    text-decoration: underline;
  }
           
   @media only screen and (min-width: 1080px) {
    padding: 20px;
    margin: 0 0 40px;
  }
`;