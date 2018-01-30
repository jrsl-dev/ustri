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

const Break = () => (
  <Sections.Highlight>
    <Mon src={mon} />
  </Sections.Highlight>
);

export default () => (
  <div>
    <Masthead>
      <h2>Locations</h2>
    </Masthead>
    {/* hmmm.... where does this go? <nav>page level nav</nav> */}
    <Sections.Content>
      <EastLansing />
    </Sections.Content>
    <Break />
    <Sections.Content>
      <Macomb />
    </Sections.Content>
    <Break />
    <Sections.Content>
      <h3>Brighton, Michigan - Study Group</h3>
      <Brighton />
    </Sections.Content>
    <Break />
    <Sections.Aside>
      <Instructors />
    </Sections.Aside>
  </div>
);
