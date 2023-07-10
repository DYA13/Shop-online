import ChangeQuantity from "./ChangeQuantity";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";

const Oggetto =({oggetto}) =>{
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch()

    return (
    <div className="oggetto_block">
    <img className="foto" src={`${oggetto.img}.webp`} alt ="Jewlery"/>
    <h5 className="name">{oggetto.name}</h5>
    <p className="price">$ {oggetto.price}</p>
    <ChangeQuantity quantity = {quantity} setQuantity = {setQuantity}/>

    <button className="cart_button" onClick = {() => {dispatch(addItemToCart({oggetto, quantity}));
    }}>Add to cart</button>

    </div>

    )

}

export default Oggetto;