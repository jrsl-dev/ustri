import React from "react";
import Kanji from "../../components/Kanji";
import Sections from "../../components/Sections";
import Introduction from "./Introduction";
import Schedule from "./Schedule";
import Contact from "./Contact";
import inazuma from "../../assets/inazuma-ken-kanji.svg";

export default ({ Section = Sections.White }) => (
  <Section>
    <Introduction />
    <Schedule />
    <Contact />
    <Kanji src={inazuma} />
  </Section>
);
