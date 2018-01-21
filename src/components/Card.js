import React from "react";
import styled from "styled-components";

export default styled.div`
  padding: 1em;
  border: 1px solid currentColor;
  border-radius: 3px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  background: #f5f5f5;
  display: flex;
  flex-direction: column;

  & > a:last-child {
    align-self: center;
  }
`;
