import styled from 'styled-components';
import { globalColors } from '../../global/globalStyles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${globalColors.darkBlue};
  padding: 2.6%;
  scroll-behavior: smooth;
`;

export const Image = styled.img`
  padding-bottom: 1rem;
`;

export const HeaderAddress = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5%;
  color: ${globalColors.white};
  width: 100%;
  font-weight: bold;
  padding-bottom: 10px;
`;

export const AddressInfo = styled.span`
  display: flex;
  align-items: start;
  flex-direction: column;
`;
