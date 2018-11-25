import React from "react";
import { Link } from "gatsby";
import styled from "react-emotion";
import Home from "../components/layouts/Home";

const Kanji = styled.aside`
  font-size: 4.5rem;
  font-weight: bold;
  color: hsla(0, 0%, 0%, 0.9);
  writing-mode: vertical-lr;
  float: right;
  letter-spacing: 0.25em;
  text-align: center;
  min-height: ${props => props.children.length + 1}em;
`;

const TamiyaRyu = () => (
  <>
    <h2 id="tamiya-ryu">Tamiya Ryu</h2>

    <Kanji>田宮流</Kanji>

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
  </>
);

const Iaijutsu = () => (
  <>
    <h2 id="iaijutsu">Iaijutsu</h2>

    <Kanji>居合術</Kanji>

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
  </>
);

const TrainingPhilosophy = () => (
  <>
    <h2 id="training">Training Philosophy</h2>

    <dl>
      <dt>気</dt>
      <dd>
        Tamiya Ryu trains the spirit and aims to create a harmonious character.
      </dd>

      <dt>剣</dt>
      <dd>
        The sword of Tamiya Ryu is one that gives life or katsujin no ken.
      </dd>

      <dt>体</dt>
      <dd>
        By harmonizing the spirit, sword, and body, the practice of Iaijutsu
        becomes dignified.
      </dd>
    </dl>

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
  </>
);

const USTRI = () => (
  <>
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
  </>
);

const Locations = () => (
  <>
    <h2 id="locations">Locations</h2>
    <ul
      css={`
        list-style: none;
        margin: 0;
      `}
    >
      <li>
        <h3>East Lansing, Michigan</h3>
        <h4>Michigan Honbu Dojo</h4>
        <Link to="/locations/east-lansing-michigan">Learn more</Link>
      </li>

      <li>
        <h3>Macomb, Michigan</h3>
        <h4>Southeast Michigan Branch Dojo</h4>
        <Link to="/locations/macomb-michigan">Learn more</Link>
      </li>

      <li>
        <h3>Brighton, Michigan</h3>
        <h4>Brighton Study Group</h4>
        <Link to="/locations/brighton-michigan">Learn more</Link>
      </li>
    </ul>
  </>
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
