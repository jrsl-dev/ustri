import React from "react";
import Masthead from "../components/Masthead/Content";
import History from "../paritals/History";

const Header = () => (
  <Masthead>
    <h2>History of Tamiya Ryu</h2>
  </Masthead>
);

export default () => (
  <div>
    <Header />
    <History />
  </div>
);
