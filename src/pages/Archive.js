import React from 'react';
import styled from 'styled-components';
import Card from "../partials/Card";

// Styles
const ArchiveContainer = styled.section`
  padding: 40px;
  margin: 40px 0;
  
  @media only screen and (min-width: 1080px) {
    padding: 40px;
  }
`;
const PageTitle = styled.h1`
  margin-bottom: 40px;
`;

export default function Archive(props) {

  return (
    <ArchiveContainer className="component">
      <PageTitle>Arhivă Studii - Video</PageTitle>
      <div>
        <Card
          archiveList={props.archiveList}
          handleArchiveButton={props.handleArchiveButton} />
      </div>
    </ArchiveContainer>
  );
}