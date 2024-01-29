import {
  Card,
  Image,
  CardBody,
  InfoCard,
  ProductName,
  ProductPrice,
} from './style';

interface CardProdutProps {
  name: string;
  price: number;
  imgSrc: string;
}

const CardProdut = ({ imgSrc, name, price }: CardProdutProps) => {
  return (
    <Card>
      <Image src={imgSrc} />
      <CardBody>
        <InfoCard>
          <ProductName>{name}</ProductName>
          <ProductPrice>
            <strong>R$</strong>
            {price}
          </ProductPrice>
        </InfoCard>
        <img src="/src/assets/icons/Botao-de-mais.svg" alt="" />
      </CardBody>
    </Card>
  );
};

export default CardProdut;
