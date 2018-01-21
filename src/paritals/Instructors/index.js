import React from "react";
import Person from "../../components/Person";
import Sections from "../../components/Sections";

export default ({ Section = Sections.White }) => (
  <Section>
    <h2>Instructors</h2>
    <Person.Gennan>
      <p>Email: alexgennan@att.net</p>
    </Person.Gennan>
    <Person.Gensui>
      <p>Email: hufnagelt@gmail.com</p>
    </Person.Gensui>
    <Person.Genka>
      <p>Email: alexgennan@att.net</p>
    </Person.Genka>
    <Person.Genchi>
      <p>Email: alexgennan@att.net</p>
    </Person.Genchi>
    <Person.Genfu>
      <p>Email: spsier@gmail.com</p>
    </Person.Genfu>
    <Person.Genzan>
      <p>Email: genzan@ustamiyaryu.org</p>
    </Person.Genzan>
  </Section>
);
