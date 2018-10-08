import React from "react";
import styled, { css } from "react-emotion";
import Home from "../components/layouts/Home";

const Section = styled("section")`
  overflow: hidden;
  margin-bottom: 6em;
`;

const KanjiAside = ({ children }) => (
  <aside
    className={css`
      font-size: 5rem;
      font-weight: bold;
      writing-mode: vertical-lr;
      float: right;
      letter-spacing: 0.25em;
      text-align: center;
    `}
    css={`
      min-height: ${children.length + 1}em;
    `}
  >
    {children}
  </aside>
);

const TamiyaRyu = () => (
  <Section>
    <h2 id="tamiya-ryu">Tamiya Ryu</h2>

    <KanjiAside>田宮流</KanjiAside>

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
  </Section>
);

const Iaijutsu = () => (
  <Section>
    <h2 id="iaijutsu">Iaijutsu</h2>

    <KanjiAside>居合術</KanjiAside>

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
  </Section>
);

const KiKenTai = styled.div`
  clear: both;
  overflow: hidden;
  width: 23rem;
  margin: auto;
  margin-top: 4rem;

  & > header {
    font-weight: bold;
    padding-top: 1.5em;
  }
`;

const TrainingPhilosophy = () => (
  <Section>
    <h2 id="training">Training Philosophy</h2>

    <p>
      Training focuses on the harmonization of mind, body, and spirit through
      the practice and performance of kata (pre-arranged techniques). Techniques
      are practiced with the philosophy of the "sword which gives life (Katsujin
      no Ken)," as opposed to the "sword which takes life (Satsujin no Ken)."
    </p>

    <p>
      Emphasis is placed on basic techniques. To properly learn kata means
      studying 1) how to cut using the scabbard opening (sayaguchi) and 2) how
      to use the scabbard hand (sayate).
    </p>

    <p>
      Occasionally students will also practice Kenshibu - a traditional Japanese
      dance utilizing sword and fan. Kenshibu is performed to the accompaniment
      of poems (sung in a style called Shigin) that depict famous events in
      Japanese history.
    </p>

    <KiKenTai>
      <KanjiAside>気</KanjiAside>
      <header>Ki</header>
      <p>
        Tamiya Ryu trains the spirit and aims to create a harmonious character.
      </p>
    </KiKenTai>

    <KiKenTai>
      <KanjiAside>剣</KanjiAside>
      <header>Ken</header>
      <p>The sword of Tamiya Ryu is one that gives life or katsujin no ken.</p>
    </KiKenTai>

    <KiKenTai>
      <KanjiAside>体</KanjiAside>
      <header>Tai</header>
      <p>
        By harmonizing the spirit, sword, and body, the practice of Iaijutsu
        becomes dignified.
      </p>
    </KiKenTai>
  </Section>
);

const USTRI = () => (
  <Section>
    <h2 id="ustri">United States Tamiya Ryu</h2>

    <p>
      Train your body and mind. Tamiya Ryu is a koryu (literally, "old school")
      sword art not taught outside Japan until recently. The United States
      Tamiya Ryu Iaijutsu Orgranization is the only official group practicing
      this art in America.
    </p>

    <p>
      The United States Tamiya Ryu Iaijustu Ogranization is an official branch
      of the Tamiya Ryu Iaijutsu Genwakai and is headquarted in East Lansing,
      Michigan with a branch dojo located in Macomb, Michigan.
    </p>

    <p>
      We are the official representatives of this 400+ year old koryu art in the
      United States. Here you will find the history of both Tamiya Ryu and its
      history in the United States as well as information on where to find a
      dojo and how to join. We hope to see you on the dojo floor soon!
    </p>
  </Section>
);

const Locations = () => (
  <Section>
    <h2 id="locations">Locations</h2>

    <h3 id="east-lansing">East Lansing, Michigan</h3>
    <h4>Michigan Honbu Dojo</h4>

    <p>
      The Michigan Honbu dojo is the headquarters for Tamiya Ryu Iajiutsu
      operations in the United States.
    </p>

    <a href="#">Learn more</a>

    <h3 id="macomb">Macomb, Michigan</h3>
    <h4>Southeast Michigan Branch Dojo</h4>

    <p>
      The Southeast Michigan Branch dojo holds class at Macomb Township Parks &
      Recreation Center.
    </p>

    <a href="#">Learn more</a>

    <h3 id="brighton">Brighton, Michigan</h3>
    <h4>Brighton Study Group</h4>

    <p>
      The Brighton Study Group operates under the Southeast Michigan Branch Dojo
      and holds class at the Brighton Education and Community Center.
    </p>

    <a href="#">Learn more</a>
  </Section>
);

export default () => (
  <Home>
    <USTRI />
    <TamiyaRyu />
    <Iaijutsu />
    <TrainingPhilosophy />
    <Locations />
  </Home>
);
