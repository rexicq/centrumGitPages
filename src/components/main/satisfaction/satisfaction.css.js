import styled from 'styled-components';
import { BackgroundSection } from '../../utils';

export const Container = styled(BackgroundSection)`
  grid-column: 1 / -1;
  height: 100vh;
  display: grid;
  &::before {
    background-image: none !important;
    opacity: unset !important;
  }
  &::after {
    background-attachment: fixed;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
