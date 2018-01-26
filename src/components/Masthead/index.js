import React from "react";
import styled from "styled-components";
import mon from "../assets/mon-dark.svg";
import background from "../assets/paper_fibers.png";

const Masthead = styled.div`
  display: grid;
  padding: 3em 0;
  grid-row-gap: 3em;
  background: url(${background});
  /* only have the background for the full masthead, start all content pages with a white section. 
  Maybe, white = regular content, light = aside-ish, dark = important/hightlights 
  Maybe a rule should be no white sections can touch, have to be either an aside or some dark highlight
  before starting a new content section? */

  & > * {
    justify-self: center;
  }
`;

const Title = styled.div`
  display: block;
  width: 16ch;
  padding-bottom: 0.35em;
`;

const SubTitle = styled.div`
  font-size: 0.75em;
`;

const Mon = styled.img`
  width: 100%;
  max-width: 10rem;
`;

const Heading = styled.h1`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubHeading = styled.div`
  font-size: 1.6rem;
  text-align: center;

  & > *:first-child {
    padding-bottom: 0.5em;
  }
`;

const PageHeading = styled.div`
  grid-area: 3/2/4/3;
`;

const t = {
  "tamiya ryu iaijutsu": "米国田宮流居合術",
  "michigan honbu": "ミシガン本部",
  "southeast michigan shibu": "南東ミシガン支部",
  "gengo hojisha no kai": "元号保持者の会"
};

export default ({ children }) => (
  <Masthead>
    <Mon src={mon} alt="" />
    <Heading>
      <Title>United States Tamiya Ryu Iaijutsu</Title>
      <SubTitle>Gengo Hojisha no Kai</SubTitle>
    </Heading>
    <SubHeading>
      <div>{t["tamiya ryu iaijutsu"]}</div>
      <div>{t["gengo hojisha no kai"]}</div>
    </SubHeading>
    {children}
  </Masthead>
);
