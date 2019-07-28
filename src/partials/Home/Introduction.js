import React from "react";
import styled from "styled-components";
import Sections from "../../components/styled/Sections";
import FramedImage from "../../components/styled/FramedImage";
import CTA from "../../components/styled/CTA";
import image from "../../assets/honbu-summer.jpg";

const Hero = styled.div`
  position: relative;
  margin-bottom: 4em;
`;

const Heading = styled.h2`
  @media (min-width: 720px) {
    position: absolute;
    bottom: -1.8em;
    color: white;
    background: rgba(21, 21, 21, 0.8);
    padding: 1em;
    border: 3px solid rgba(21, 21, 21, 0.9);
    right: 5%;
    box-shadow: 4px 4px 5px rgba(21, 21, 21, 0.4);
  }
`;

export default () => (
  <Sections.Content>
    <Hero>
      <Heading>Traditional Japanese Sword Drawing</Heading>
      <FramedImage src={image} alt="" />
    </Hero>
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
    <CTA href="/training-information/">Learn more</CTA>
  </Sections.Content>
);
