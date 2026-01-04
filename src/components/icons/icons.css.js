import styled from 'styled-components';
import { Colors } from '../../constants/theme';

export const Icons = styled.div`
  display: flex;
  align-items: center;
  grid-column: 1 / -1;
  height: ${({height}) => height};
  justify-content: center;
  font-size: 2.5rem;
  a {
  margin: 3rem 2rem;
    color: white;
  :hover {
    color: ${Colors.primaryColorDarkest};
  }
  }
`
