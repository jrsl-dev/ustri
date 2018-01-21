import React from "react";
import styled from "styled-components";
import Card from "../../components/Card";
import Sections from "../../components/Sections";
import Masthead from "../../components/Masthead";
import EastLansing from "../../paritals/EastLansing";
import Macomb from "../../paritals/Macomb";
import Instructors from "../../paritals/Instructors";

const Person = styled.div``;

const Header = () => (
  <header>
    <Masthead />
    {/* <nav>page level nav</nav> */}
    <h2>Locations</h2>
  </header>
);

const Mon = () => <img src="images/mon.svg" />;

export default () => (
  <div>
    <Header />
    <EastLansing />
    <Mon />
    <Macomb Section={Sections.Light} />
    <Instructors />
  </div>
);
