import React from "react";
import styled from "styled-components";
import kamon from "../../assets/mon.png";

const Masthead = styled.header`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  align-items: center;

  @media (min-width: 455px) {
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

  @media (min-width: 455px) {
    grid-area: 1/1/2/2;
  }
`;

const Title = styled.div`
  margin-bottom: 1em;
  max-width: 16rem;
  text-align: center;

  @media (min-width: 455px) {
    grid-area: 1/2/2/3;
    text-align: initial;
  }
`;

const Heading = styled.h1`
  font-size: 1.75rem;
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 0.25em;
  justify-content: center;

  @media (min-width: 455px) {
    justify-content: initial;
  }
`;

const SubHeading = styled.div`
  margin-bottom: 0.75em;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`;

const PageTitle = styled.div`
  @media (min-width: 455px) {
    grid-area: 2/2/3/3;
  }
`;

export default ({ children }) => (
  <Masthead>
    <Mon>
      <img src={kamon} alt="" />
    </Mon>
    <Title>
      <Heading>
        <span>United States</span>
        &nbsp;
        <span>Tamiya Ryu Iaijutsu</span>
      </Heading>
      <SubHeading>
        <span>Gennankai</span>
      </SubHeading>
      <div>米国田宮流居合術</div>
      <div>元楠会</div>
    </Title>
    {children && <PageTitle>{children}</PageTitle>}
  </Masthead>
);
