import React from "react";
import Link from "gatsby-link";
import Card from "../../styled/Card";
import Introduction from "./Introduction";
import News from "./News";
import Locations from "./Locations";
import WhatIs from "./WhatIs";
import Training from "./Training";
import KiKenTai from "./KiKenTai";

export default () => (
  <div>
    <Introduction />
    <News />
    <Locations />
    <WhatIs />
    <Training />
    <KiKenTai />
  </div>
);
