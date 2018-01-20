import React from "react";
import Card from "../../components/Card";
import Sections from "../../components/Sections";
import honbu from "../../assets/honbu-dojo.jpg";
import macomb from "../../assets/macomb-dojo.jpg";

const EastLansing = () => (
  <div>
    <h3>East Lansing, Michigan</h3>
    <img src={honbu} alt="outside view of the michigan honbu dojo" />
    <h4>Michigan Honbu Dojo</h4>
    <p>
      The Michigan Honbu dojo is the headquarters for Tamiya Ryu Iajiutsu
      operations in the United States.
    </p>
    <a href="/east-lansing-michigan-honbu-dojo.html">Learn more</a>
  </div>
);

const Macomb = () => (
  <div>
    <h3>Macomb, Michigan</h3>
    <img src={macomb} alt="inside view of the southeast michigan branch dojo" />
    <h4>Southeast Michigan Branch Dojo</h4>
    <p>
      The Southeast Michigan Branch dojo holds class at Macomb Township Parks
      &amp; Recreation Center.
    </p>
    <a href="/southeast-michigan-branch-dojo.html">Learn more</a>
  </div>
);

const Brighton = () => (
  <div>
    <h3>Brighton, Michigan</h3>
    <img src="images/macomb-location.jpg" />
    <h4>Brighton Study Group</h4>
    <p>
      The Brighton Study Group operates under the Southeast Michigan Branch Dojo
      and holds class at the Brighton Education and Community Center.
    </p>
    <a href="/brighton-michigan/">Learn more</a>
  </div>
);

const LocationAnnouncement = () => (
  <Card icon-megaphone>
    <h3>Announcement</h3>
    <h4>Southeast Michigan Branch To Move Operations!</h4>
    <p>
      We would like to announce that the Southeast Michigan Branch Dojo will be
      moving its operations to Macomb Township starting in 2017. Classes will
      still be held on <strong>Saturdays from 10:30am to 12:00pm</strong> at the
      Macomb Township Community Recreation Center.
    </p>
    <p>
      Registration will be handled through Macomb Township Parks &amp;
      Recreation.
    </p>
    <p>
      Please visit <a href="http://www.gomtpr.org/">gomtpr.org</a> for
      registration details. Other inquiries should be directed to Genzan sensei
      at <a href="mailto:genzan@ustamiyaryu.org">genzan@ustamiyaryu.org</a>.
    </p>
    <p>We hope to see you there!</p>
  </Card>
);

export default () => (
  <Sections.White>
    <h2>Locations</h2>
    <EastLansing />
    <Macomb />
    <LocationAnnouncement />
    <Brighton />
  </Sections.White>
);
