import React, { useRef } from "react";
import BackgroundImage from "gatsby-background-image";
import styled from "styled-components";
const StyledBackground = styled(BackgroundImage)`
  &::before,
  &::after {
    filter: invert(
      ${({ isDarken }) => {
        return isDarken ? "40%" : "0%";
      }}
    );
  }
`;
export const BackgroundSection = ({
  img,
  ref,
  styleName,
  title,
  children,
  overlayColor,
  zIndex,
  height,
  filter,
  id,
  isDarken,
  width
}) => {
  const bgRef = useRef(ref);
  console.log(bgRef);
  return (
    <StyledBackground
      ref={bgRef}
      isDarken={isDarken}
      className={`${styleName}`}
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundPositionX: "center",
        backgroundPositionY: "center",
        backgroundRepeat: "no-repeat",
        zIndex,
        height,
        width
      }}
      id={id}
      backgroundColor={overlayColor}
      fluid={img.childImageSharp.fluid}
    >
      {children}
    </StyledBackground>
  );
};

BackgroundSection.defaultProps = {
  styleName: "default-background",
  overlayColor: ""
};
