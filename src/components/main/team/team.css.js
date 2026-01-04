import styled from 'styled-components';
import Img from 'gatsby-image';
import { Colors } from '../../../constants/theme';
import { Heading3, Heading2, Section } from '../../utils/style';
import breakpoints from '../../../constants/breakpoints';

const margin = '3rem';
const { DESKTOP, PHONE, TABLET } = breakpoints;

export const Container = styled.section`
  padding: 5rem 0rem;
  grid-column: center-start / center-end;
  display: grid;
  min-height: 70rem;
  grid-row-gap: 5rem;
  grid-column-gap: ${margin};
  grid-template-columns: repeat(2, minmax(50rem, 1fr));
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
  span {
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    justify-content: start;
  }
`;

export const Caption = styled(Heading3)`
  z-index: 100;
  position: absolute;
  font-size: 6rem;
  color: white;
`;

export const AvatarOne = styled(Img)`
  grid-column: 1 / 2;
  height: 50rem;
  width: 50rem;
  border-radius: 3px;
    @media (max-width: ${PHONE}px) {
        height: 35rem;
        width: 35rem;
        margin: auto;
  }
`;
export const AvatarTwo = styled(Img)`
  opacity: 1;
  margin-top: ${margin};
  justify-self: end;
  grid-column: 2 / 3;
  height: 50rem;
  width: 50rem; 
  @media (max-width: ${PHONE}px) {
        height: 35rem;
        width: 35rem;
        margin: auto;
  }
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 50rem;
  height: 50rem;
  @media (max-width: ${DESKTOP}px) {
    height: initial;
    align-items: center;
    text-align: initial;
    span {
      margin-bottom: 0;
    }
  }
    @media (max-width: ${PHONE}px) {
        height: 100%;
        width: 100%;
        padding: 0rem 1rem;
  }

  h3 {
    @media (max-width: ${DESKTOP}px) {
      align-self: center;
      justify-self: center;
    }
    font-size: 2.5rem;
    padding: 0rem;
    align-self: auto;
    justify-self: flex-end;
  }
  h4 {
    margin-bottom: 2rem;
    font-size: 2.3rem;
    font-style: italic;
    @media (max-width: ${DESKTOP}px) {
      align-self: center;
      margin-bottom: 1rem;
      justify-self: center;
    }
  }
  p {
    font-size: 2.3rem;
    @media (max-width: ${DESKTOP}px) {
      margin: ${margin} 0;
    }
  }
`;

export const TextBlockSecond = styled(TextBlock)`
  margin: ${margin} 0;
  align-items: flex-end;
  p {
    text-align: end;
    @media (max-width: ${DESKTOP}px) {
      margin: ${margin} 0;
      text-align: initial;
    }
  }
`;
