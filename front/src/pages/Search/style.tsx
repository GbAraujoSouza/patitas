import styled from 'styled-components';
import { globalColors } from '../../global/globalStyles';
import { Link } from 'react-router-dom';

interface ImageLogoProps {
  paddingBottom: string;
}

export const Container = styled.div`
  height: calc(100vh - 62px); // 62px == navbar height
  background-color: ${globalColors.white};
  display: flex;
  flex-direction: column;
  gap: 4.4%;
  padding: 1em;
  align-items: center;
  justify-content: start;
  background-image: url('/search-page-bg.png');
  background-position: bottom right;
  background-repeat: no-repeat;
`;

export const ImageLogo = styled.img<ImageLogoProps>`
  padding: 1rem 0 ${(prop) => prop.paddingBottom} 0;
`;

export const SearchBar = styled.div`
  width: 75%;
  display: flex;
  justify-content: start;
  gap: 2%;
  border-bottom: 1px solid rgba(5, 61, 88, 0.8);
`;

export const SearchInput = styled.input`
  width: 100%;
  background-color: transparent;
  font-size: inherit;
  border: none;
  outline: none;
  &::placeholder {
    color: rgba(6, 7, 19, 0.4);
  }
`;

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Category = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.56%;
  color: ${globalColors.darkBlue};
  background-color: #bdc7cc;
  border-radius: 20px;
  min-width: 167px;
  height: 48px;
`;

export const ButtonLinkFidelidade = styled(Link)`
  height: 48px;
  color: ${globalColors.darkBlue};
  text-decoration: none;
  background-color: #bdc7cc;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.56%;
  gap: 2.56%;
  width: 100%;
  border: none;
  outline: none;
  font-size: inherit;
  cursor: pointer;
`;
