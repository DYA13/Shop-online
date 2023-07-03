import CartItem from './CartItem'
import { useSelector } from 'react-redux'
import { getCartItems, getTotalPrice } from '../../redux/cartSlice'

const Cart = () => {
  const cartItems = useSelector(getCartItems)
  const totalPrice = useSelector(getTotalPrice)

  return (
    <div>
      {cartItems.map((cartItem) => (
        <CartItem cartItem={cartItem} key={cartItem} />
      ))}

      <h3>Total: $ {totalPrice} </h3>
    </div>
  )
}
export default Cart
