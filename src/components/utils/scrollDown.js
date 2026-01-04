import styled, { keyframes } from 'styled-components';
import { Colors } from '../../constants/theme';
import { Link } from 'gatsby';

const moveDown = keyframes`
  0% {
    opacity: 0;
  transform: rotate(-45deg) translate(0, 0);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: rotate(-45deg) translate(-20px, 20px);
  }
`;

export const ScrollButton = styled(Link)`
  color: ${props => props.color};
  transform: rotate(-45deg);
  grid-row: 3 / 4;
  grid-column: 2 / 3;
  justify-self: center;
  align-self: end;
  cursor: pointer;
  width: 2.5rem;
  height: 2.5rem;
  border-left: solid 1px;
  border-bottom: solid 1px;
  border-width: ${({borderwidth}) => borderwidth || 1}px;
  animation-name: ${moveDown};
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
`;

export const ScrollTop = styled(Link)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.7);
  width: 50px;
  height: 50px;
  display: block;
  text-decoration: none;
  border-radius: 35px;
  transition: all 0.3s ease;
  z-index: 1000;
  
  svg {
    color: #fff;
    margin: 0;
    position: relative;
    left: 16px;
    top: 13px;
    font-size: 19px;
    transition: all 0.3s ease;:
  }
  :hover {
    background: rgba(0, 0, 0, 0.9);
    svg {
    top: 5px;
    }
  }
  
`;

ScrollButton.defaultProps = {
  borderwidth: 4,
  color: Colors.primaryColorDarkest,
};
