import styled, { css } from "styled-components";
import { Colors, Fonts } from "../../constants/theme";
import { BackgroundSection } from "./BackgroundImg";
import breakpoints from "../../constants/breakpoints";

const { TABLET, DESKTOP, PHONE } = breakpoints;
export const Section = css`
  padding: 5rem 0;
  grid-column: full-start / full-end;
  grid-template-columns: minmax(6rem, 1fr) repeat(8, minmax(min-content, 14rem)) minmax(
      6rem,
      1fr
    );
`;

export const Container = styled(BackgroundSection)`
  ${Section};
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  
  // &::before {
  //   background-image: ${({ overlayColor }) =>
    overlayColor && "none !important"}
  //   opacity: unset !important;
  // }  
  // &::after {
  //   background-attachment: fixed;
  // }
`;

export const HoryzontalLine = styled.span`
  width: 80%;
  min-height: 2px;
  background-color: ${props => props.color || "darkblue"};
  margin-bottom: 2rem;
  padding: 0 -3rem;
`;

export const Heading1 = styled.h1`
  text-align: center;
  font-family: ${Fonts.main};
  font-weight: 700;
  padding: ${({ padding }) => padding};
  text-transform: uppercase;
  margin-bottom: ${({ marginBottom }) => marginBottom}rem;
  font-size: 5rem;
  @media (max-width: ${DESKTOP}px) {
    font-size: 3.5rem;
  }
  color: ${({ color }) => color};
  line-height: 1.5;
  letter-spacing: 1.2px;
`;

export const Heading2 = styled.h2`
  text-align: center;
  font-family: ${Fonts.main};
  font-weight: ${({ fontweight }) => fontweight || "300"};
  letter-spacing: 5px;
  padding: ${({ padding }) => padding};
  text-transform: ${({ transform }) => transform};
  margin: ${({ margin }) => margin};
  font-size: ${({ fontsize }) => fontsize || "4"}rem;
  @media (max-width: ${TABLET}px) {
    font-size: ${({ fontsizeM }) => fontsizeM || "3"}rem;
  }
  color: ${({ color }) => color};
  line-height: 1.4;
`;

export const Heading3 = styled.h3`
  font-family: ${Fonts.main};

  height: ${({ height }) => height || "auto"};
  font-weight: 400;
  text-transform: uppercase;
  padding: ${({ padding }) => padding || "1rem 1rem"};
  line-height: ${({ lineheight }) => lineheight || 1};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
  font-size: 2rem;
  @media (max-width: ${DESKTOP}px) {
    font-size: 1.8rem;
    height: "auto";
  }
  @media (max-width: ${TABLET}px) {
    font-size: 1.7rem;
    letter-spacing: initial;
  }
  @media (max-width: ${PHONE}px) {
    font-size: 1.6rem;
  }
  color: ${({ color }) => color || Colors.primaryColorDarkest};
`;

export const DefaultText = styled.span`
  font-size: 2.3rem;
`;

export const DefaultP = styled.p`
  color: ${({ color }) => color || "white"};
  font-size: ${({ fontSize }) => fontSize || "3rem"};
  padding: ${({ padding }) => padding};
  line-height: 1.5;
  letter-spacing: 0.02em;
`;

Heading1.defaultProps = {
  color: "white",
  marginBottom: "3rem"
};

Heading2.defaultProps = {
  transform: "uppercase",
  color: Colors.primaryColorDarkest,
  margin: 0
};
