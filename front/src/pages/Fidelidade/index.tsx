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
          src="/logo-pequena.png"
          alt="Logo Patitas"
        />
        <FidelidadeH1 color={globalColors.darkBlue}>
          Cliente Fidelidade
        </FidelidadeH1>
        <FidelidadeCardsContaier>
          <BenefitCard
            imgSrc="/icons/icone-frete-gratis.svg"
            name={'Frete grátis'}
          ></BenefitCard>
          <BenefitCard
            imgSrc="/icons/icone-gato.svg"
            name={'Cartão de vacina'}
          ></BenefitCard>
          <BenefitCard
            imgSrc="/icons/icone-premios.svg"
            name={'prêmios'}
          ></BenefitCard>
          <BenefitCard
            imgSrc="/icons/icone-cupons.svg"
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
