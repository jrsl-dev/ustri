import React from "react";
import Link from "gatsby-link";
import USTRI from "../components/USTRI";
import News from "../components/News";
import Card from "../components/Card";
import Sections from "../components/Sections";

const Introduction = () => (
  <Sections.Light>
    <h2>A traditional Japanese sword drawing martial art in Michigan</h2>
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
    <a href="/training-information.html">Learn more</a>
    <News />
  </Sections.Light>
);

const EastLansing = () => (
  <div>
    <h3>East Lansing, Michigan</h3>
    <img src="images/east-lansing-location.jpg" />
    <h4 class="media__title">Michigan Honbu Dojo</h4>
    <p>
      The Michigan Honbu dojo is the headquarters for Tamiya Ryu Iajiutsu
      operations in the United States.
    </p>
    <a href="/east-lansing-michigan-honbu-dojo.html">Learn more</a>
  </div>
);

const Macomb = () => (
  <div>
    <h3>Macomb, Michigan</h3>
    <img src="images/macomb-location.jpg" />
    <h4>Southeast Michigan Branch Dojo</h4>
    <p>
      The Southeast Michigan Branch dojo holds class at Macomb Township Parks
      &amp; Recreation Center.
    </p>
    <a href="/southeast-michigan-branch-dojo.html">Learn more</a>
  </div>
);

const Brighton = () => (
  <div>
    <h3>Brighton, Michigan</h3>
    <img src="images/macomb-location.jpg" />
    <h4>Brighton Study Group</h4>
    <p>
      The Brighton Study Group operates under the Southeast Michigan Branch Dojo
      and holds class at the Brighton Education and Community Center.
    </p>
    <a href="/brighton-michigan/">Learn more</a>
  </div>
);

const LocationAnnouncement = () => (
  <Card icon-megaphone>
    <h3>Announcement</h3>
    <h4>Southeast Michigan Branch To Move Operations!</h4>
    <p>
      We would like to announce that the Southeast Michigan Branch Dojo will be
      moving its operations to Macomb Township starting in 2017. Classes will
      still be held on <strong>Saturdays from 10:30am to 12:00pm</strong> at the
      Macomb Township Community Recreation Center.
    </p>
    <p>
      Registration will be handled through Macomb Township Parks &amp;
      Recreation.
    </p>
    <p>
      Please visit <a href="http://www.gomtpr.org/">gomtpr.org</a> for
      registration details. Other inquiries should be directed to Genzan sensei
      at <a href="mailto:genzan@ustamiyaryu.org">genzan@ustamiyaryu.org</a>.
    </p>
    <p>We hope to see you there!</p>
  </Card>
);

const Locations = () => (
  <Sections.White>
    <h2>Locations</h2>
    <EastLansing />
    <Macomb />
    <LocationAnnouncement />
    <Brighton />
  </Sections.White>
);

const LearnAbout = () => (
  <Sections.White>
    <article>
      <h2>Learn About Japanese Swordsmanship</h2>
      <p>
        Train your body and mind. Tamiya Ryu is a koryu (literally, "old
        school") sword art not taught outside Japan until recently. The United
        States Tamiya Ryu Iaijutsu Orgranization is the only official group
        practicing this art in America.
      </p>
      <a href="/contact.html" class="cta">
        Contact Us
      </a>
      <img src="images/katana.svg" />
    </article>
  </Sections.White>
);

const WhatIsIaijutsu = () => (
  <article>
    <h3>Iaijutsu</h3>
    <img src="images/iaijutsu-kanji.svg" />
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
  </article>
);

const WhatIsTamiyaRyu = () => (
  <article>
    <h3>Tamiya Ryu</h3>
    <img src="images/tamiyaryu-kanji.svg" />
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
  </article>
);

const WhatIs = () => (
  <Sections.Light>
    <h2>What Is Iaijutsu</h2>
    <WhatIsIaijutsu />
    <WhatIsTamiyaRyu />
  </Sections.Light>
);

const USTRIInfo = () => (
  <Sections.Dark>
    <h2>United States Tamiya Ryu Iaijutsu</h2>
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
    <img src="images/mon.svg" />
    <p>
      Occasionally students will also practice Kenshibu - a traditional Japanese
      dance utilizing sword and fan. Kenshibu is performed to the accompaniment
      of poems (sung in a style called Shigin) that depict famous events in
      Japanese history.
    </p>
  </Sections.Dark>
);

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

const KiKenTai = () => (
  <Sections.White>
    <Ki />
    <Ken />
    <Tai />
  </Sections.White>
);

const Masthead = () => (
  <header>
    <h1>
      <USTRI />
    </h1>
  </header>
);

export default () => (
  <div>
    <Masthead />
    <Introduction />
    <Locations />
    <LearnAbout />
    <WhatIs />
    <USTRIInfo />
    <KiKenTai />
  </div>
);
