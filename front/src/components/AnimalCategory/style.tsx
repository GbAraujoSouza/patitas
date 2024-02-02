import styled from 'styled-components';
import { globalColors } from '../../global/globalStyles';

export const RoundImage = styled.img`
  border-radius: 50%;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.3);
`;

export const AnimalCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
`;

export const AnimalType = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  color: ${globalColors.darkBlue};
  font-size: 0.875em;
`;
