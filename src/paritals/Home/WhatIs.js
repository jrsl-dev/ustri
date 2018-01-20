import React from "react";
import styled from "styled-components";
import Sections, { Subsection } from "../../components/Sections";
import tamiyaryu from "../../assets/tamiyaryu-kanji.svg";
import iaijutsu from "../../assets/iaijutsu-kanji.svg";

const Flair = styled.img`
  justify-self: center;
  width: 100%;
  max-width: 25rem;
  margin-top: 2rem;
  margin-bottom: 4rem;
`;

const WhatIsIaijutsu = () => (
  <Subsection>
    <h3>Iaijutsu</h3>
    <Flair src={iaijutsu} />
    <p>
      Iaijutsu is a martial art (bujutsu) that strives to supress a sudden
      attack by the attacker against the defender using a single, swift stroke
      of the sword and seeks to master the various principles of drawing,
      re-sheathing and using the sword.
    </p>
    <p>
      Furthermore, iaijutsu is a martial way (budo) as it practiced with a
      humble and modest heart and continually trains the spirit.
    </p>
  </Subsection>
);

const WhatIsTamiyaRyu = () => (
  <Subsection>
    <h3>Tamiya Ryu</h3>
    <Flair src={tamiyaryu} />
    <p>
      Tamiya Ryu Iaijutsu is a military art (bugei) that was introduced in the
      Tensho period (1573-1591) by its founder, Tamiya Heibei Narimasa.
      Narimasa, together with Katayama Hoki no kami Hisayasu (the founder of
      Hoki Ryu) and Sekiguchi Jushin (the founder of Sekiguchi Ryu) were pupiles
      of Hayashizake Jinsuke Shigenobu, the founder of iaijutsu.
    </p>
    <p>
      The style characteristics of the Tamiya school of swordsmenship are: First
      volume (Omote no maki) containing evelen kata and Second volume (Koran no
      maki) containing fourteen kata.
    </p>
    <p>
      As a serious course of study, learning Tamiya Ryu Iaijutsu involves having
      a clear understanding of the concepts known as "Tamiya Nobility" and
      "Tamiya Purity".
    </p>
  </Subsection>
);

export default () => (
  <Sections.Light>
    <h2>What Is Iaijutsu</h2>
    <WhatIsTamiyaRyu />
    <WhatIsIaijutsu />
  </Sections.Light>
);
