import React from "react";
import styled from "styled-components";
import kamon from "../../assets/mon.png";

const Masthead = styled.div`
  display: grid;
  padding: 3em 0;
  grid-row-gap: 3em;

  & > * {
    justify-self: center;
  }
`;

const Title = styled.div`
  display: block;
  max-width: 16ch;
  padding-bottom: 0.35em;
`;

const SubTitle = styled.div`
  font-size: 0.75em;
`;

const Mon = styled.img`
  width: 100%;
  max-width: 10rem;
  margin: 0;
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

const t = {
  "tamiya ryu iaijutsu": "米国田宮流居合術",
  "michigan honbu": "ミシガン本部",
  "southeast michigan shibu": "南東ミシガン支部",
  gennankai: "元楠会"
};

export default () => (
  <Masthead>
    <Mon src={kamon} alt="" />
    <Heading>
      <Title>United States Tamiya Ryu Iaijutsu</Title>
      <SubTitle>Gennankai</SubTitle>
    </Heading>
    <SubHeading>
      <div>{t["tamiya ryu iaijutsu"]}</div>
      <div>{t["gennankai"]}</div>
    </SubHeading>
  </Masthead>
);
