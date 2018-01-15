import React from "react";
import Person from "../../components/Person";
import Sections from "../../components/Sections";

export default ({ Section = Sections.White }) => (
  <Section>
    <h2>Instructors</h2>
    <Person>
      <p>Michael Alexanian (Gennan Buhaku) - 8th Degree</p>
      <p>USTRI General Manager</p>
      <p>Genwakai Shihan (Head Instructor)</p>
      <p>USTRI Board of Directors</p>
      <p>Email: alexgennan@att.net</p>
    </Person>
    <Person>
      <p>Thomas Hufnagel (Gensui) - 6th Degree</p>
      <p>USTRI Director of Operations</p>
      <p>USTRI Honbu Branch Manager</p>
      <p>USTRI Instructor</p>
      <p>USTRI Board of Directors</p>
      <p>Email: hufnagelt@gmail.com</p>
    </Person>
    <Person>
      <p>William Smith (Genka) - 6th Degree</p>
      <p>USTRI Honbu Assistant Branch Manager</p>
      <p>USTRI Instructor</p>
      <p>USTRI Board of Directors</p>
      <p>Email: alexgennan@att.net</p>
    </Person>
    <Person>
      <p>Douglas Jarrett (Genchi) - 6th Degree</p>
      <p>USTRI Honbu Assistant Branch Manager</p>
      <p>USTRI Instructor</p>
      <p>USTRI Board of Directors</p>
      <p>Email: alexgennan@att.net</p>
    </Person>
    <Person>
      <p>Scott Sier (Genfu) - 6th Degree</p>
      <p>USTRI Southeast Michigan Branch Manager</p>
      <p>USTRI Instructor</p>
      <p>USTRI Board of Directors</p>
      <p>Email: spsier@gmail.com</p>
    </Person>
    <Person>
      <p>Dan Mordan (Genzan) - 6th Degree</p>
      <p>USTRI Southeast Michigan Assistant Branch Manager</p>
      <p>USTRI Instructor</p>
      <p>USTRI Board of Directors</p>
      <p>Email: USTRI-SE-MI@ustamiyaryu.org</p>
    </Person>
  </Section>
);
