import React from 'react';
import styled from 'styled-components';

// Styles
const SearchContainer = styled.div`
 
  @media only screen and (min-width: 1080px) {
  width: 320px;
  }
`;
const SearchInput = styled.input`
 width: 100%;
 border: none;
 border-bottom: 1px solid #C9C9C9;
 outline: none;
 font-size: 16px;
 color: teal;
 
 &:focus {
  border-color: teal;
 }
 
  &::placeholder {
  font-style: italic;
  color: #C9C9C9;
}
 
 &:focus::placeholder {
  color: transparent;
}

  @media only screen and (min-width: 1080px) {
  }
`;

export default function Search(props) {

  return (
    <SearchContainer>
      <SearchInput
      placeholder="Caută, ex: grija"
      value={props.value}
      onChange={props.handleInput}
      />
    </SearchContainer>
  );
}