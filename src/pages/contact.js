import React from "react";
import Sections from "../components/Sections";
import Masthead from "../components/Masthead";
import Person from "../components/Person";

const Header = () => (
  <header>
    <Masthead>
      <h2>Contact</h2>
    </Masthead>
  </header>
);

export default () => (
  <div>
    <Header />
    <Sections.White>
      <h3>Michigan Honbu Dojo</h3>
      <Person.Gennan showEmail />
      <Person.Gensui showEmail />
      <Person.Genka showEmail />
    </Sections.White>
    <Sections.White>
      <h3>Southeast Michigan Branch Dojo</h3>
      <Person.Genfu showEmail />
      <Person.Genzan showEmail />
    </Sections.White>
    <Sections.White>
      <h3>Brighton Michigan Study Group</h3>
      <Person.Gennetsu showEmail r />
    </Sections.White>
  </div>
);
