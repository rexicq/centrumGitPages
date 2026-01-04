import styled from 'styled-components';
import { Colors } from '../../constants/theme';

export const Button = styled.button`
  -webkit-appearance: none;
  background-color: #fff;
  width: 100%;
  height: 100%;
  border: none;
  color: ${Colors.primaryColorDarkest};
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  font-family: inherit;
  font-size: 1.3rem;
  font-weight: 500;
  padding: ${({padding}) => padding};
  text-transform: uppercase;
  transition: 0.2s background-color ease;
  &:active,
  &:focus {
    outline: none;
  }
  &:hover {    
  border-bottom: 1px solid ${Colors.primaryColorLighten};
  }
  & + & {
    margin-left: 1rem;
  }
`;

export const Close = styled.button`
  -webkit-appearance: none;
  background-color: transparent;
  outline: none;
  border: none;
  font-family: inherit;
  font-size: 6rem;
  font-weight: normal;
  line-height: 4rem;
  position: absolute;
  top: 0rem;
  right: 0rem;
  color: black;
`;
