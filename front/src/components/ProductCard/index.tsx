import { useShoppingCart } from '../../context/ShoppingCartContext';
import {
  Card,
  Image,
  CardBody,
  InfoCard,
  ProductName,
  ProductPrice,
} from './style';

interface CardProdutProps {
  id: number;
  name: string;
  price: number;
  imgSrc: string;
}

const CardProdut = ({ id, imgSrc, name, price }: CardProdutProps) => {
  const {increaseCartQuatity} = useShoppingCart()

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
        <img src="/src/assets/icons/Botao-de-mais.svg" alt="" onClick={() => increaseCartQuatity(id)}/>
      </CardBody>
    </Card>
  );
};

export default CardProdut;
