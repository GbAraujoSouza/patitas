import styled from 'styled-components';
import { globalColors } from '../../global/globalStyles';

export const CartContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: ${globalColors.white};
  padding: 1rem 1.5rem;
  height: 100vh;
`;

export const CartItemsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;
