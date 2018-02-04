import React from "react";
import styled from "styled-components";
import { Link } from "../../components/styled/CTA";
import Card from "../../components/styled/Card";
import Sections, { Subsection } from "../../components/styled/Sections";
import honbu from "../../assets/honbu-dojo.jpg";
import macomb from "../../assets/macomb-dojo.jpg";

const EastLansing = () => (
  <Subsection>
    <h3>East Lansing, Michigan</h3>
    <img src={honbu} alt="outside view of the michigan honbu dojo" />
    <h4>Michigan Honbu Dojo</h4>
    <p>
      The Michigan Honbu dojo is the headquarters for Tamiya Ryu Iajiutsu
      operations in the United States.
    </p>
    <Link to="/locations/east-lansing-michigan">Learn more</Link>
  </Subsection>
);

const Macomb = () => (
  <Subsection>
    <h3>Macomb, Michigan</h3>
    <img src={macomb} alt="inside view of the southeast michigan branch dojo" />
    <h4>Southeast Michigan Branch Dojo</h4>
    <p>
      The Southeast Michigan Branch dojo holds class at Macomb Township Parks
      &amp; Recreation Center.
    </p>
    <Link to="/locations/macomb-michigan">Learn more</Link>
  </Subsection>
);

const Brighton = () => (
  <Subsection>
    <h3>Brighton, Michigan</h3>
    {/* <img src="images/macomb-location.jpg" /> */}
    <h4>Brighton Study Group</h4>
    <p>
      The Brighton Study Group operates under the Southeast Michigan Branch Dojo
      and holds class at the Brighton Education and Community Center.
    </p>
    <Link to="/locations/brighton-michigan/">Learn more</Link>
  </Subsection>
);

export default () => (
  <Sections.Content>
    <h2>Locations</h2>
    <EastLansing />
    <Macomb />
    <Brighton />
  </Sections.Content>
);
