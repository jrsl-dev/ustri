import React from "react";
import Masthead from "../../partials/Masthead/Content";
import Sections from "../../components/Sections";
import Brighton from "../../paritals/Brighton";

export default () => (
  <div>
    <Masthead>
      <h2>Brighton Michigan Study Group</h2>
    </Masthead>
    <Sections.Content>
      <Brighton />
    </Sections.Content>
  </div>
);
