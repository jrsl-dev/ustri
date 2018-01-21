import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

// TODO get styled components to build with css custom properties
const Header = styled.header`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  background: #212121;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1;
  height: 4rem;
`;

const Navigation = styled.nav`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  padding: 0 1rem;

  & > *:first-child {
    margin-right: auto;
  }
`;

const activeClassName = "main-nav-active";

const Nav = styled(Link).attrs({
  activeClassName,
  exact: true
})`
  color: white;
  margin-right: 1em;
  text-decoration-skip: ink;

  &.${activeClassName} {
    font-weight: bold;
  }

  &:first-child {
    text-decoration: none;
  }

  &:last-child {
    margin-right: 0;
  }
`;

export default () => (
  <Header>
    <Navigation>
      <Nav to="/">Home</Nav>
      <Nav to="/training-information">Training Information</Nav>
      <Nav to="/locations">Locations</Nav>
      <Nav to="/history">History</Nav>
      <Nav to="/resources">Resources</Nav>
      <Nav to="/contact">Contact</Nav>
    </Navigation>
  </Header>
);
