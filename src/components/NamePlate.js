import React from "react";
import styled from "react-emotion";
import mon from "../assets/kikyo-maru.png";

const HeroSub = styled("sub")`
  display: block;
  bottom: auto;
  line-height: inherit;
  margin-top: 0.5em;
  text-align: right;
  padding: 0.25em 0.5em;
  color: white;
  background-color: hsla(0, 0%, 0%, 0.9);
  background-image: url(${mon});
  background-size: contain;
  background-repeat: no-repeat;
  background-origin: content-box;
`;

export const HeroNamePlate = () => (
  <h1>
    United States Tamiya Ryu Iaijutsu
    <br />
    Gengo Hojisha no Kai
    <HeroSub>
      米国田宮流居合術
      <br />
      元号保持者の会
    </HeroSub>
  </h1>
);

export const ContentMasthead = () => (
  <h1>
    United States Tamiya Ryu Iaijutsu
    <br />
    Gengo Hojisha no Kai
    <sub style={{ display: "block", bottom: "auto", lineHeight: "inherit" }}>
      米国田宮流居合術
      <br />
      元号保持者の会
    </sub>
  </h1>
);
