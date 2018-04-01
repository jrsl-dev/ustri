import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import withSizes from "react-sizes";

// TODO This isn't really a "component", I don't think...
// TODO get styled components to build with css custom properties
const Header = styled.header`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  background: #212121;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1;
  bottom: 0;

  @media (min-width: 665px) {
    bottom: auto;
    top: 0;
  }
`;

const Navigation = styled.nav`
  display: flex;
  height: 100%;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0.5em 0;

  @media (min-width: 665px) {
    justify-content: flex-end;
    padding: 1em 0;

    & > *:first-child {
      margin-right: auto;
    }
  }
`;

const activeClassName = "main-nav-active";

const Nav = styled(Link).attrs({
  activeClassName,
  exact: true
})`
  color: white;
  margin: 0.25em 0.25em;
  padding: 0.5em;
  text-decoration-skip: ink;

  &.${activeClassName} {
    font-weight: bold;
    text-decoration: none;
  }
`;

const More = styled.button`
  background: transparent;
  border: 0;
  padding: 0;
  margin: 0;
  color: white;
  text-decoration: underline;
  margin: 0.25em 0.25em;
  padding: 0.5em;
  text-decoration-skip: ink;
  cursor: pointer;

  &:after {
    content: " \u25B4";
  }
`;

const Less = More.extend`
  &:after {
    content: " \u25BE";
  }
`;

const MoreNav = styled.div`
  display: flex;
  flex-basis: 100%;
  justify-content: center;
`;

class NavgiationContainer extends React.Component {
  constructor() {
    super();
    this.state = { expanded: false };
  }

  toggle = () => this.setState(prev => ({ expanded: !prev.expanded }));

  render() {
    return (
      <Header>
        {this.props.expandedNav ? (
          <Navigation>
            <Nav to="/">Home</Nav>
            <Nav to="/training-information">Training Information</Nav>
            <Nav to="/locations">Locations</Nav>
            <Nav to="/history">History</Nav>
            <Nav to="/resources">Resources</Nav>
            <Nav to="/contact">Contact</Nav>
          </Navigation>
        ) : (
          <Navigation>
            <Nav to="/">Home</Nav>
            <Nav to="/training-information">Info</Nav>
            <Nav to="/locations">Locations</Nav>
            {this.state.expanded ? (
              <Less onClick={this.toggle}>Less</Less>
            ) : (
              <More onClick={this.toggle}>More</More>
            )}
            {this.state.expanded && (
              <MoreNav>
                <Nav to="/history">History</Nav>
                <Nav to="/resources">Resources</Nav>
                <Nav to="/contact">Contact</Nav>
              </MoreNav>
            )}
          </Navigation>
        )}
      </Header>
    );
  }
}

const mapSizesToProps = ({ width }) => ({
  expandedNav: width >= 665
});

export default withSizes(mapSizesToProps)(NavgiationContainer);
