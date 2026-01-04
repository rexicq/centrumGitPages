import styled from 'styled-components';
import { Heading2 } from '../utils/style';
import Img from 'gatsby-image/withIEPolyfill'
import breakpoints from '../../constants/breakpoints';

const { TABLET, DESKTOP, PHONE } = breakpoints;

export const FlexWrapper = styled.div`
  @media (max-width: ${PHONE}px) {
 grid-column: 2 / 3;
  }
 grid-column: 2 / 10;
`

export const Container = styled.div`

  grid-column: 1 / -1;
  background-color: ${({color}) => color  || '#abb2c5'};
  padding: 5rem 0;
  display: grid;
  grid-template-columns: minmax(6rem, 1fr) [center-start] repeat(8, minmax(min-content, 14rem)) [center-end] minmax(6rem, 1fr);
  @media (max-width: ${DESKTOP}px) {
    padding: 2rem 0rem;
  }
  @media (max-width: ${TABLET}px) {
    padding: 1rem 0rem;
   grid-template-columns:  minmax(2rem, 1fr) [center-start] repeat(8, minmax(min-content, 8rem)) [center-end]  minmax(2rem, 1fr);
  }

  @media (max-width: ${PHONE}px) {
    padding: 1rem 0rem;
   grid-template-columns:  minmax(2rem, 1fr) [center-start] 90vw [center-end]  minmax(2rem, 1fr);
  }

`

export const WrapperDiag = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 5rem;
    @media (max-width: ${PHONE}px) {
  grid-template-columns: 3fr 2fr;
  grid-column-gap: 1rem;
  }
`

export const About = styled.div`
  grid-column: 1 / 2;
  font-size: 2.5rem;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ImgBlock = styled(Img)`
  height: 30rem;
  width: 100%;
  grid-column: 2 / 3;
  margin: 0px auto;
`

export const HeadTitle = styled(Heading2)`
  margin: auto;
  text-align: center;
    padding: 5rem 2rem;
  @media (max-width: ${DESKTOP}px) {
    padding: 2rem 2rem;
  }
  @media (max-width: ${TABLET}px) {
    padding: 0rem 0rem;
  letter-spacing: initial;
  }
`
