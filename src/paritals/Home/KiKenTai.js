import React from "react";
import Sections from "../../components/Sections";

const Ki = () => (
  <div>
    <img src="images/ki-kanji.svg" />
    <h3>Ki</h3>
    <p>
      Spirit. Tamiya Ryu trains the spirit and aims to create a harmonious
      character.
    </p>
  </div>
);

const Ken = () => (
  <div>
    <img src="images/ken-kanji.svg" />
    <h3>Ken</h3>
    <p>
      Sword. The sword of Tamiya Ryu is one that gives life or katsujin no ken.
    </p>
  </div>
);

const Tai = () => (
  <div>
    <img src="images/tai-kanji.svg" />
    <h3>Tai</h3>
    <p>
      Body. By harmonizing the spirit, sword, and body, the practice of Iaijutsu
      becomes dignified.
    </p>
  </div>
);

export default () => (
  <Sections.White>
    <Ki />
    <Ken />
    <Tai />
  </Sections.White>
);
