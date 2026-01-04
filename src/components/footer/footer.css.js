import styled from 'styled-components';
import { Colors } from '../../constants/theme';
import breakpoints from '../../constants/breakpoints';

const { DESKTOP } = breakpoints;

export const Container = styled.div`
  background-color: ${Colors.primaryColorDarken};
  grid-column: full-start / full-end;
  display: grid;
  grid-template-rows: minmax(6rem, max-content) min-content;
  grid-template-columns: 1fr 1fr;

  p {
    max-width: 90%;
  }
  span {
    align-self: center;
    font-size: 2rem;
    background-color: ${Colors.primaryColorDarkest};
    color: white;
    margin-right: auto;
    margin-left: auto;
    text-align: start;
    width: 100%;
    padding: 10rem 5rem;
    @media (max-width: ${DESKTOP}px) {
    padding: 5rem 2rem;
    }
    line-height: 1.5;
  }
  ul {
    list-style: none;
    background-color: ${Colors.primaryColorDarkest};
    padding: 5rem 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    a:link,
    a:visited {
      font-size: 1.4rem;
      color: white;
      text-decoration: none;
      text-transform: uppercase;
      text-align: center;
      padding: 1.5rem;
      display: block;
      transition: all 0.2s;
    }
    a:hover,
    a:active {
      background-color: rgba(0, 0, 0, 0.05);
      transform: translateY(-3px);
    }
  }
`;


export const CopyRight = styled.div`
  grid-column: 1 / -1;
  background-color: ${Colors.primaryColorDarken};
  padding: 2rem auto;
  height: 4rem;
  text-align: center;
  color: white;
  margin-top: 3rem;
`
