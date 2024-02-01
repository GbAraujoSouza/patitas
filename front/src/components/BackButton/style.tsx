import styled from "styled-components";
import { globalColors } from "../../global/globalStyles";
import { Link } from 'react-router-dom';

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  align-self: flex-start;
  color: ${globalColors.darkBlue};
  background-color: transparent;
  border: none;
  outline: none;
  font-size: inherit;
  text-decoration: none;
`;

export const BackIconWrapper = styled.span`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d9d9d9;
`;
