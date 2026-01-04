import styled from "styled-components";
import { BackgroundSection, ScrollButton } from "../utils";
import breakpoints from "../../constants/breakpoints";

const { DESKTOP, TABLET, PHONE } = breakpoints;
export const Container = styled(BackgroundSection)`
  animation: none;
`;

export const ScrollButtonDown = styled(ScrollButton)`
  @media (max-width: ${DESKTOP}px) {
    margin-bottom: 1rem;
  }
  @media (max-width: ${TABLET}px) {
    margin-bottom: 3rem;
  }
  @media (max-width: ${PHONE}px) {
    margin-bottom: 5rem;
  }
`;

export const SecondaryContainer = styled.div`
  opacity: 1;
  padding: 7rem;
  @media (max-width: ${DESKTOP}px) {
    padding: 2rem;
  }
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  justify-self: center;
  display: grid;
  justify-content: center;
  align-content: center;
  z-index: 5;
`;
