import React from "react";
import Masthead from "../../components/Masthead/Content";
import Sections from "../../components/Sections";
import Macomb from "../../paritals/Macomb";

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
