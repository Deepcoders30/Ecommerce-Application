import React from "react";
import "./cartitem.scss";
import {AiOutlineClose} from "react-icons/ai";
import { removeFromCart, addToCart, resetCart, removeParticularItem } from '../../redux/slices/cartSlice';
import { useDispatch } from "react-redux";


function Cartitem({cart}) {
  const dispatch=useDispatch();     

  return (
    <div className="Cartitem">
      <div className="item-img">
        <img src={cart.image} alt="" />
      </div>
      
      <div className="item-info-wrapper">
      <div className="item-info">
        <p className="title">{cart.title}</p>
        <p className="price">{cart.price}</p>

        <div className="quantity-selector">
          <span className="btn decreement" onClick={()=>dispatch(removeFromCart(cart))}>-</span>
          <span className="quantity">{cart.quantity}</span>
          <span className="btn increement" onClick={()=>dispatch(addToCart(cart))}>+</span>
        </div>

        <p className="total-price">Subtotal: $ {cart.quantity * cart.price}</p>
      </div> 

      <div className="item-remove" onClick={()=>dispatch(removeParticularItem(cart))}>
        <AiOutlineClose />
      </div>
      </div>
    </div>
  );
}

export default Cartitem;
