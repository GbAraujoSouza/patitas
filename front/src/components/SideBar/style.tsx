import styled from 'styled-components';
import { globalColors } from '../../global/globalStyles';
import { Link } from 'react-router-dom';

interface SideBarContainerProp {
  sidebar: any;
}

export const SideBarContainer = styled.div<SideBarContainerProp>`
  background-color: ${globalColors.lightBlue};
  position: fixed;
  height: calc(100% - 62px);
  top: 0;
  right: 0;
  width: 59.2%;
  right: ${(props) => (props.sidebar ? '0' : '-100%')};
  transition: ease-in 0.4s;
  background-image: url('/src/assets/menu-bg.png');
  background-repeat: no-repeat;
  background-position: top right;
  border-radius: 18px 0 0 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 1.625rem;
`;

export const SideBarProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 98px;
    height: 98px;
    border-radius: 12px;
  }
  p:first-of-type {
    font-weight: bold;
    text-decoration: underline;
    color: ${globalColors.darkBlue};
  }
  p:last-of-type {
    font-size: 0.75rem;
    color: ${globalColors.darkOrange};
    text-decoration: underline;
  }
`;

export const UserMenuOptions = styled.nav`
  ul {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1.25rem;
    list-style: none;
  }
`;

export const UserMenuOption = styled.li`
  display: flex;
  gap: 0.875rem;
  color: ${globalColors.darkBlue};
  align-items: center;
  &:last-child {
    align-self: center;
  }
  &:first-of-type {
    align-self: start;
  }
`;

export const LinkIcon = styled(Link)`
  /* remove the purple outline of the Link tag */
  color: ${globalColors.darkBlue};
`;

export const Divider = styled.hr`
  border-top: 1px solid ${globalColors.darkBlue};
  width: calc(100% + 3.1rem);
  margin: .5rem 0;
`;

export const AppMenuOptions = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1.25rem;
    list-style: none;
`;

export const AppMenuOption = styled.li`
  display: flex;
  gap: 0.875rem;
  color: ${globalColors.darkBlue};
  align-items: start;
  white-space: nowrap;
`;