import styled from 'styled-components';
import { globalColors } from '../../global/globalStyles';

export const LogoCadastro = styled.img`
  padding-bottom: 2rem;
`;

export const InputCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const CheckMark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  margin-top: 2.375rem;
  background-color: transparent;
  border: 1px solid ${globalColors.darkBlue};
  border-radius: 4px;
  &::after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid ${globalColors.darkBlue};
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 7px;
  }
`;

export const StyledCheckboxLabel = styled.label`
  align-self: center;
  position: relative;
  padding: 2.375rem 0 0 2rem;
  cursor: pointer;
  font-size: 1rem;
  user-select: none;
  &:hover ${InputCheckbox} ~ ${CheckMark} {
    background-color: #ccc;
  }

  & ${InputCheckbox}:checked ~ ${CheckMark}::after {
    border: solid ${globalColors.white};
    border-width: 0 3px 3px 0;
  }
  & ${InputCheckbox}:checked ~ ${CheckMark} {
    background-color: ${globalColors.darkBlue};
  }
`;
