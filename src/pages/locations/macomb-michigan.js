import React from "react";
import Masthead from "../../components/Masthead/Content";
import Sections from "../../styled/Sections";
import Macomb from "../../partials/Macomb";

export default () => (
  <div>
    <Masthead>
      <h2>Southeast Michigan Branch Dojo</h2>
    </Masthead>
    <Sections.Content>
      <Macomb />
    </Sections.Content>
  </div>
);
