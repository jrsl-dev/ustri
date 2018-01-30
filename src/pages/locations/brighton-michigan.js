import React from "react";
import Masthead from "../../components/Masthead/Content";
import Sections from "../../components/Sections";
import Brighton from "../../paritals/Brighton";

export default () => (
  <div>
    <Masthead>
      <h2>Brighton Michigan Study Group</h2>
    </Masthead>
    <Sections.White>
      <Brighton />
    </Sections.White>
  </div>
);
