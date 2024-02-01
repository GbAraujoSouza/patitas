import { Icon } from '@iconify/react/dist/iconify.js';
import { IconWrapper, NavContainer, OffSideBar } from './style';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import SideBar from '../SideBar';

interface NavBarProp {
  currentPage: string;
}

const NavBar = ({ currentPage }: NavBarProp) => {
  const [sideBar, setSideBar] = useState(false);

  const sideBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (sideBarRef.current && !sideBarRef.current.contains(event.target as Node)) {
        setSideBar(!sideBar);
      }
    };

    if(sideBar) {
      document.addEventListener('click', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [sideBar])

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
      <SideBar active={sideBar} ref={sideBarRef} />
      <OffSideBar sidebar={sideBar} onClick={() => setSideBar(!sideBar)}></OffSideBar>
    </NavContainer>
  );
};

export default NavBar;
