import React from "react";
import styled from "styled-components";
import mon from "../assets/mon-dark.svg";

const Masthead = styled.div`
  display: grid;
  padding: 3em 0;
  grid-row-gap: 3em;

  & > * {
    justify-self: center;
  }
`;

const Title = styled.span`
  display: block;
  width: 16ch;
  padding-bottom: 0.35em;
  border-bottom: 2px solid;
`;

const SubTitle = styled.span`
  display: block;
  font-size: 75%;
`;

const Mon = styled.img`
  width: 100%;
  max-width: 10rem;
`;

const Heading = styled.h1`
  text-align: center;
`;

const Subheading = styled.div`
  font-size: 1.6rem;
  text-align: center;

  & > *:first-child {
    border-bottom: 1px solid currentColor;
    padding-bottom: 0.45em;
    margin-bottom: 0.25em;
  }
`;

const t = {
  "tamiya ryu iaijutsu": "米国田宮流居合術",
  "michigan honbu": "ミシガン本部",
  "southeast michigan shibu": "南東ミシガン支部",
  "gengo hojisha no kai": "元号保持者の会"
};

export default () => (
  <Masthead>
    <Mon src={mon} alt="" />
    <Heading>
      <div>
        <Title>United States Tamiya Ryu Iaijutsu</Title>
        <SubTitle>Gengo Hojisha no Kai</SubTitle>
      </div>
    </Heading>
    <Subheading>
      <div>{t["tamiya ryu iaijutsu"]}</div>
      <div>{t["gengo hojisha no kai"]}</div>
    </Subheading>
  </Masthead>
);
