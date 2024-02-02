import styled from 'styled-components';
import { globalColors } from '../../global/globalStyles';
import { Link } from 'react-router-dom';

interface BadgeProps {
  cartQuantity: number;
}

export const PageContainer = styled.main`
  height: 100vh;
  background-color: ${globalColors.white};
`;

export const CarouselContainer = styled.section`
  display: flex;
  flex-direction: row;
  gap: 3.1%;
  overflow-x: scroll;
  padding: 7.2% 5.2%;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledH3 = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-weight: semibold;
  text-decoration: underline;
  font-size: 15px;
  padding-left: 5.64%;
`;

export const StyledH2 = styled.h2`
  font-weight: bold;
  text-decoration: underline;
  font-size: 1em;
  padding-left: 5.64%;
`;

export const CartIconLink = styled(Link)`
  background-color: ${globalColors.turquesa};
  width: 2.2rem;
  height: 2.2rem;
  color: ${globalColors.white};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 3rem;
  right: 0.8rem;
`;

export const Badge = styled.span<BadgeProps>`
  position: absolute;
  top: 60%;
  right: 0;
  height: 1.3rem;
  width: 1.3rem;
  align-items: center;
  justify-content: center;
  border-radius: 100vw;
  background-color: ${globalColors.darkOrange};
  color: ${globalColors.white};
  font-weight: bold;
  display: ${(props) => (props.cartQuantity > 0 ? 'flex' : 'none')};
`;
