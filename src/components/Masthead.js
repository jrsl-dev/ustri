import React from "react";
import styled from "styled-components";

const Title = styled.span`
  display: block;
  width: 16ch;
  padding-bottom: 0.15em;
  border-bottom: 2px solid;
`;

const SubTitle = styled.span`
  display: block;
  font-size: 75%;
`;
export default () => (
  <h1>
    <Title>United States Tamiya Ryu Iaijutsu</Title>
    <SubTitle>Gengo Hojisha no Kai</SubTitle>
  </h1>
);
