import React from "react";
import styled from "styled-components";
import Card from "../../components/Card";
import Masthead from "../../components/Masthead";
import EastLansing from "../../paritals/EastLansing";
const Person = styled.div``;

const Header = () => (
  <header>
    <Masthead />
  </header>
);

const Mon = () => <img src="images/mon.svg" />;

const Macomb = () => (
  <section>
    <h2>Southeast Michigan - Branch Dojo</h2>
    <p>
      The Southeast Michigan Branch dojo holds class at the Macomb Township
      Parks &amp; Recreation Center. Classes are ran on a session basis,
      typically 6-7 weeks in length.
    </p>
    <p>
      To sign up for classes, please contact Macomb Township Park &amp;
      Recreation at <a href="tel:5869922900">586-992-2900</a> or online at{" "}
      <a href="https://www.gomtpr.org/">gomtpr.org</a>. Class is usually on
      break during August and the last half of Decemeber and early January.
      After signing up, please contact the Southeast Michigan dojo so we can
      prepare beginner materials for your first class!
    </p>

    <h3 icon-calendar>Training Schedule</h3>
    <p>Saturdays, 10:30am - 12:00pm (Mixed Level)</p>

    <img src="images/inazuma-ken-kanji.svg" />

    <h3>Contact Information</h3>
    <Card icon-mail>
      <Person>
        <p>Dan Mordan (Genzan)</p>
        <p>6th Degree</p>
        <p>USTRI Southeast Michigan Assistant Branch Manager</p>
        <p>USTRI Instructor</p>
        <p>Email: genzan@ustri.org</p>
      </Person>
    </Card>
  </section>
);

const Instructors = () => (
  <section>
    <h2>Instructors</h2>
    <Person>
      <p>Michael Alexanian (Gennan Buhaku) - 8th Degree</p>
      <p>USTRI General Manager</p>
      <p>Genwakai Shihan (Head Instructor)</p>
      <p>USTRI Board of Directors</p>
      <p>Email: alexgennan@att.net</p>
    </Person>
    <Person>
      <p>Thomas Hufnagel (Gensui) - 6th Degree</p>
      <p>USTRI Director of Operations</p>
      <p>USTRI Honbu Branch Manager</p>
      <p>USTRI Instructor</p>
      <p>USTRI Board of Directors</p>
      <p>Email: hufnagelt@gmail.com</p>
    </Person>
    <Person>
      <p>William Smith (Genka) - 6th Degree</p>
      <p>USTRI Honbu Assistant Branch Manager</p>
      <p>USTRI Instructor</p>
      <p>USTRI Board of Directors</p>
      <p>Email: alexgennan@att.net</p>
    </Person>
    <Person>
      <p>Douglas Jarrett (Genchi) - 6th Degree</p>
      <p>USTRI Honbu Assistant Branch Manager</p>
      <p>USTRI Instructor</p>
      <p>USTRI Board of Directors</p>
      <p>Email: alexgennan@att.net</p>
    </Person>
    <Person>
      <p>Scott Sier (Genfu) - 6th Degree</p>
      <p>USTRI Southeast Michigan Branch Manager</p>
      <p>USTRI Instructor</p>
      <p>USTRI Board of Directors</p>
      <p>Email: spsier@gmail.com</p>
    </Person>
    <Person>
      <p>Dan Mordan (Genzan) - 6th Degree</p>
      <p>USTRI Southeast Michigan Assistant Branch Manager</p>
      <p>USTRI Instructor</p>
      <p>USTRI Board of Directors</p>
      <p>Email: USTRI-SE-MI@ustamiyaryu.org</p>
    </Person>
  </section>
);

export default () => (
  <div>
    <Header />
    <nav>page level nav</nav>
    <EastLansing />
    <Mon />
    <Macomb />
    <Instructors />
  </div>
);
