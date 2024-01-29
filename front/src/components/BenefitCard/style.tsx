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
  padding: 10px;
  white-space: nowrap;
  width: 120px;
  min-height: 120px;
`;

export const BenefitText = styled.p`
  font-weight: bold;
  color: ${globalColors.darkBlue};
`;

