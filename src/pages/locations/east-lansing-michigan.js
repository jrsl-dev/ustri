import React from "react";
import Masthead from "../../components/Masthead/Content";
import Sections from "../../components/Sections";
import EastLansing from "../../paritals/EastLansing";

export default () => (
  <div>
    <Masthead>
      <h2>Michigan Honbu Dojo</h2>
    </Masthead>
    <Sections.Content>
      <EastLansing />
    </Sections.Content>
  </div>
);
