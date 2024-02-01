import styled from 'styled-components';
import { globalColors } from '../../global/globalStyles';

interface OffSideBarProps {
  sidebar: boolean;
}

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

export const IconWrapper = styled.span<{ $pageActive?: boolean }>`
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

export const OffSideBar = styled.div<OffSideBarProps>`
  height: 100%;
  position: fixed;
  top: 0;
  left: ${(props) => (props.sidebar ? '0' : '100%')};
  width: 16rem;
  z-index: 1;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
`;
