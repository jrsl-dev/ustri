import React from "react";
import styled from "styled-components";
import Card from "../../components/Card";
import Mon from "../../components/Kanji";
import Sections from "../../components/Sections";
import Masthead from "../../components/Masthead/Content";
import EastLansing from "../../paritals/EastLansing";
import Macomb from "../../paritals/Macomb";
import Brighton from "../../paritals/Brighton";
import Instructors from "../../paritals/Instructors";
import mon from "../../assets/mon.svg";

const Header = () => (
  <Masthead>
    <h2>Locations</h2>
  </Masthead>
);

const MonSection = () => (
  <Sections.Dark>
    <Mon src={mon} />
  </Sections.Dark>
);

export default () => (
  <div>
    <Header />
    {/* hmmm.... where does this go? <nav>page level nav</nav> */}
    <EastLansing />
    <MonSection />
    <Macomb Section={Sections.Light} />
    <Sections.White>
      <h3>Brighton, Michigan - Study Group</h3>
      <Brighton />
    </Sections.White>
    <Instructors />
  </div>
);
