import React from "react";
import Person from "../../components/Person";
import Sections from "../../components/styled/Sections";

export default ({ data }) => {
  console.log(data);
  return (
    <Sections.Content>
      <h2>Message From the Head Instructor</h2>
      <article>
        <div
          dangerouslySetInnerHTML={{
            __html: data.allMarkdownRemark.edges[0].node.html
          }}
        />
        <div>
          Respectfully submitted
          <Person.Gennan />
        </div>
      </article>
      {/* <aside>previous messages here</aside> */}
    </Sections.Content>
  );
};
