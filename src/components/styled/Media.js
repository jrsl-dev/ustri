import React from "react";
import styled from "styled-components";

const Media = styled.div`
  display: grid;
  grid-template-columns: 22ch;
  grid-template-rows: auto auto 1fr;
  justify-content: center;
`;

const Image = styled.img`
  justify-self: center;
`;

const Heading = styled.div`
  justify-self: center;
`;

Media.Image = Image;
Media.Heading = Heading;

export default Media;
