import posed, {PoseGroup} from 'react-pose';
import styled from 'styled-components';
import React from 'react';

import { Colors } from '../../../constants/theme';

export const Container = styled.div`
  height: 7rem;
  width: 13rem;
  display: flex;
  padding: ${({ padding }) => padding};
  flex-direction: column;
  position: relative;
  zindex: 200;
`;

export const SVG = styled.svg`
  width: ${props => props.width}; //110px;
  height: ${props => props.height}; //29px;
  stroke: ${props => props.stroke}; //blue
  position: absolute;
  z-index: ${props => props.zIndex};
`;

export const AbsoluteCase = styled.div`
  position: absolute;
  width: ${({width}) => width || 'initial'};
  height: ${({height}) => height || 'initial'};
  margin-top: ${({marginTop}) => marginTop || 'initial'};
`;

SVG.defaultProps = {
  width: '110px',
  height: '29px',
  stroke: Colors.colorGreyLight1,
  zIndex: 1,
};
