import { CarouselContainer, PageContainer, StyledH2, StyledH3 } from './style';
import Header from '../../components/Header';
import AnimalCategory from '../../components/AnimalCategory';
import BenefitCard from '../../components/BenefitCard';
import ProductCard from '../../components/ProductCard';
import NavBar from '../../components/NavBar';
import productsStored from '../../constants/products.json';
import { formatCurrency } from '../../utils/formatCurrency';

const Home = () => {
  return (
    <PageContainer>
      <Header showAddress userAddress="Rua Dionísio, 72 - apt 402"></Header>
      <CarouselContainer>
        <AnimalCategory
          type="Cachorro"
          imgSrc={'/src/assets/cachorro-logo.png'}
        ></AnimalCategory>
        <AnimalCategory
          type="Gatos"
          imgSrc={'/src/assets/gato-logo.png'}
        ></AnimalCategory>
        <AnimalCategory
          type="Peixes"
          imgSrc={'/src/assets/peixe-logo.png'}
        ></AnimalCategory>
        <AnimalCategory
          type="Aves"
          imgSrc={'/src/assets/ave-logo.png'}
        ></AnimalCategory>
        <AnimalCategory
          type="Exóoicos"
          imgSrc={'/src/assets/exoicos-logo.png'}
        ></AnimalCategory>
      </CarouselContainer>
      <StyledH3>Meus Benefícios</StyledH3>
      <CarouselContainer>
        <BenefitCard
          imgSrc="/src/assets/icons/icone-frete-gratis.svg"
          name={'Frete grátis'}
        ></BenefitCard>
        <BenefitCard
          imgSrc="/src/assets/icons/icone-cupons.svg"
          name={'Cupons'}
        ></BenefitCard>
        <BenefitCard
          imgSrc="/src/assets/icons/icone-cashback.svg"
          name={'Cashback'}
        ></BenefitCard>
        <BenefitCard
          imgSrc="/src/assets/icons/icone-premios.svg"
          name={'prêmios'}
        ></BenefitCard>
      </CarouselContainer>
      <StyledH2>Recomendado para você</StyledH2>
      <CarouselContainer>
        {productsStored.map((product, index) => {
          if (index < 4) {
            const { id_product, name, price, imgUrl } = product;
            return (
              <ProductCard
                key={id_product}
                id={id_product}
                name={name}
                price={formatCurrency(price)}
                imgSrc={imgUrl}
              />
            );
          }
        })}
      </CarouselContainer>
      <StyledH2>Rações</StyledH2>
      <CarouselContainer>
        {productsStored.map((product) => {
          const { id_product, name, price, imgUrl, type } = product;
          if (type === 'racao') {
            return (
              <ProductCard
                key={id_product}
                id={id_product}
                name={name}
                price={formatCurrency(price)}
                imgSrc={imgUrl}
              />
            );
          }
        })}
      </CarouselContainer>
      <StyledH2>Brinquedos</StyledH2>
      <CarouselContainer>
        {productsStored.map((product) => {
          const { id_product, name, price, imgUrl, type } = product;
          if (type === 'brinquedo') {
            return (
              <ProductCard
                key={id_product}
                id={id_product}
                name={name}
                price={formatCurrency(price)}
                imgSrc={imgUrl}
              />
            );
          }
        })}
      </CarouselContainer>
      <StyledH2>Farmácia</StyledH2>
      <CarouselContainer>
        {productsStored.map((product) => {
          const { id_product, name, price, imgUrl, type } = product;
          if (type === 'farmacia') {
            return (
              <ProductCard
                key={id_product}
                id={id_product}
                name={name}
                price={formatCurrency(price)}
                imgSrc={imgUrl}
              />
            );
          }
        })}
      </CarouselContainer>
      <NavBar currentPage="home"></NavBar>
    </PageContainer>
  );
};

export default Home;
