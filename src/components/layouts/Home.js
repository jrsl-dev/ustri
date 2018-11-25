import React from "react";
import { Link } from "gatsby";
import styled from "react-emotion";
import { HeroNamePlate as NamePlate } from "../../components/NamePlate";

const Wrapper = styled.div`
  padding: 0 0.5em;
`;

const container = `
  max-width: 58ch;
  margin: 0 auto;
`;

const Header = styled.header`
  ${container};
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

const Nav = styled.nav`
  ${container};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  & > a {
    padding-top: 1em;
    margin: 0 0.5em;
  }
`;

const Main = styled.main`
  ${container};
  margin-bottom: 5em;

  & > h2:not(:first-of-type) {
    margin-top: 5em;
  }
`;

const Footer = styled.footer`
  ${container};
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
    <Footer>
      <ul>
        <li>
          Built with <a href="#">Gatsby</a>
        </li>
        <li>Hosted on Netilfy</li>
        <li>Content by Contentful</li>
        <li>Written using Code</li>
        <li>Stored at Github</li>
      </ul>
    </Footer>
  </Wrapper>
);
