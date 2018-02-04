import React from "react";
import { Subsection } from "../../styled/Sections";
import Person from "../../components/Person";

const Introduction = () => (
  <div>
    <p>
      The Brighton Study Group holds class at the Brighton Education Community
      Center building in Brighton, MI. Classes are ran on a session basis,
      typically 6-8 weeks long. Classes are continuous, sessions do not repeat
      material.
    </p>

    <p>
      To register for class, please visit{" "}
      <a href="brightoncommunityed.com">brightoncommunityed.com</a> or call{" "}
      <a href="tel:8102994130">(810) 299-4130</a>. After signing up, please
      contact us so we can prepare materials for your first class!
    </p>
  </div>
);

const Schedule = () => (
  <div>
    <h3>Training Schedule</h3>
    <p>Thursday, 7:30pm - 9:00pm (Mixed Level)</p>
    <Subsection>
      <p>
        Since the B.E.C.C. Building is part of Brighton Area Schools, class will
        be cancelled whenever schools are closed. Every attempt to make up
        cancelled classes will be made.
      </p>
    </Subsection>
  </div>
);

const Contact = () => (
  <div>
    <h3>Contact Information</h3>
    <Person.Gennetsu showEmail />
  </div>
);

export default () => (
  <div>
    <Introduction />
    <Schedule />
    <Contact />
  </div>
);
