import React from "react"
import styled from "styled-components"

import { up, down, only, between } from 'styled-breakpoints'
import { useBreakpoint } from "styled-breakpoints/react-styled"

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
`

const Heading = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 12px;
  ${up(1011)} {
    font-size: 35px;
  }
`

export const useBreakpoints = () => {
  const isXs = useBreakpoint(down("xs"));
  const isSm = useBreakpoint(only("sm"));
  const isMd = useBreakpoint(only("md"));
  const isLg = useBreakpoint(only("lg"));
  const isXl = useBreakpoint(up("xl"));
  const isCustom = useBreakpoint(up(1200));
  const isCustomBeteen = useBreakpoint(between(1000, 1200));

  return {
    isXs,
    isSm,
    isMd,
    isLg,
    isXl,
    isCustom,
    isCustomBeteen
  };
};


function Test() {
  const { isXs, isSm, isMd, isLg, isXl, isCustom, isCustomBeteen } = useBreakpoints();

  return (
  <ul>
    <li>isXs: {`${isXs}`}</li>
    <li>isSm: {`${isSm}`}</li>
    <li>isMd: {`${isMd}`}</li>
    <li>isLg: {`${isLg}`}</li>
    <li>isXl: {`${isXl}`}</li>
    <li>isCustom up 1200: {`${isCustom}`}</li>
    <li>isBetween 1000 & 1200: {`${isCustomBeteen}`}</li>
  </ul>
  )
}

function App() {
  return (
    <Wrapper>
      <Heading>Hello from custom styled breakpoints</Heading>
      <Test />
    </Wrapper>
  );
}

export default App;
