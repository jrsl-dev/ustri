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
  align-items: center;
  padding: 0 1rem;
`;

const Nav = styled(Link)`
  color: white;
`;

export default () => (
  <Header>
    <Navigation>
      <Nav to="/">Home</Nav>
    </Navigation>
  </Header>
);
