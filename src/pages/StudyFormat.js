import React from 'react';
import styled from 'styled-components';
import Image from "../img/8104.jpg";

export default function StudyFormat(props) {

  return (
    <div>
    {props.studyResource && <IntroContainer>
        <IntroCardContainer className="component">
          <p>Întrebări:</p>
          <ol>
            {props.nextMeetingQuestions.map((question, index) => {
              return <li key={index}><p>{question}</p></li>
            })}
          </ol>
        </IntroCardContainer>
        <IntroCardContainer className="component">
          <div className="card-wrapper">
            <div className="card-content">
              <div dangerouslySetInnerHTML={{__html: `${props.studyResource}`}}></div>
            </div>
          </div>
        </IntroCardContainer>

    </IntroContainer>}
    {!props.studyResource && <div>
      <IntroCardContainer className="component" style={{backgroundColor:"#eff2d5"}}>
        {/*<div dangerouslySetInnerHTML={{__html: `${props.noResourceMessage}`}}></div>*/}
        <br/>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center"}}>
          <h4 style={{marginBottom: "0"}}>Această pagină este în construcție.</h4>
          <p><small>Vei găsi aici resursele pentru studii.<br/>Te rugăm să revii mai târziu.</small></p>
          <img src={Image} alt="page under construction" style={{maxHeight: "450px", width:"100%", maxWidth: "450px"}}/>
          <small style={{fontSize: "7px"}}><a href="https://www.freepik.com/vectors/house">House vector created by macrovector - www.freepik.com</a></small>
        </div>

      </IntroCardContainer>
    </div>}
    </div>
  );
}

// Styles
const IntroContainer = styled.section`
  margin: 40px 0;
  
   ol > li:first-child {
    color: #016666;
    }
    
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
    
    & > div:last-child {
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
  
   @media only screen and (min-width: 1080px) {
    padding: 20px;
    margin: 0 0 40px;
  }
`;