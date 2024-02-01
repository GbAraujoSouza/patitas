import styled from 'styled-components';
import { globalColors } from '../../global/globalStyles';

export const NavContainer = styled.nav`
  background-color: ${globalColors.darkBlue};
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 62px;
  color: ${globalColors.white};
  position: sticky;
  bottom: 0;
`;

export const IconWrapper = styled.span<{$pageActive?: boolean;}>`
  position: relative;
  transition: all 0.5s ease-in-out;
  ${(p) =>
    p.$pageActive &&
    `&::after {
    content: '';
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 2px;
    position: absolute;
    background-color: ${globalColors.white};
  }`}
  > svg {
    color: ${globalColors.white};
  }
`;
