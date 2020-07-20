import React from 'react';
import styled from 'styled-components';
import Card from "../partials/Card";
import Search from "../partials/Search";

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
  background: teal;
  border: 0;
  color: white;
  outline: none;
  font-size: 25px;
`;

export default function Archive(props) {

  return (
    <ArchiveContainer className="component">
      <PageHeading>
        <PageTitle>Arhivă Studii - Video</PageTitle>
        <Search value={props.value}
                handleInput={props.handleInput}
                handleClearSearch={props.handleClearSearch}/>
      </PageHeading>
      <div>
        <Card
          filteredList={props.filteredList}
          handleArchiveButton={props.handleArchiveButton}/>
      </div>
      {props.showScroll === true && <ScrollTop onClick={props.scrollTop}>&#x1F809;</ScrollTop>}
    </ArchiveContainer>
  );
}