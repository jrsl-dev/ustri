import React from "react";
import styled from "styled-components";

const Base = styled.section`
  display: grid;
  grid-template-columns: 65vh;
  justify-content: center;
  padding: 3.5rem;

  & > a:last-child {
    justify-self: center;
  }
`;

const White = Base.extend`
  background: #fff;
  color: #212121;
`;

const Light = Base.extend`
  background: #e0e0e0;
  color: #212121;
`;

const Dark = Base.extend`
  background: #212121;
  color: #e0e0e0;
`;

export default { White, Light, Dark };
