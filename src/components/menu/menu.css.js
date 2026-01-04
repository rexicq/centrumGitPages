import styled from 'styled-components';
import posed from 'react-pose';
import { Colors } from '../../constants/theme';
import { toRgba } from '../../helpers/toRgba';
import breakpoints from '../../constants/breakpoints';
const { DESKTOP,  } = breakpoints;

export const Container = styled.div`
  grid-column: full-start / full-end;
  grid-row: 1 / 2;
  display: grid;
  grid-template-columns: 1fr minmax(100px, 70vw) 1fr;
  justify-content: space-around;
  align-content: center;
  background: rgba(255, 255, 255, 0.3);
  z-index: 10;
  @media (max-width: ${DESKTOP}px) {
  grid-template-columns: 1fr minmax(100px, 90vw) 1fr;
  }
  //a {
  //  color: white;
  //  transition: color 0.2s ease;
  //  text-decoration: none;
  //}
`;

export const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      duration: 500,
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-10rem',
    transition: {
      ease: 'easeInOut',
    },
  },
});

export const MobileContainer = styled.div`
  grid-column: center-start / center-end;
  grid-row: 1 / 2;
  display: flex;
  align-content: center;
  z-index: 10;

`;

export const NavWrapper = styled.div`
  font-weight: 400;
  overflow: hidden;
  div { 
    z-index: 100;
    position: fixed;
    width: 6rem;
    height: 6rem;
    background: ${Colors.primaryColor};
    transform: scale(${({ isVisible }) => (isVisible ? 80 : 0)});
    transition: transform 500ms ease-out;
  }
  ul {
    z-index: 10000;
    top: 50%;
    left: 50%;
    fontSize: 10rem;
    transform: translate(-50%, -50%);
    position: fixed;
    display: ${({ isVisible }) => (isVisible ? '' : 'none')};
    li {
      a {  
          text-decoration: none;
         color: white;
        font-size: 5rem;
       }
    }
    }
  }
`;

export const SmallInfo = styled.div`
  grid-column: 1 / -1;
  display: flex;
  left: 0;
  position: ${({ isVisible }) => !isVisible && 'fixed'};
  width: ${({ isVisible }) => !isVisible && '100%'}; ;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid white;
  color: white;
  background-color: ${({ isVisible }) => isVisible ? toRgba({
  hex: Colors.primaryColorDarkest,
  opacity: 0.25,
}) : Colors.primaryColorDarkest};
  font-size: 1.6rem;
  height: 4rem;
      
  @media (max-width: ${DESKTOP}px) {
  height: 3rem;
  }
`;
export const InfoWrapper = styled.div`
  width: 100rem;
  height: 4rem;
  display: flex;
  justify-content: space-around;
  align-content: center;

  span,
  div {
    padding-top: 1.3rem;
  }
`;


export const GridWrapper = styled.div`
  grid-column: 2 / 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
