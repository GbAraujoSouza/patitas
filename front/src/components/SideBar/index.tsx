import { Icon } from '@iconify/react/dist/iconify.js';
import {
  SideBarContainer,
  SideBarProfile,
  UserMenuOptions,
  UserMenuOption,
  Divider,
  AppMenuOptions,
  AppMenuOption,
  LinkIcon,
} from './style';
import { Link } from 'react-router-dom';

interface SideBarProps {
  active: boolean;
}

const SideBar = ({ active }: SideBarProps) => {
  return (
    <SideBarContainer sidebar={active}>
      <UserMenuOption>
        <LinkIcon to="/profile">
          <Icon icon="mi:settings" width="30" height="30" />
        </LinkIcon>
      </UserMenuOption>
      <SideBarProfile>
        <img src="/foto-perfil.png" alt="foto de perfil" />
        <p>Olá, Rayssa</p>
        <p>Sair da conta</p>
      </SideBarProfile>
      <UserMenuOptions>
        <ul>
          <UserMenuOption>
            <Icon icon="gg:list" width="24" height="24" />
            Departamentos
          </UserMenuOption>
          <UserMenuOption>
            <Icon icon="tdesign:heart" width="24" height="24" />
            Favoritos
          </UserMenuOption>
          <UserMenuOption>
            <Icon icon="ph:shopping-bag" width="24" height="24" />
            Meus pedidos
          </UserMenuOption>
          <UserMenuOption>
            <Icon icon="ci:note-edit" width="24" height="24" />
            Lista de Compras
          </UserMenuOption>
          <UserMenuOption>
            <Icon icon="ph:chat-dots" width="24" height="24" />
            Mensagens
          </UserMenuOption>
          <UserMenuOption>Suas Avaliações</UserMenuOption>
        </ul>
      </UserMenuOptions>
      <Divider />
      <AppMenuOptions>
        <AppMenuOption>Fale Conosco</AppMenuOption>
        <AppMenuOption>Seja um Vendedor</AppMenuOption>
        <AppMenuOption>
          <Link to={'/fidelidade'}>Regras de Fidelidade</Link>
        </AppMenuOption>
        <AppMenuOption>Termos de uso</AppMenuOption>
        <AppMenuOption>Políticas de privacidade</AppMenuOption>
      </AppMenuOptions>
    </SideBarContainer>
  );
};

export default SideBar;
