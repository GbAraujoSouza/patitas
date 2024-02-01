import { Icon } from '@iconify/react/dist/iconify.js';
import { IconWrapper, NavContainer, OffSideBar } from './style';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import SideBar from '../SideBar';

interface NavBarProp {
  currentPage: string;
}

const NavBar = ({ currentPage }: NavBarProp) => {
  const [sideBar, setSideBar] = useState(false);


  return (
    <NavContainer>
      <Link to={'/'}>
        <IconWrapper $pageActive={currentPage === 'home'}>
          <Icon icon="uil:home-alt" width="30" height="30" />
        </IconWrapper>
      </Link>
      <Link to={'/search'}>
        <IconWrapper $pageActive={currentPage === 'search'}>
          <Icon icon="uil:search" width="30" height="30" />
        </IconWrapper>
      </Link>
      <Link to={'/cart'}>
        <IconWrapper $pageActive={currentPage === 'shopping'}>
          <Icon icon="lucide:shopping-bag" width="30" height="30" />
        </IconWrapper>
      </Link>
      <IconWrapper
        $pageActive={currentPage === 'profile'}
        onClick={() => setSideBar(!sideBar)}
      >
        <Icon icon="tdesign:user-1" width="30" height="30" />
      </IconWrapper>
      <SideBar active={sideBar} />
      <OffSideBar sidebar={sideBar} onClick={() => setSideBar(!sideBar)}></OffSideBar>
    </NavContainer>
  );
};

export default NavBar;
