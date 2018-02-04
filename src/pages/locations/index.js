import React from "react";
import styled from "styled-components";
import Card from "../../styled/Card";
import Mon from "../../styled/Kanji";
import Sections from "../../styled/Sections";
import Masthead from "../../partials/Masthead/Content";
import EastLansing from "../../partials/EastLansing";
import Macomb from "../../partials/Macomb";
import Brighton from "../../partials/Brighton";
import Instructors from "../../partials/Instructors";
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
