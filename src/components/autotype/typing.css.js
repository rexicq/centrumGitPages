import styled from 'styled-components';
import { Colors, primaryColor } from '../../constants/theme';
import Typist from 'react-typist';
import breakpoints from '../../constants/breakpoints';

const { TABLET, DESKTOP, PHONE } = breakpoints;

export const Container = styled.div`
  display: flex;
  justify-self: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  @media (max-width: ${TABLET}px) {
  font-size: 2.5rem;
  }
  
`;
export const Check = styled(Typist)`
  padding-left: 1rem;
  display: flex;
  cursor: pointer;
  font-weight: 500;
  border-bottom: 6px solid ${Colors.primaryColor};
`;


// export const Wrapper = styled.div`
//   font-size: 3rem;
//   font-weight: 500;
//   color: white;
//   border-bottom: 6px solid ${primaryColor}; `
