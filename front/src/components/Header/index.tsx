import { Container, HeaderAddress, Image } from './style';
import { Icon } from '@iconify/react';

const Header = () => {
  return (
    <Container>
      <Image src={'/src/assets/logo.svg'} alt="logo-patitas" />
      <HeaderAddress>
        <Icon icon="ph:map-pin" />
        <span>
          Receber em <br />
          Rua Dionísio, 72 - apt 402
        </span>
        <Icon icon="ei:chevron-down" width="30" height="30" />
      </HeaderAddress>
    </Container>
  );
};

export default Header;
