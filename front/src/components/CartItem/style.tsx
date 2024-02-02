import styled from "styled-components";
import { globalColors } from "../../global/globalStyles";

export const CartItemContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  padding: 1.25rem 1rem 1rem 0.625rem;
  background-color: ${globalColors.white};
  border-radius: 18px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`

export const CartImg = styled.img`
  border-radius: 18px;
`;

export const CartBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const CartItemInfo = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-between;
  
  color: ${globalColors.darkBlue};
`;

export const ItemName = styled.p`
  font-size: 0.625rem;
  color: #000000;
`;

export const Price = styled.span`
  font-size: 0.875rem;
  font-weight: bold;
`