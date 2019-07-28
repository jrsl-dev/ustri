import React from "react";
import styled from "styled-components";

const PersonStyled = styled.div`
  display: grid;
  line-height: 1.75;
  margin-bottom: 2em;

  & > * {
    padding-left: 0.5em;
  }

  & > b:first-child {
    padding-left: 0;
    margin-bottom: 0.5em;
  }
`;

const Email = styled.a`
  font-weight: bold;
  margin: 0.5em;
`;

const Person = ({ name, gengo, rank, titles, email, showEmail }) => (
  <PersonStyled>
    <b>{`${name}${gengo ? ` (${gengo})` : ""}`}</b>
    <span>{rank}</span>
    {titles &&
      titles.length &&
      titles.map(title => <span key={title}>{title}</span>)}
    {email &&
      showEmail && <Email href={`mailto:${email}`}>Email: {email}</Email>}
  </PersonStyled>
);

const Gennan = ({ ...props }) => (
  <Person
    name="Michael Alexanian"
    gengo="Gennan Buhaku"
    rank="8th Degree"
    titles={[
      "Genwakai Shihan (Head Instructor)",
      "USTRI General Manager",
      "United States Tamiya Ryu Iaijutsu Gennankai Kaicho"
    ]}
    email="alexgennan@att.net"
    {...props}
  />
);

const Genka = ({ ...props }) => (
  <Person
    name="William Smith"
    gengo="Genka"
    rank="6th Degree"
    titles={["USTRI Honbu Assistant Branch Manager", "Gennankai Instructor"]}
    {...props}
  />
);

const Gensui = ({ ...props }) => (
  <Person
    name="Thomas Hufnagel"
    gengo="Gensui"
    rank="6th Degree"
    titles={[
      "Gennankai Director of Operations",
      "USTRI Honbu Branch Manager",
      "Gennankai Instructor"
    ]}
    email="hufnagelt@gmail.com"
    {...props}
  />
);

const Genchi = ({ ...props }) => (
  <Person
    name="Douglas Jarrett"
    gengo="Genchi"
    rank="6th Degree"
    titles={["Gennankai Instructor"]}
    {...props}
  />
);

const Genfu = ({ ...props }) => (
  <Person
    name="Scott Sier"
    gengo="Genfu"
    rank="6th Degree"
    titles={["USTRI Southeast Michigan Branch Manager", "Gennankai Instructor"]}
    email="spsier@gmail.com"
    {...props}
  />
);

const Genzan = ({ ...props }) => (
  <Person
    name="Dan Mordan"
    gengo="Genzan"
    rank="6th Degree"
    titles={[
      "USTRI Southeast Michigan Assistant Branch Manager",
      "Gennankai Instructor"
    ]}
    email="dan@mordan.xyz"
    {...props}
  />
);

const Gennetsu = ({ ...props }) => (
  <Person
    name="James Russell"
    gengo="Gennetsu"
    rank="5th Degree"
    email="gennetsu.ustri@gmail.com"
    titles={[
      "USTRI Brighton Michigan Study Group Manager",
      "Gennankai Instructor"
    ]}
    {...props}
  />
);

const Genko = props => (
  <Person
    name="Joseph Smith"
    gengo="Genko"
    rank="5th Degree"
    titles={["Gennankai Instructor"]}
    {...props}
  />
);

const Genkou = props => (
  <Person
    name="Daniel Wung"
    gengo="Genkou"
    rank="5th Degree"
    titles={["Gennankai Instructor"]}
    {...props}
  />
);

export default {
  Gennan,
  Genka,
  Gensui,
  Genchi,
  Genfu,
  Genzan,
  Gennetsu,
  Genko,
  Genkou
};
