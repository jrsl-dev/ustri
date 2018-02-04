import React from "react";
import Masthead from "../partials/Masthead/Content";
import Sections from "../styled/Sections";

export default () => (
  <div>
    <Masthead>
      <h2>Training Information</h2>
    </Masthead>
    <Sections.Content>
      <p>
        Iaijutsu is a Japanese sword art. Tamiya Ryu is a specific school of
        iaijutsu which is described as both a Martial Art (bujutsu) and a
        Martial Way (budo). Practice is conducted in a non-competitive
        environment.
      </p>
      <p>
        As a koryu (a school established before the Meiji Restoration) the
        primary mode of training is kata. Kata are prearranged forms of practice
        design to instill the princles of the art into the student through
        repeated pratice. Iaijutsu kata are performed solo and usually consist
        of three phases:
      </p>
      <ol>
        <li>Nukitsuke - The initial sword draw</li>
        <li>Kiritsuke - A follow up strike</li>
        <li>Noutou - Resheathing the blade</li>
      </ol>
      <p>
        Besides kata, basics are drilled as a group to warm up at the start of
        practice and paired exercises are practiced with bokuto (wooden swords)
        to study timing and distance (ma'ai).
      </p>
    </Sections.Content>
    <Sections.Aside>
      <h3>Equipment</h3>
      <p>
        The equipment used depends on the experience level of the particular
        student.
      </p>
      <p>
        Students new to our organization are simply required to wear clothing
        that will allow them to move around with ease. Loaner bokuto (wooden
        sword) and obi (belt) will be provided when first starting out.
      </p>
      <p>
        Ungraded students that have become deshi wear a standard Karate/Judo
        style gi and will be begin using iaito (an alloy based sword that is
        unable to hold an edge).
      </p>
      <p>
        Graded students wear white iai style uwagi (a short sleeve top) with
        kaku obi and black hakama (pleated trouser) Instructors will typically
        wear the same as graded students but with a black uwagi.
      </p>
      <p>
        In all cases, knee pads are <strong>highly</strong> recommended.
      </p>
      <p>
        Blades that have and edge or might be able to hold an edge are never
        allowed during class. <strong>All</strong> equipment must be inspected
        by the instructor before being used by a student in class.
      </p>
    </Sections.Aside>
  </div>
);
