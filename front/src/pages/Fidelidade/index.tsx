import {
  FidelidadePageContainer,
  FidelidadeH1,
  FidelidadeCardsContaier,
} from './style';
import { globalColors } from '../../global/globalStyles';
import { ImageLogo } from '../Search/style';
import BenefitCard from '../../components/BenefitCard';
import NavBar from '../../components/NavBar';

const Fidelidade = () => {
  return (
    <>
      <FidelidadePageContainer>
        <ImageLogo
          paddingBottom="0"
          src="/src/assets/logo-pequena.png"
          alt="Logo Patitas"
        />
        <FidelidadeH1 color={globalColors.darkBlue}>
          Cliente Fidelidade
        </FidelidadeH1>
        <FidelidadeCardsContaier>
          <BenefitCard
            imgSrc="/src/assets/icons/icone-frete-gratis.svg"
            name={'Frete grátis'}
          ></BenefitCard>
          <BenefitCard
            imgSrc="/src/assets/icons/icone-gato.svg"
            name={'Cartão de vacina'}
          ></BenefitCard>
          <BenefitCard
            imgSrc="/src/assets/icons/icone-premios.svg"
            name={'prêmios'}
          ></BenefitCard>
          <BenefitCard
            imgSrc="/src/assets/icons/icone-cupons.svg"
            name={'Cupons'}
          ></BenefitCard>
        </FidelidadeCardsContaier>
        <p>Regras de Fidelidade</p>
      </FidelidadePageContainer>
      <NavBar currentPage={'shopping'}></NavBar>
    </>
  );
};

export default Fidelidade;
