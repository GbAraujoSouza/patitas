import {
  CartBody,
  CartImg,
  CartItemContainer,
  CartItemInfo,
  ItemName,
  Price,
} from './style';
import productsStored from '../../constants/products.json';
import { Icon } from '@iconify/react/dist/iconify.js';
import QuantityButton from '../QuantityButton';
import { formatCurrency } from '../../utils/formatCurrency';

interface CartItemProps {
  id: number;
  quantity: number;
}

const CartItem = ({ id, quantity }: CartItemProps) => {
  const item = productsStored.find((i) => i.id_product === id);
  if (!item) return null;

  return (
    <CartItemContainer>
      <CartImg src={item.imgUrl}></CartImg>
      <CartBody>
        <CartItemInfo>
          <ItemName>{item.name}</ItemName>
          <Icon icon="solar:heart-bold" width="24" height="24" />
        </CartItemInfo>
        <CartItemInfo>
          <Price>R$ {formatCurrency(item.price)}</Price>
          <QuantityButton quantity={quantity} productId={item.id_product} />
        </CartItemInfo>
      </CartBody>
    </CartItemContainer>
  );
};

export default CartItem;
