import styled from "styled-components";
import { Colors } from "../../constants/theme";
import breakpoints from "../../constants/breakpoints";

const { TABLET } = breakpoints;

export const Button = styled.button`
  display: block;
  background: ${({ color }) => color};
  border-radius: 0.5rem;
  color: ${"white"};
  font-size: ${({ size }) => size || "2rem"};
  font-weight: ${({ weight }) => weight || 500};
  letter-spacing: 0.2em;
  line-height: 2;
  margin: ${({ margin }) => margin || "0rem"};
  margin-top: 2rem;
  :disabled {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
  }
  @media (max-width: ${TABLET}px) {
    margin-top: 0rem;
  }
  max-width: 100%;
  overflow: hidden;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  span {
    position: relative;
    z-index: 10;
  }
  ::before,
  ::after {
    content: " ";
    position: absolute;
    z-index: 1;
  }
  :active,
  :focus,
  :hover:not([disabled]) {
    cursor: pointer;
    outline: none;
    ::after {
      animation: 500ms bottomHalf ease-out 1 forwards;
      background: ${Colors.primaryColorDarkest};
      z-index: 1;
    }
    ::before {
      animation: 500ms topHalf ease-in 1 forwards;

      background: ${({ color }) => color};
      z-index: 2;
    }
  }
  @keyframes bottomHalf {
    0% {
      border-radius: 50% 50% 0 0;
      bottom: -10px;
      height: 10px;
      left: calc(50% - 115px);
      width: 1px;
    }
    10% {
      opacity: 1;
    }
    15% {
      border-radius: 50% 50% 0 0;
      height: 10px;
      left: 0;
      width: 100%;
    }
    50% {
      border-radius: 0;
      bottom: 0;
      height: 50%;
    }
    51% {
      height: 100%;
    }
    100% {
      border-radius: 0;
      bottom: 0;
      height: 100%;
      left: 0;
      opacity: 1;
      width: 100%;
    }
  }
  @keyframes topHalf {
    0% {
      height: 50%;
      left: 0;
      top: 0;
      width: 100%;
    }
    50% {
      top: 0;
      height: 50%;
      left: 0;
      width: 100%;
    }
    85% {
      border-radius: 0 0 50% 50%;
      height: 10px;
      left: 0;
      width: 100%;
    }
    100% {
      border-radius: 0 0 50% 50%;
      top: -10px;
      height: 10px;
      left: calc(50% - 5px);
      width: 10px;
    }
  }
`;
Button.defaultProps = {
  color: Colors.primaryColorDarken,
  size: "1rem",
  weight: 500,
  height: "3.5rem",
  width: "50%"
};
