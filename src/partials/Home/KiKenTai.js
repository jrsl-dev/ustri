import React from "react";
import styled from "styled-components";
import Sections from "../../components/styled/Sections";
import Media from "../../components/styled/Media";
import ki from "../../assets/ki-kanji.svg";
import ken from "../../assets/ken-kanji.svg";
import tai from "../../assets/tai-kanji.svg";

const Ki = {
  src: ki,
  alt: "ki",
  heading: "Ki",
  body:
    "Spirit. Tamiya Ryu trains the spirit and aims to create a harmonious character."
};

const Ken = {
  src: ken,
  alt: "ken",
  heading: "Ken",
  body:
    "Sword. The sword of Tamiya Ryu is one that gives life or katsujin no ken."
};

const Tai = {
  src: tai,
  alt: "tai",
  heading: "Tai",
  body:
    "Body. By harmonizing the spirit, sword, and body, the practice of Iaijutsu becomes dignified."
};

const KiKenTai = Sections.Aside.extend`
  grid-column-gap: 2em;
  grid-row-gap: 4em;
  padding-top: 6rem;
  padding-bottom: 6rem;

  @media (min-width: 52rem) {
    grid-template-columns: 22ch 22ch 22ch;
  }
`;

const Heading = Media.Heading.withComponent("h3");

const Kanji = ({ src, alt, heading, body }) => (
  <Media>
    <Media.Image src={src} alt={alt} />
    <Heading>{heading}</Heading>
    <p>{body}</p>
  </Media>
);

export default () => (
  <KiKenTai>
    <Kanji {...Ki} />
    <Kanji {...Ken} />
    <Kanji {...Tai} />
  </KiKenTai>
);
