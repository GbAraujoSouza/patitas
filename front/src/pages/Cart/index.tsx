import Header from '../../components/Header';
import BackButton from '../../components/BackButton';
import { CartContainer, CartItemsContainer } from './style';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import CartItem from '../../components/CartItem';
import NavBar from '../../components/NavBar';

const Cart = () => {
  const {cartItems} = useShoppingCart()

  return (
    <>
      <Header showAddress userAddress="Rua Dionísio, 72 - apt 402" />
      <CartContainer>
        <BackButton to="/"></BackButton>
        <CartItemsContainer>
          {cartItems.map(item => <CartItem key={item.id} {...item} />)}
        </CartItemsContainer>
      </CartContainer>
      <NavBar currentPage={'shopping'} />
    </>
  );
};

export default Cart;
