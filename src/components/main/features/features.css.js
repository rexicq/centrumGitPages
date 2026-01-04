import styled from "styled-components";
import { Colors } from "../../../constants/theme";
import { toRgba } from "../../../helpers/toRgba";
import { AnimatedContainer } from "../../utils";
import { Heading2 } from "../../utils/style";
import breakpoints from "../../../constants/breakpoints";

const { TABLET, DESKTOP } = breakpoints;

export const Heading = styled(Heading2)`
  grid-column: 1 / -1;
  @media (max-width: ${DESKTOP}px) {
    margin-bottom: -1rem;
  }
`;

export const SVGS = styled(AnimatedContainer)`
  padding: 1rem 2rem;
  grid-column: 2 / span 8;
  display: grid;
  min-height: 50rem;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  align-items: center;
  justify-items: center;
  grid-gap: 6rem;
  @media (max-width: ${DESKTOP}px) {
    grid-gap: 5rem;
  }
  @media (max-width: ${TABLET}px) {
    grid-gap: 3rem;
  }
  z-index: 10;
  h3 {
    padding: 0;
  }
  span {
    font-size: 1.6rem;
  }
`;

export const Item = styled.div`
  display: grid;
  height: 10rem;
  grid-template-columns: min-content 1fr;
  justify-self: start;
  background-color: rgba(0, 0, 0, 0.1);
  grid-row-gap: 1rem;
  grid-column-gap: 2rem;
  transition: all .4s;
  div {
  background-color:  ${toRgba({
    hex: Colors.primaryColorDarken,
    opacity: "0.8"
  })}
  border-radius: 100%;
  grid-row: 1 / span 2;
  height: 9rem;
  width: 9rem;
  }
  :hover {
    background-color: rgba(0, 0, 0, 0.15);
  }
`;
