import React from "react";
import styled from "styled-components";
import Sections from "../../components/Sections";
import ki from "../../assets/ki-kanji.svg";
import ken from "../../assets/ken-kanji.svg";
import tai from "../../assets/tai-kanji.svg";

const Media = styled.div`
  display: grid;
  grid-template-columns: 22ch;
  grid-template-rows: auto auto 1fr;
  justify-content: center;

  > img {
    justify-self: center;
  }

  > h3 {
    justify-self: center;
  }
`;

const Ki = () => (
  <Media>
    <img src={ki} alt="ki" />
    <h3>Ki</h3>
    <p>
      Spirit. Tamiya Ryu trains the spirit and aims to create a harmonious
      character.
    </p>
  </Media>
);

const Ken = () => (
  <Media>
    <img src={ken} alt="ken" />
    <h3>Ken</h3>
    <p>
      Sword. The sword of Tamiya Ryu is one that gives life or katsujin no ken.
    </p>
  </Media>
);

const Tai = () => (
  <Media>
    <img src={tai} alt="tai" />
    <h3>Tai</h3>
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
