import {
  Container,
  ProfileImg,
  ConfigsContainer,
  Config,
  ConfigText,
  StyledParagrath,
  UserConfigInfo,
  BackLink,
  BackIconWrapper,
} from './style';
import { Icon } from '@iconify/react/dist/iconify.js';

const Perfil = () => {
  return (
    <Container>
      <BackLink to="/">
        <BackIconWrapper>
          <Icon icon="tabler:chevron-left" width="30" height="30" />
        </BackIconWrapper>
        <span>Voltar</span>
      </BackLink>
      <ProfileImg src="/src/assets/foto-perfil.png" />
      <StyledParagrath>Configurações de Perfil</StyledParagrath>
      <ConfigsContainer>
        <Config>
          <ConfigText>
            <span>Alterar foto de usuário</span>
          </ConfigText>
          <Icon icon="tabler:chevron-right" width="30" height="30" />
        </Config>
        <Config>
          <ConfigText>
            <span>Alterar nome de usuário</span>
            <UserConfigInfo>Rayssa</UserConfigInfo>
          </ConfigText>
          <Icon icon="tabler:chevron-right" width="30" height="30" />
        </Config>
        <Config>
          <ConfigText>
            <span>Email</span>
            <UserConfigInfo>rayssa@gmail.br</UserConfigInfo>
          </ConfigText>
          <Icon icon="tabler:chevron-right" width="30" height="30" />
        </Config>
        <Config>
          <ConfigText>
            <span>Trocar de senha</span>
            <UserConfigInfo>*************</UserConfigInfo>
          </ConfigText>
          <Icon icon="tabler:chevron-right" width="30" height="30" />
        </Config>
        <Config>
          <ConfigText>
            <span>Meus endereços</span>
            <UserConfigInfo>R.Dionísio, 72 - RJ</UserConfigInfo>
          </ConfigText>
          <Icon icon="tabler:chevron-right" width="30" height="30" />
        </Config>
        <Config>
          <ConfigText>
            <span>Cartões de crédito</span>
            <UserConfigInfo>Mastercard-***</UserConfigInfo>
          </ConfigText>
          <Icon icon="tabler:chevron-right" width="30" height="30" />
        </Config>
        <Config>
          <ConfigText>
            <span>Alterar informações do Pet</span>
          </ConfigText>
          <Icon icon="tabler:chevron-right" width="30" height="30" />
        </Config>
        <Config>
          <ConfigText>
            <span>Excluir conta</span>
          </ConfigText>
          <Icon icon="tabler:chevron-right" width="30" height="30" />
        </Config>
      </ConfigsContainer>
    </Container>
  );
};

export default Perfil;
