import React from "react";
import Sections from "../../components/Sections";
import Introduction from "./Introduction";
import Schedule from "./Schedule";
import Contact from "./Contact";

export default ({ Section = Sections.White }) => (
  <Section>
    <Introduction />
    <Schedule />
    <img src="images/inazuma-ken-kanji.svg" />
    <Contact />
  </Section>
);
