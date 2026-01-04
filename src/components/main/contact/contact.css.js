import { css } from "styled-components";
import { Colors } from "../../../constants/theme";
import styled from "styled-components";
import breakpoints from "../../../constants/breakpoints";

const { TABLET, PHONE } = breakpoints;

export const inputStyle = css`
  height: 4rem;
  width: 20rem;
  background-color: ${Colors.colorGreyLight1};
  border: 0;
  border-bottom: 2px solid ${Colors.primaryColorDarkest};
  font-size: 2rem;
  margin-top: 0.25rem;
  padding: 0.5rem;
  transition: ${300} border-color ease-out;
  &:focus {
    border-color: ${Colors.primaryColor};
    outline: 0;
  }
`;

export const About = styled.div`
  @media (max-width: ${TABLET}px) {
    padding: 3rem 0rem;
    line-height: 1.4;
  }
  line-height: 1.6;
  display: flex;
  align-content: space-between;
  flex-direction: column;
  justify-content: space-between;
  font-size: 2rem;
`;

export const Container = styled.div`
  padding: 5rem 0;
  position: relative;
  min-height: 50rem;
  grid-column: center-start / center-end;
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: repeat(2, minmax(min-content, 56rem));
  @media (max-width: ${TABLET}px) {
    display: flex;
    flex-direction: column;
    padding: 3rem 1rem;
  }
  @media (max-width: ${PHONE}px) {
    padding: 1rem 1rem;
  }
`;

export const Form = styled("form")`
  height: 100%;
  overflow: visible;
  font-size: 1.4rem;
  color: ${Colors.primaryColorDarkest};
  @media (max-width: ${TABLET}px) {
    padding-top: 3rem;
  }
`;

export const Label = styled("label")`
  display: block;
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  padding: 0.5rem 0;
  line-height: 1rem;
  text-transform: uppercase;
`;

export const Input = styled("input")`
  ${inputStyle};
  width: 100%;
`;

export const Textarea = styled("textarea")`
  ${inputStyle};
  height: 12vh;
  width: 100%;
`;

export const HoneyPot = styled("div")`
  display: none;
`;
