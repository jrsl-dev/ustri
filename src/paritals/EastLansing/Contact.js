import React from "react";
import Sections from "../../components/Sections";
import Card from "../../components/Card";
import Person from "../../components/Person";

export default () => (
  <Sections.Light>
    <h3>Contact Information</h3>
    <Card>
      <Person.Gensui />
    </Card>
  </Sections.Light>
);
