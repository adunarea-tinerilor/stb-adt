import React from 'react';
import styled from 'styled-components';

export default function StudyFormat(props) {

  return (
    <IntroContainer>
        <IntroCardContainer className="component">
          <p>Întrebări:</p>
          <ol>
           {props.nextMeetingQuestions.map((question, index) => {
            return <li key={index}><p>{question}</p></li>
          })}
          </ol>
        </IntroCardContainer>
      <IntroCardContainer className="component">
        <div id="iframe_wrapper">
          <iframe src={props.nextDiscussedLink} name="htdb" width="100%" height="650" frameborder="0"></iframe>
        </div>
      </IntroCardContainer>
    </IntroContainer>
  );
}

// Styles
const IntroContainer = styled.section`
  margin: 40px 0;

   ol > li:first-child {
    color: #016666;
    }
  
  @media only screen and (min-width: 1080px) {
    display: flex;
    justify-content: space-between;
    & > div {
      width: 50%;
    }
    
    & > div:first-child {
      margin: 0 40px 0 0;
      align-self: flex-start;
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
  
  iframe {
   height: 400px; /* new height (400 * (1/0.8) ) */
   width: 67%; /* new width (100 * (1/0.8) )*/
   transform: scale(1.5); 
   transform-origin: 0 0;
  }
    
   @media only screen and (min-width: 1080px) {
    padding: 20px;
    margin: 0 0 40px;
    
    #iframe_wrapper {
      height: 730px;
    }
    
    iframe {
     height: 490px;
    }
  }
`;