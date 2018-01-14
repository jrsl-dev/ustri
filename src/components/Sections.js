import React from "react";
import styled from "styled-components";

const Section = ({ children }) => <section>{children}</section>;

const White = styled(Section)`
  background: #fff;
  color: #212121;
`;

const Light = styled(Section)`
  background: #e0e0e0;
  color: #212121;
`;

const Dark = styled(Section)`
  background: #212121;
  color: #e0e0e0;
`;

export default { White, Light, Dark };
