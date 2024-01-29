import styled from 'styled-components';
import { globalColors } from '../../global/globalStyles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${globalColors.darkBlue};
  padding: 2.6% 4.1%;
  scroll-behavior: smooth;
`;

export const Image = styled.img``;

export const HeaderAddress = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  color: ${globalColors.white};
  width: 100%;
  font-weight: bold;
  padding-bottom: 10px;
`;
