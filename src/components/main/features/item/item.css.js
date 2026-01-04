import styled from "styled-components";
import { toRgba } from "../../../../helpers/toRgba";
import { Colors } from "../../../../constants/theme";
import breakpoints from "../../../../constants/breakpoints";
const { DESKTOP } = breakpoints;

export const SVGRect = styled.svg`
  position: absolute;
  transform: scale(1.1);
  height: 100%;
  width: 100%;
  overflow: initial;
  //rect {
  //  width: 30rem;
  //  height: 100%;
  //  fill: transparent;
  //  stroke: blue;
  //  stroke-width: 2px;
  //}
`;
export const Container = styled.div`
  position: relative;
  display: grid;
  padding: 1rem;
  height: 10rem;
  width: 34rem;
  line-height: 1.05;
  grid-template-columns: min-content 1fr;
  justify-self: center;
  grid-row-gap: 1rem;
  grid-column-gap: 2rem;
  transition: all .4s;

  :hover {
    transform: scale(0.95);
  }
  div {
    grid-row: 1 / span 2;
    height: 9rem;
    width: 9rem;
      background-color:  ${toRgba({
        hex: Colors.primaryColorDarken,
        opacity: "0.8"
      })};
    border-radius: 100%;
    svg {
    border: 0px;
    width: 6rem;
    padding: 1.5rem 1.5rem;
  },
  }
`;
