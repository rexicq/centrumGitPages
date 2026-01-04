import styled from 'styled-components';
import breakpoints from '../../constants/breakpoints';

const { TABLET, PHONE } = breakpoints;

export const Container = styled.div`

  display: grid;
  grid-template-rows: 10rem calc(100vh - 10rem) min-content 1fr repeat(
      4,
      min-content
    );
  grid-template-columns:
    [full-start] minmax(6rem, 1fr)
    [center-start] repeat(8, [col-start] minmax(min-content, 14rem) [col-end])
    [center-end] minmax(6rem, 1fr) [full-end];
    
  @media (max-width: ${TABLET}px) {
      grid-template-columns:
    [full-start] minmax(3rem, 1fr)
    [center-start] repeat(8, [col-start] minmax(min-content, 10rem) [col-end])
    [center-end] minmax(3rem, 1fr) [full-end];
  }
  
  @media (max-width: ${PHONE}px) {
      grid-template-columns:
    [full-start] 1fr
    [center-start] repeat(4, [col-start] 8rem [col-end])
    [center-end] 1fr [full-end];
  }
  ${({header}) => {
  return (header==="small" && 'grid-template-rows: 10rem calc(60vh - 10rem) min-content 1fr repeat(3,min-content)')
}

}};
`;
