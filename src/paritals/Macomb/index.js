import React from "react";
import styled from "styled-components";
import Sections from "../../components/Sections";
import Introduction from "./Introduction";
import Schedule from "./Schedule";
import Contact from "./Contact";
import inazuma from "../../assets/inazuma-ken-kanji.svg";

const Kanji = styled.img`
  max-width: 15rem;
  justify-self: center;
  margin: 4rem 0;
`;

export default ({ Section = Sections.White }) => (
  <Section>
    <Introduction />
    <Schedule />
    <Kanji src={inazuma} />
    <Contact />
  </Section>
);
