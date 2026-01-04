import styled from 'styled-components';
import { Colors } from '../../constants/theme';

export const SpanLines = styled.span`
  //:hover &::after {
  //  transform: translateY(1rem);
  //}
  display: block;
  border: none;
  border-radius: 0;
  background-color: ${({ isVisible }) => (isVisible ? 'transparent' : '#fff')};
  height: 2px;
  width: 4.5rem;
  margin-top: 3.5rem;
  margin-left: 1.3rem;
  transition: all 0.1s;
  &::before,
  &::after {
    background-color: ${({ isVisible }) => (isVisible ? Colors.primaryColor : '#fff')};
    height: 2px;
    width: 4.5rem;
    content: '';
    display: block;
    transition: all 0.2s;
  }
  &::before {
    transform: ${({ isVisible }) =>
      isVisible ? 'rotate(135deg)' : 'translateY(-1.5rem)'};
  }
  &::after {
    transform: ${({ isVisible }) =>
      isVisible ? 'rotate(-135deg)' : 'translateY(1.3rem)'};
  }
`;
// &__checkbox:checked + &__btn &__icon {
//   background-color: transparent;
// }
// &__checkbox:checked + &__btn &__icon::before {
//   transform: rotate(135deg);
// }
// &__checkbox:checked + &__btn &__icon::after {
//   transform: rotate(-135deg);
// }
export const MenuButton = styled.div`
  height: 7rem;
  width: 7rem;
  border-radius: 50%;
  background-color: ${({ isVisible }) => (isVisible ? 'white' : Colors.primaryColorDarkest)};
  text-decoration: none;
  position: fixed;
  right: 3rem;
  top: 5rem;
  border: none;
  z-index: 10000;
  &:hover ${SpanLines} {
    &::before {
      transform: ${({ isVisible }) => (isVisible ? '' : 'translateY(-1.2rem)')};
    }
    &::after {
      transform: ${({ isVisible }) => (isVisible ? '' : 'translateY(1rem)')};
    }
  }
`;
