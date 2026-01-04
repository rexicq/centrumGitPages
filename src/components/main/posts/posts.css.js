import styled from 'styled-components';
import Img from 'gatsby-image';
import breakpoints from '../../../constants/breakpoints';
import { AnimatedContainer } from '../../utils';

const margin = '3rem';
const { DESKTOP, PHONE, TABLET } = breakpoints;


export const ButtonWrapper = styled.div`
  button {
    font-size: 2rem;
  };
`

export const Container = styled(AnimatedContainer)`
  position: relative;
  min-height: 50rem;
  padding: 5rem 0rem;
  grid-column: center-start / center-end;
  display: grid;
  grid-row-gap: 5rem;
  grid-column-gap: ${margin};
  grid-template-columns: repeat(4, minmax(25rem, 1fr));
  line-height: 1.4;
  margin: 0 auto;
  @media (max-width: ${DESKTOP}px) {
    grid-template-columns: auto;
  }
  @media (max-width: ${TABLET}px) {
    padding: 2rem 1rem;
      grid-row-gap: 2rem;
  }
  
  @media (max-width: ${PHONE}px) {
    grid-column: full-start /  full-end;
    padding: 1rem 1rem;
      grid-row-gap: 2rem;
  }
`;


export const Post = styled.div``