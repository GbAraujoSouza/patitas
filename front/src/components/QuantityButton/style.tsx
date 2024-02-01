import styled from "styled-components";
import { globalColors } from "../../global/globalStyles";

export const QuantityButtonContainer = styled.div`
  background-color: ${globalColors.mostarda};
  color: ${globalColors.darkBlue};
  border-radius: 100vw;
  height: 1.25rem;
  width: 5.44rem;
  padding: 0.135rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.55em;
`;

export const PlusMinusBtn = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  font-size: inherit;
`