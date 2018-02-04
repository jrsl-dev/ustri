import React from "react";
import Masthead from "../../partials/Masthead/Content";
import Sections from "../../styled/Sections";
import Brighton from "../../partials/Brighton";

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
