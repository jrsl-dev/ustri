import React from "react";
import { Link } from "gatsby";
import styled from "react-emotion";
import { HeroNamePlate as NamePlate } from "../../components/NamePlate";

const Header = styled.header`
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  & > a {
    padding-top: 1em;
    margin: 0 0.5em;
  }
`;

const Wrapper = styled.div``;

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
