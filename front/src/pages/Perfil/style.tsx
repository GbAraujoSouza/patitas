import styled from 'styled-components';
import { globalColors } from '../../global/globalStyles';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 100vh; // 62px == navbar height
  background-color: ${globalColors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 3.4%;
  padding: 1.25rem 1.125rem 1.125rem;
  overflow-y: scroll;
`;

export const ProfileImg = styled.img`
  border-radius: 24px;
  background-color: ${globalColors.white};
`;

export const StyledParagrath = styled.p`
  font-weight: bold;
  align-self: flex-start;
`;

export const ConfigsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
`;

export const Config = styled.div`
  background-color: ${globalColors.lightBlue};
  display: flex;
  justify-content: start;
  align-items: center;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  padding: 1rem 0.875rem 1rem 1.125rem;
  border-radius: 18px;
  height: 51px;
`;
export const ConfigText = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const UserConfigInfo = styled.span`
  color: rgba(0, 0, 0, 0.24);
`;