import { AddressInfo, Container, HeaderAddress, Image } from './style';
import { Icon } from '@iconify/react';

interface HeaderProps {
  showAddress?: boolean;
  userAddress?: string;
}

const Header = ({showAddress, userAddress}: HeaderProps) => {
  return (
    <Container>
      <Image src={'/logo-header.svg'} alt="logo-patitas" />
      {showAddress && <HeaderAddress>
        <Icon icon="ph:map-pin" width="30" height="30" />
        <AddressInfo>
          <span>Receber em</span>
          <span>{userAddress}</span>
        </AddressInfo>
        <Icon icon="ei:chevron-down" width="35" height="35" />
      </HeaderAddress>}
    </Container>
  );
};

export default Header;
