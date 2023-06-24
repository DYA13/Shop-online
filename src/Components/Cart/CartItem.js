import { useDispatch } from 'react-redux'
import { removeItemFromCart } from '../../redux/cartSlice'
import dataContent from '../../data/dataContent'

const CartItem = ({ cartItem }) => {
  const oggetti = dataContent.find((item) => item.id === cartItem.oggettoId)
  const dispatch = useDispatch()

  return (
    <div>
      <p>{oggetti.name}</p>
      <p> {cartItem.quantity} item(s)</p>
      <p>Price: ${oggetti.price * cartItem.quantity}</p>
      <span
        onClick={() =>
          dispatch(removeItemFromCart({ cartItemId: cartItem.id }))
        }
      >
        <img
          className='icon'
          src='https://img.icons8.com/material-outlined/48/000000/trash--v1.png'
          alt='deleteIcon'
        />
      </span>
    </div>
  )
}
export default CartItem
