import React from "react";
import Card from "../../components/Card";
import Sections from "../../components/Sections";
import Schedule from "./Schedule";
import Contact from "./Contact";
import Introduction from "./Introduction";

const Offer = () => (
  <Card>
    <h3>Announcement</h3>
    <p>
      The USTRI Honbu dojo is currently offering a free introductory month of
      training. No contracts are required. Please see the contact information
      below to inquire about more details.
    </p>
  </Card>
);

export default ({ Section = Sections.White }) => (
  <Section>
    <Introduction />
    <Offer />
    <Schedule />
    <img src="images/tamiya-ken-kanji.svg" />
    <Contact />
  </Section>
);
