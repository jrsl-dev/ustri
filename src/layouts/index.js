import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";
import Header from "../components/Header";
import "./index.css";

const Main = styled.main`
  padding: 0 0 4rem 0;

  @media (min-width: 640px) {
    padding: 4rem 0 0 0;
  }
`;

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="United States Tamiya Ryu Iaijutsu | Traditional Japanese Swordsmanship"
      meta={[
        {
          name: "description",
          content:
            "The United States Tamiya Ryu Organization offers classes in traditional Japanese swordsmanship called iaijutsu. There are dojo located in Central and Southeast Michigan."
        },
        {
          name: "keywords",
          content:
            "Tamiya Ryu, Iaijutsu, Iaido, Iai, Kendo, Kenjutsu, Budo, Bujutsu, Michigan, United States, Southeast Michigan, Lansing, Macomb, Brighton, Livingston, Mindfulness, Japan, sword, katana"
        }
      ]}
    />
    <Header />
    <Main role="main">{children()}</Main>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
