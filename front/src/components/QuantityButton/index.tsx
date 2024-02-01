import { useShoppingCart } from '../../context/ShoppingCartContext';
import { PlusMinusBtn, QuantityButtonContainer } from './style';

interface QuantityButtonProps {
  quantity: number;
  productId: number;
}

const QuantityButton = ({ quantity, productId }: QuantityButtonProps) => {
  const { increaseCartQuatity, decreaseCartQuatity } = useShoppingCart();

  return (
    <QuantityButtonContainer>
      <PlusMinusBtn onClick={() => decreaseCartQuatity(productId)}>
        -
      </PlusMinusBtn>
      <span>{quantity}</span>
      <PlusMinusBtn onClick={() => increaseCartQuatity(productId)}>
        +
      </PlusMinusBtn>
    </QuantityButtonContainer>
  );
};

export default QuantityButton;
