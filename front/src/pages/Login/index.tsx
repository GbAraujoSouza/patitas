import {
  ButtonsContainer,
  FormButton,
  FormButtonLink,
  FormPageContainer,
  InputContainer,
  StyledForm,
  StyledLabel,
} from './style';

function Login() {
  return (
    <FormPageContainer>
      <img src="/public/logo-formularios.png" alt="Logo patitas" />
      <img src="/public/login-img.png" alt="patinhas de cachorro" />
      <StyledForm action="">
        <StyledLabel htmlFor="login">Login</StyledLabel>
        <InputContainer>
          <img src="/icons/icone-gato.svg" alt="" width={24} height={24} />
          <input type="text" id="login" required placeholder="Digite sua ..." />
        </InputContainer>

        <StyledLabel htmlFor="senha">Senha</StyledLabel>
        <InputContainer>
          <img src="/icons/icone-senha.svg" alt="" />
          <input
            type="password"
            id="senha"
            required
            placeholder="Digite sua ..."
          />
        </InputContainer>
        <a href="">Esqueceu sua senha?</a>
        <ButtonsContainer>
          <FormButton type="submit">
            <FormButtonLink to={'/'}>Entrar</FormButtonLink>
          </FormButton>
          <FormButton type="submit">
            <FormButtonLink to={'/cadastro'}>Cadastrar</FormButtonLink>
          </FormButton>
        </ButtonsContainer>
      </StyledForm>
    </FormPageContainer>
  );
}

export default Login;
