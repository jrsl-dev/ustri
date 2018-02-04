import React from "react";
import Person from "../../components/Person";
import Sections from "../../styled/Sections";

export default () => (
  <Sections.Content>
    <h2>Message From the Head Instructor</h2>
    <article>
      <p>
        After a very long absence from being able to update this section of the
        USTRI website, it is wonderful to have the time once again to spend
        writing this column, as well as The Reflecting Pool, and share my
        thoughts with all of you.
      </p>
      <p>
        Due to a variety of circumstances, both work and family related, I was
        not able to devote myself to those various responsibilities that revolve
        around USTRI for quite some time. During that time, I passed the mantle
        to my very capable Board of Directors to run things until I was able to
        return. Now, however, I am fully retired and have ample time to get back
        to writing these columns as well as instructing our Deshi at the Honbu
        Dojo and Macomb County Branch. It is my great hope that, as time goes
        by, nothing further will impede me from my renewed involvement with
        USTRI and I will be able to do this for quite some time.
      </p>
      <p>
        Perhaps one of the most rewarding and important aspects of my
        rejuvenated involvement with USTRI was being able to host our Soke,
        Tsumaki Kazuo Genwa, and his Assistant, Endo Tsuyako Gentei, this summer
        free from the situations that affected my relationship with USTRI and
        its members. During their visit, we spoke at length about the past few
        years and why I had to step back from my duties due to job-related
        stress, the deaths of my wife’s parents within 3 months of each other
        and personal health issues. Both Sensei assured me that this was by no
        means a problem for them and that my course of action was the right one
        given the gravity of the situations. Of course, they were overjoyed
        about my return to my duties and encouraged me to be involved as much as
        possible if the circumstances permit. Perhaps this is one reason why our
        relationship is as strong as it is and I regard them as my Older Brother
        and Older Sister.
      </p>
      <p>
        So, to all of you who check our website, whether on a regular basis or
        just from time to time, you can expect new material in both the Message
        from the Head Instructor and Reflecting Pool columns on a more
        consistent basis from now on. I appreciate your interest in our
        organization’s activities and invite you to contact us if you are in the
        area to visit a class to observe what we do to keep this most valuable
        Intangible Cultural Asset alive and well in the USA!
      </p>
      <div>
        Respectfully submitted
        <Person.Gennan />
      </div>
    </article>
    {/* <aside>previous messages here</aside> */}
  </Sections.Content>
);
