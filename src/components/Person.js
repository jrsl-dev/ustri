import React from "react";
import styled from "styled-components";

const PersonStyled = styled.div`
  display: grid;
`;

const Person = ({ name, gengo, rank, titles, email }) => (
  <PersonStyled>
    <span>{`${name}${gengo ? ` (${gengo})` : ""}`}</span>
    <span>{rank}</span>
    {titles &&
      titles.length &&
      titles.map(title => <span key={title}>{title}</span>)}
    {email && (
      <span>
        Email: <a href={`mailto:${email}`}>{email}</a>
      </span>
    )}
  </PersonStyled>
);

const Gennan = () => (
  <Person
    name="Michael Alexanian"
    gengo="Gennan Buhaku"
    rank="8th Degree"
    titles={[
      "Genwakai Shihan (Head Instructor)",
      "USTRI General Manager",
      "United States Tamiya Ryu Iaijutsu Gengo Hojisha no Kai Kaicho"
    ]}
  />
);

const Genka = () => (
  <Person
    name="William Smith"
    gengo="Genka"
    rank="6th Degree"
    titles={["USTRI Honbu Assistant Branch Manager", "USTRI Instructor"]}
  />
);

const Gensui = () => (
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
  />
);

const Genchi = () => (
  <Person
    name="Douglas Jarrett"
    gengo="Genchi"
    rank="6th Degree"
    titles={["USTRI Instructor"]}
  />
);

const Genfu = () => (
  <Person
    name="Scott Sier"
    gengo="Genfu"
    rank="6th Degree"
    titles={["USTRI Souteast Michigan Branch Manager", "USTRI Instructor"]}
  />
);

const Genzan = () => (
  <Person
    name="Dan Mordan"
    gengo="Genzan"
    rank="6th Degree"
    titles={[
      "USTRI Southeast Michigan Assistant Branch Manager",
      "USTRI Instructor"
    ]}
  />
);

export default {
  Gennan,
  Genka,
  Gensui,
  Genchi,
  Genfu,
  Genzan
};
