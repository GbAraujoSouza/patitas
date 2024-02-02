import styled from 'styled-components';
import { globalColors } from '../../global/globalStyles';

export const Card = styled.div`
  font-family: verdana;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 1em;
  flex: none;
  width: 8.25rem;
  max-height: 10.38em;
  background-color: ${globalColors.white};
  border-radius: 18px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
  color: #154962;
`;

export const Image = styled.img`
  border-radius: 20px;
  width: 112px;
  height: 88px;
  object-fit: cover;
  background-color: ${globalColors.white};
`;

export const CardBody = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`;

export const InfoCard = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;
export const ProductName = styled.p`
  margin: 0;
  padding: 0;
  font-size: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export const ProductPrice = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
`;

export const AddProduct = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
`;
