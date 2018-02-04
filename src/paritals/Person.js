import React from "react";
import styled from "styled-components";
import CTA from "./CTA";

const PersonStyled = styled.div`
  display: grid;
  line-height: 1.75;

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
      "United States Tamiya Ryu Iaijutsu Gengo Hojisha no Kai Kaicho"
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
    titles={["USTRI Honbu Assistant Branch Manager", "USTRI Instructor"]}
    {...props}
  />
);

const Gensui = ({ ...props }) => (
  <Person
    name="Thomas Hufnagel"
    gengo="Gensui"
    rank="6th Degree"
    titles={[
      "USTRI Director of Operations",
      "USTRI Honbu Branch Manager",
      "USTRI Instructor"
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
    titles={["USTRI Instructor"]}
    {...props}
  />
);

const Genfu = ({ ...props }) => (
  <Person
    name="Scott Sier"
    gengo="Genfu"
    rank="6th Degree"
    titles={["USTRI Souteast Michigan Branch Manager", "USTRI Instructor"]}
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
      "USTRI Instructor"
    ]}
    email="genzan@ustamiyaryu.org"
    {...props}
  />
);

const Gennetsu = ({ ...props }) => (
  <Person
    name="James Russell"
    gengo="Gennetsu"
    rank="5th Degree"
    email="gennetsu@ustamiyaryu.org"
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
  Gennetsu
};
