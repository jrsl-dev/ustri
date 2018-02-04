import React from "react";
import Sections from "../components/Sections";
import Masthead from "../partials/Masthead/Content";
import Person from "../partials/Person";
import Card from "../components/Card";

const Header = () => (
  <Masthead>
    <h2>Contact</h2>
  </Masthead>
);

const Contact = Card.extend`
  width: 100%;
  max-width: 38ch;
  margin-bottom: 2rem;
  justify-self: center;
`;

export default () => (
  <div>
    <Header />
    <Sections.Content>
      <h3>Michigan Honbu Dojo</h3>
      <Contact>
        <Person.Gennan showEmail />
      </Contact>
      <Contact>
        <Person.Gensui showEmail />
      </Contact>
      <Contact>
        <Person.Genka showEmail />
      </Contact>
    </Sections.Content>
    <Sections.Content>
      <h3>Southeast Michigan Branch Dojo</h3>
      <Contact>
        <Person.Genfu showEmail />
      </Contact>
      <Contact>
        <Person.Genzan showEmail />
      </Contact>
    </Sections.Content>
    <Sections.Content>
      <h3>Brighton Michigan Study Group</h3>
      <Contact>
        <Person.Gennetsu showEmail r />
      </Contact>
    </Sections.Content>
  </div>
);
