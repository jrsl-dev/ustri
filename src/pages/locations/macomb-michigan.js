import React from "react";
import Masthead from "../../components/Masthead/Content";
import Macomb from "../../paritals/Macomb";

const Header = () => (
  <Masthead>
    <h2>Southeast Michigan Branch Dojo</h2>
  </Masthead>
);

export default () => (
  <div>
    <Header />
    <Macomb />
  </div>
);
