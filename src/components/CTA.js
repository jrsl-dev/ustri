import React from "react";
import styled from "styled-components";
import RouterLink from "gatsby-link";

const CTA = styled.a`
  display: inline-block;
  border: 2px solid currentColor;
  border-radius: 3px;
  text-decoration: none;
  padding: 0.6em 1.35em;
  box-shadow: 1px 2px 1px 1px rgba(0, 0, 0, 0.25);
  transition: box-shadow 350ms ease, background 150ms ease;

  &:hover {
    box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, 0.65);
    background: #e5e5e5;
  }
`;

export const Link = CTA.withComponent(RouterLink);

export default ({ children, ...props }) => <CTA {...props}>{children}</CTA>;
