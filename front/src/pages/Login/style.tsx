import styled from 'styled-components';
import { globalColors } from '../../global/globalStyles';
import { Link } from 'react-router-dom';

export const FormPageContainer = styled.main`
  background-color: ${globalColors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  & > a {
    align-self: flex-end;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 0.625rem;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid ${globalColors.darkBlue};
  & > input {
    width: 100%;
    font-size: inherit;
    background-color: transparent;
    border: none;
    outline: none;
    position: relative;
  }
`;

export const StyledLabel = styled.label`
  font-weight: bold;
  color: ${globalColors.darkBlue};
  position: relative;
  width: min-content;
  &::after {
    content: '';
    border-bottom: 2px solid ${globalColors.darkBlue};
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-top: 3.5rem;
`;

export const FormButton = styled.button`
  background-color: ${globalColors.darkOrange};
  padding: 0.625rem;
  border-radius: 16px;
  height: 49px;
  width: 17.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  border: none;
  outline: none;
`;

export const FormButtonLink = styled(Link)`
  color: ${globalColors.white};
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  width: 100%;
`;
