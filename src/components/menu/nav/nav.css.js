import styled from 'styled-components';
import { Colors } from '../../../constants/theme';

export const Container = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    color: white;
    transition: 0.4s ease-in-out;
    a {
    text-decoration: none;
    color: white;
    }
  }
`;

export const WrapperEl = styled.li`
  ${({ path }) => path && 'transform: scale(0.95);' };
  background-color: ${({ path }) => path && Colors.primaryColor};
  padding: 1rem 2rem;
  margin-right: 1rem;
  text-transform: uppercase;
  font-size: 2rem;
  transition: 0.4s ease-in-out;
  font-weight: 500;
 :hover {
      background-color: ${({ path }) => path ? 'white' : Colors.primaryColor};
      box-shadow: 0.5rem 7px 1rem 0 rgba(0,0,0,0.4);
      transform: translateY(-3px);
        a {
    color: ${({ path }) => path ? Colors.primaryColor : 'white'};
    transition: color 0.2s ease;
    text-decoration: none;
  }
    
    }
    

  :active {
    transform: scale(0.95);
    box-shadow: 0px 2px 1px 0 rgba(0,0,0,0.7);
  }
`;
