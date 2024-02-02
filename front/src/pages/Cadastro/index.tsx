import {
  InputContainer,
  StyledForm,
  FormPageContainer,
  ButtonsContainer,
  FormButton,
  FormButtonLink,
} from '../Login/style';
import {
  CheckMark,
  InputCheckbox,
  LogoCadastro,
  StyledCheckboxLabel,
} from './style';

const Cadastro = () => {
  return (
    <FormPageContainer>
      <LogoCadastro src="/public/logo-formularios.png" alt="Logo patitas" />
      <StyledForm action="">
        <InputContainer>
          <img
            src="/icons/icone-nome.svg"
            alt="icone nome"
            width={24}
            height={24}
          />
          <input type="text" id="nome" required placeholder="Nome ..." />
        </InputContainer>
        <InputContainer>
          <img src="/icons/icone-cpf.svg" alt="icone cpf" />
          <input type="number" id="cpf" required placeholder="CPF ..." />
        </InputContainer>

        <InputContainer>
          <img src="/icons/icone-email.svg" alt="icone email" />
          <input type="email" id="email" required placeholder="E-mail ..." />
        </InputContainer>

        <InputContainer>
          <img src="/icons/icone-senha.svg" alt="icone senha" />
          <input type="password" id="senha" required placeholder="Senha ..." />
        </InputContainer>

        <InputContainer>
          <img src="/icons/icone-senha.svg" alt="icone senha" />
          <input
            type="password"
            id="confirma-senha"
            required
            placeholder="Confirmar senha ..."
          />
        </InputContainer>

        <StyledCheckboxLabel htmlFor="termos">
          Concordo com os termos
          <InputCheckbox type="checkbox" name="termos" id="termos" />
          <CheckMark></CheckMark>
        </StyledCheckboxLabel>
        <ButtonsContainer>
          <FormButton type="submit">
            <FormButtonLink to={'/'}>Entrar</FormButtonLink>
          </FormButton>
        </ButtonsContainer>
      </StyledForm>
    </FormPageContainer>
  );
};

export default Cadastro;
