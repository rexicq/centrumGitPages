import styled from 'styled-components';
import { BackgroundSection, Button, AnimatedContainer } from '../../utils';

import { Heading2 } from '../../utils/style';
import posed from 'react-pose';
import breakpoints from '../../../constants/breakpoints';

const { TABLET } = breakpoints;

export const StyledSpan = styled.span`
text-decoration: none;
`

export const Wrapper = styled(AnimatedContainer)`
  @media (max-width: 810px) {
    margin: 0 auto;
  }
  min-height: 50rem;
  position: relative;
  grid-column: 2 / span 8;
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(33rem, 1fr));
  justify-content: center;
  align-content: center;
  justify-items: center;
`;

export const Title = styled(Heading2)`
  margin-left: 3rem;
  grid-column: 1 / -1;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 30rem;
  margin-right: 2rem;
  @media (max-width: ${TABLET}px) {
  margin-right: 0rem;
  }
  justify-content: flex-end;
  align-items: center;
  button {
    font-size: 2rem;
    width: 100%;
    height: 5rem;
  };
`;
