import React from "react";
import styled from "styled-components";
import Sections from "../../components/styled/Sections";
import Media from "../../components/styled/Media";
import ki from "../../assets/ki-kanji.svg";
import ken from "../../assets/ken-kanji.svg";
import tai from "../../assets/tai-kanji.svg";

const Heading = Media.Heading.withComponent("h3");

const Ki = () => (
  <Media>
    <Media.Image src={ki} alt="ki" />
    <Heading>Ki</Heading>
    <p>
      Spirit. Tamiya Ryu trains the spirit and aims to create a harmonious
      character.
    </p>
  </Media>
);

const Ken = () => (
  <Media>
    <Media.Image src={ken} alt="ken" />
    <Heading>Ken</Heading>
    <p>
      Sword. The sword of Tamiya Ryu is one that gives life or katsujin no ken.
    </p>
  </Media>
);

const Tai = () => (
  <Media>
    <Media.Image src={tai} alt="tai" />
    <Heading>Tai</Heading>
    <p>
      Body. By harmonizing the spirit, sword, and body, the practice of Iaijutsu
      becomes dignified.
    </p>
  </Media>
);

const KiKenTai = Sections.Aside.extend`
  grid-column-gap: 2em;
  grid-row-gap: 4em;
  padding-top: 6rem;
  padding-bottom: 6rem;

  @media (min-width: 52rem) {
    grid-template-columns: 22ch 22ch 22ch;
  }
`;

export default () => (
  <KiKenTai>
    <Ki />
    <Ken />
    <Tai />
  </KiKenTai>
);
