import React from 'react';
import styled from 'styled-components';
import Card from "../partials/Card";
import Search from "../partials/Search";

// Styles
const ArchiveContainer = styled.section`
  padding: 24px;
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

export default function Archive(props) {

  return (
    <ArchiveContainer className="component">
      <PageHeading>
        <PageTitle>Arhivă Studii - Video</PageTitle>
        <Search value={props.value}
                handleInput={props.handleInput}/>
      </PageHeading>
      <div>
        <Card
          filteredList={props.filteredList}
          handleArchiveButton={props.handleArchiveButton}/>
      </div>
    </ArchiveContainer>
  );
}