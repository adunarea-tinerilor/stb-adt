import React from 'react';
import styled from 'styled-components';

//Media
import VideoImg from '../img/videoImg.jpg';

// Styles
const CardContainer = styled.div`
  box-shadow: 0px 0px 7px 0px #C9C9C9;
  padding: 24px;
  margin: 40px 0;
   
  @media only screen and (min-width: 1080px) {
    width: 100%;
    margin: 0 0 40px;
  }
`;

const CardWrapper = styled.div`   
  @media only screen and (min-width: 1080px) {
    display: flex;
    align-items: center;
  }
`;
const CardDate = styled.div`
   display: flex;
   justify-content: space-between;
   
   h3 {
   
   &:first-child {
      padding-right: 10px;
      width: 70%;
      word-break: break-word;
     }
   }
`;
const VideoContainer = styled.div`
    position: relative;
    margin-top: auto;
    text-align: center;
    
    @media only screen and (min-width: 1080px) {
      margin: 0 40px 0 0;
      order: -1;
   }
`;
const VideoImage = styled.img`
  width: 100%;
  height: 100%;
  max-width: 680px;
  max-height: 500px;
  margin: 40px auto 0;
  
  @media only screen and (min-width: 1080px) {
    margin: 0;
    max-width: none;
    max-height: none;
    width: 250px;
}
`;
const VideoBtn = styled.span`
  top: 50%;
  left: 51%;
  width: 0;
  height: 0;
  z-index: 2;
  position: absolute;
  transform: translate(-50%, -50%);
  transition: all .2s linear;
  border-top: 20px solid transparent;
  border-left: 45px solid white;
  border-bottom: 20px solid transparent;
 
  &:hover {
     border-left: 45px solid teal;
  }
  
  @media only screen and (min-width: 1080px) {
    border-top: 25px solid transparent;
    border-left: 50px solid white;
    border-bottom: 25px solid transparent;
     
    &:hover {
      border-left: 50px solid teal;
    }
  }
`;
const CardHolder = styled.section`
  @media only screen and (min-width: 1080px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;
const RefContainer = styled.div`
    position: relative;
    margin-top: 20px;
`;
const RefButton = styled.button`
    color: teal;
    background: white;
    border: 1px solid teal;
    cursor: pointer;
    outline: 0;
    padding: 7px 20px;
    min-width: 132px;   
    font-size: 14px;
    height: 37px;
`;
const SmallText = styled.p`
font-size: 16px;
`;
const TextContainer = styled.div`
  @media only screen and (min-width: 1080px) {
    width: 100%;
  }
`;

export default function Card(props) {

  return (
    <CardHolder>
      {props.filteredList && props.filteredList.map((meeting, index) => {
        return (
          <CardContainer key={index}>
            <CardWrapper>
              <TextContainer>
                <CardDate>
                  <h3>{meeting.subjectLabel}</h3>
                  <h3>{meeting.date}</h3>
                </CardDate>
                <ul>
                  {meeting.questionList.map((meeting, index) => {
                    return <li key={index}>{meeting}</li>
                  })}
                </ul>
                {
                  meeting.button &&
                  <RefContainer>
                    <RefButton
                      onClick={() => props.handleArchiveButton(index)}>{`${meeting.refOpen === true ? "Închide" : meeting.button}`}</RefButton>
                    <div className={`tooltip ${meeting.refOpen === true ? "is-active" : ""}`}>
                      <SmallText>{meeting.referenceNote}</SmallText>
                    </div>
                  </RefContainer>
                }
              </TextContainer>
              <VideoContainer>
                <VideoImage src={VideoImg} alt="Open Bible"/>
                <a href={meeting.videoSrc} rel="noopener noreferrer" target="_blank">
                  <VideoBtn></VideoBtn>
                </a>
              </VideoContainer>
            </CardWrapper>
          </CardContainer>
        )
      })}
    </CardHolder>
  );
}
