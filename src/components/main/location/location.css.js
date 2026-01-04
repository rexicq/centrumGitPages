import styled from 'styled-components';
import { Colors } from '../../../constants/theme';

export const Container = styled.div`
  grid-column: 1 / -1;
  display: grid;
  height: 60vh;
  width: 100%;
`;

export const Badge = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
    border: solid 5px ${({hovered}) => hovered ? Colors.primaryColorDarkest :'red'};
    display: flex;
    justify-content: center;
    align-items: center;
  p {
    font-size: 5rem;
    color: ${({hovered}) => hovered ? Colors.primaryColorDarkest : 'red'};
  }
  ::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border:  ${({hovered}) => hovered && '6px solid transparent;' }
    border-top-color:  ${Colors.primaryColorDarkest};
   transform: translateY(-28px);
  } 
`

export const TextBlock = styled.div`
  padding: 1rem;
  position: absolute;
  color: white;
  width: 8rem;
  bottom: 100%;
  transform: translateY(-8px);
  background-color: ${Colors.primaryColorDarkest};
  bottom: 100%;
  font-size: 2rem;
  margin-left: -18px;
`
