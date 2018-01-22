import React from "react";
import styled from "styled-components";
import Card from "../../components/Card";
import Mon from "../../components/Kanji";
import Sections from "../../components/Sections";
import Masthead from "../../components/Masthead";
import EastLansing from "../../paritals/EastLansing";
import Macomb from "../../paritals/Macomb";
import Instructors from "../../paritals/Instructors";
import mon from "../../assets/mon.svg";

const Header = () => (
  <header>
    <Masthead />
    {/* <nav>page level nav</nav> */}
    <h2>Locations</h2>
  </header>
);

const MonSection = () => (
  <Sections.Dark>
    <Mon src={mon} />
  </Sections.Dark>
);

export default () => (
  <div>
    <Header />
    <EastLansing />
    <MonSection />
    <Macomb Section={Sections.Light} />
    <Instructors />
  </div>
);
