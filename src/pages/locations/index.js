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
  </header>
);

const Mon = () => <img src="images/mon.svg" />;

export default () => (
  <div>
    <Header />
    <nav>page level nav</nav>
    <EastLansing />
    <Mon />
    <Macomb Section={Sections.Light} />
    <Instructors />
  </div>
);
