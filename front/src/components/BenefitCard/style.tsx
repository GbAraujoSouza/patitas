import styled from "styled-components";
import { globalColors } from "../../global/globalStyles";

export const BenefitCardConteiner = styled.div`
  display: flex;
  flex-direction: column;
  flex: none;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;
  background-color: ${globalColors.mostarda};
  border-radius: 20px;
  padding: 5px;
  width: 120px;
  height: 120px;
  &:active {
    background-color: ${globalColors.darkBlue};
    
  }
`;

export const BenefitText = styled.p`
  font-weight: bold;
  text-align: center;
  color: ${globalColors.darkBlue};
  &:active {
    color: ${globalColors.white};
  }
`;

