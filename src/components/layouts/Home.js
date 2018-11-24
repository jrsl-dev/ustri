import React from "react";
import { Link } from "gatsby";
import styled from "react-emotion";
import { HeroNamePlate as NamePlate } from "../../components/NamePlate";

const Header = styled("header")`
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

const Nav = styled("nav")`
  display: flex;

  & > *:not(:first-child) {
    margin-left: 1em;
  }

  & > *:first-child {
    margin-right: auto;
  }
`;

const Wrapper = styled("div")`
  display: grid;
  grid-template-columns: minmax(1.2rem, 1fr) minmax(auto, 57ch) minmax(
      1.2rem,
      1fr
    );

  & > * {
    grid-column: 2;
  }
`;

const Main = styled.main`
  margin-bottom: 5em;

  & > h2:not(:first-of-type) {
    margin-top: 5em;
  }
`;

export default ({ children }) => (
  <Wrapper>
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/training">Training</Link>
      <Link to="/locations">Locations</Link>
      <Link to="/history">History</Link>
      <Link to="/articles">Articles</Link>
    </Nav>
    <Header>
      <NamePlate />
    </Header>
    <Main>{children}</Main>
    <footer>
      <ul>
        <li>
          Built with <a href="#">Gatsby</a>
        </li>
        <li>Hosted on Netilfy</li>
        <li>Content by Contentful</li>
        <li>Written using Code</li>
        <li>Stored at Github</li>
      </ul>
    </footer>
  </Wrapper>
);
