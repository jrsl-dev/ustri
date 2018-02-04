import React from "react";
import Masthead from "../../partials/Masthead/Content";
import Sections from "../../styled/Sections";
import EastLansing from "../../partials/EastLansing";

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
