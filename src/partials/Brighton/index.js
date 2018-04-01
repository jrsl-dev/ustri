import React from "react";
import { Subsection } from "../../components/styled/Sections";
import Person from "../../components/Person";

const registrationUrl =
  "https://www.digitalsignup.com/ClassDetail.aspx?code=j4EHpN52BZrTQWrbT5LfR80FWyzptDHWqXaO4TdcKrTkw0oshzCyUE5n%2bdSRPZ8U&SoftwareID=5G6jVMZ2T%2b6kdmhmIZvFBA%3d%3d";

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
      <a href={registrationUrl}>
        Brighton Community Education's registration site
      </a>{" "}
      or call <a href="tel:8102994130">(810) 299-4130</a>. After signing up,
      please contact us so we can prepare materials for your first class!
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
