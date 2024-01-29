import styled from "styled-components";
import { globalColors } from "../../global/globalStyles";

export const PageContainer = styled.div`
  height: 100vh;
  background-color: ${globalColors.white};
`

export const CarouselContainer = styled.div`
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
`


