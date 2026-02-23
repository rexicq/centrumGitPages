import styled from "styled-components";
import Img from "gatsby-image";
import { Colors } from "../../../../constants/theme";
import breakpoints from "../../../../constants/breakpoints";
import React from "react";

const { TABLET } = breakpoints;

export const Back = styled.div`
  height: 20rem;
  width: 30rem;
  background-сolor: white;
  p {
    padding: 1rem;
    line-height: 1.4;
    font-size: 1.5rem;

    @media (max-width: ${TABLET}px) {
      font-size: 2.3rem;
    }
  }
  @media (max-width: ${TABLET}px) {
    height: 30rem;
    width: 45rem;
  }
`;

export const Video = ({ videoSrcURL, videoTitle, className }) => (
  <div className={className}>
    <video
      style={{ objectFit: "fill", backfaceVisibility: "hidden" }}
      src={videoSrcURL}
      title={videoTitle}
      playsinline
      loop
      muted
      autoPlay
      controls
      autohide
      width="100%"
      height="100%"
    />
  </div>
);

export const GIF = styled(Video)`
  backface-visibility: hidden;
  border-radius: 3px;
  height: 20rem;
  width: 30rem;

  @media (max-width: ${TABLET}px) {
    height: 30rem;
    width: 45rem;
    padding-top: 5rem;
  }
`;

export const Container = styled.div`
  width: 30rem;
  position: relative;
  margin: 2rem 3rem;
  height: 20rem;
  font-size: 1.5rem;
  text-align: center;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  justify-items: end;
  align-items: flex-end;
  transition: transform 0.3s;
  :hover {
    transform: translateY(-1rem) scale(1.03);
    box-shadow: 0 1rem 1rem 1rem rgba(1, 1, 1, 0.15);
  }

  @media (max-width: ${TABLET}px) {
    margin: 2rem 0rem;
  }

  @media (max-width: ${TABLET}px) {
    height: 30rem;
    width: 45rem;
  }
`;

export const Avatar = styled(Img)`
  height: 20rem;
  width: 30rem;
  border-radius: 3px;
  @media (max-width: ${TABLET}px) {
    height: 30rem;
    width: 45rem;
  }
`;
export const TitleWrapper = styled.div`
  padding: 1rem 2rem;
  width: 70%;
  background-color: ${Colors.primaryColorDarken};
  position: absolute;
  transform: translateY(50%);
  z-index: 100;

  @media (max-width: ${TABLET}px) {
    font-size: 3.5rem;
  }
  color: white;
`;

export const SVGRect = styled.svg`
  position: absolute;
  transform: scale(1.1);
  height: 100%;
  //rect {
  //  width: 30rem;
  //  height: 100%;
  //  fill: transparent;
  //  stroke: blue;
  //  stroke-width: 2px;
  //}
`;
