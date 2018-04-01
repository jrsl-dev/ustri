import React from "react";
import styled from "styled-components";
import mon from "../../assets/mon-dark.svg";

const Masthead = styled.header`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  align-items: center;

  @media (min-width: 445px) {
    display: grid;
    grid-template-columns: 7rem 1fr;
    grid-column-gap: 2em;
    margin: 0 auto;
    max-width: 93ch;
  }
`;

const Mon = styled.div`
  width: 100%;
  max-width: 7em;

  @media (min-width: 445px) {
    grid-area: 1/1/2/2;
  }
`;

const Title = styled.div`
  margin-bottom: 1em;
  max-width: 16rem;

  @media (min-width: 445px) {
    grid-area: 1/2/2/3;
  }
`;

const Heading = styled.h1`
  font-size: 1.75rem;
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 0.25em;
`;

const SubHeading = styled.div`
  margin-bottom: 0.75em;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`;

const PageTitle = styled.div`
  @media (min-width: 445px) {
    grid-area: 2/2/3/3;
  }
`;

export default ({ children }) => (
  <Masthead>
    <Mon>
      <img src={mon} alt="" />
    </Mon>
    <Title>
      <Heading>
        <span>United States</span>
        &nbsp;
        <span>Tamiya Ryu Iaijutsu</span>
      </Heading>
      <SubHeading>
        <span>Gengo Hojisha no Kai</span>
      </SubHeading>
      <div>米国田宮流居合術</div>
      <div>元号保持者の会</div>
    </Title>
    {children && <PageTitle>{children}</PageTitle>}
  </Masthead>
);
