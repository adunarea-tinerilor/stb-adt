import React from 'react';
import styled from 'styled-components';
//Components
import Card from "../partials/Card";
import Search from "../partials/Search";
import Arrow from "../img/Arrow-Up.png"

// Styles
const ArchiveContainer = styled.section`
  padding: 20px;
  margin: 40px 0;
  
  @media only screen and (min-width: 1080px) {
    padding: 40px;
  }
`;
const PageTitle = styled.h1`
  margin: 0 0 40px;
`;
const PageHeading = styled.div`
   margin: 0 0 40px;

  @media only screen and (min-width: 1080px) {
    display: flex;
    justify-content: space-between;
  }
`;
const ScrollTop = styled.button`
  cursor: pointer;
  position: fixed;
  right: 20px;
  bottom: 20px;
  background: transparent;
  border: 0;
  outline: none;
  transition: all .3s linear;

  img {
    object-fit: cover;
    width: 30px;
  }
  
   @media only screen and (min-width: 1080px) {
    right: 40px;
    bottom: 40px;
    padding: 0;
    
    &:hover {
       bottom: 48px;
    }
   }
`;

export default function Archive(props) {

  return (
    <ArchiveContainer className="component">
      <PageHeading>
        <PageTitle >Arhivă Studii - Video</PageTitle>
        <Search value={props.value}
                handleInput={props.handleInput}
                handleClearSearch={props.handleClearSearch}/>
      </PageHeading>
      <div>
        {console.log(props.filteredList)}
        {props.filteredList.length === 0 &&
          <div>
            <h3>Nu am găsit rezultate pentru <i>"{props.value}"</i></h3>
            <h3>Încearcă următoarele:</h3>
            <p>⦁ Nu folosi diacritice.</p>
            <p>⦁ Verifică dacă ai scris corect termenii.</p>
            <p>⦁ Încearcă să folosești sinonime.</p>
          </div>}
        <Card
          filteredList={props.filteredList}
          handleArchiveButton={props.handleArchiveButton}/>
      </div>
      {props.showScroll === true && <ScrollTop onClick={props.scrollTop}><img src={Arrow} alt="Biblia deschisă" /></ScrollTop>}
    </ArchiveContainer>
  );
}