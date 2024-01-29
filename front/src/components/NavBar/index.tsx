import { Icon } from '@iconify/react/dist/iconify.js';
import { IconWrapper, NavContainer } from './style';

interface NavBarProp {
  currentPage: string;
}

const NavBar = ({ currentPage }: NavBarProp) => {
  return (
    <NavContainer>
      <IconWrapper $pageActive={currentPage === 'home'}>
        <Icon icon="uil:home-alt" width="30" height="30" />
      </IconWrapper>
      <IconWrapper $pageActive={currentPage === 'search'}>
        <Icon icon="uil:search" width="30" height="30" />
      </IconWrapper>
      <IconWrapper $pageActive={currentPage === 'shopping'}>
        <Icon icon="lucide:shopping-bag" width="30" height="30" />
      </IconWrapper>
      <IconWrapper $pageActive={currentPage === 'profile'}>
        <Icon icon="tdesign:user-1" width="30" height="30" />
      </IconWrapper>
    </NavContainer>
  );
};

export default NavBar;
