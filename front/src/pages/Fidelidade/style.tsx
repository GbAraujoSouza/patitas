import styled from 'styled-components';
import { globalColors } from '../../global/globalStyles';

interface FidelidadeH1Props {
  color: string;
}

export const FidelidadePageContainer = styled.div`
  height: calc(100vh - 62px); // 62px == navbar height
  background-color: ${globalColors.white};
  display: flex;
  flex-direction: column;
  gap: 3.4%;
  align-items: center;
  justify-content: start;
  background-image: url('/bg-images/fidelidade-page-bg.png');
  background-position: bottom right;
  background-repeat: no-repeat;
  & p {
    font-weight: bold;
    font-style: italic;
  }
`;

export const FidelidadeH1 = styled.h1<FidelidadeH1Props>`
  color: ${(prop) => prop.color};
  font-size: 1rem;
  font-weight: bold;
`;

export const FidelidadeCardsContaier = styled.div`
  display: grid;
  grid-template-columns: repeat(2, min-content);
  grid-template-rows: repeat(2, min-content);
  gap: 1.5rem;
  padding-top: 1.5rem;
`;


