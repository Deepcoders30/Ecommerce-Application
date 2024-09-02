import React from 'react';
import "./payments.scss";
import {useParams} from 'react-router';
import {BsFillCartCheckFill} from 'react-icons/bs';
import {BiErrorCircle} from 'react-icons/bi';
import { resetCart } from '../../redux/slices/cartSlice';
import {useDispatch} from 'react-redux';

function Payments() {
    const params=useParams();
    const status=params.status;
    const dispatch=useDispatch();

    const infoData={
        success :{
            message: "Your Order Has Been Placed",
            cta: "Shop More",
            icon: <BsFillCartCheckFill />
        },

        failed :{
            message: "Payment Failed",
            cta: "Try Again",
            icon: <BiErrorCircle />
        }
    }

    if(status === 'success') {
        dispatch(resetCart());
    }
  return (
    <div className='Payments'>
        <div className="icon">{infoData[status].icon}</div>
        <div className="message">{infoData[status].message}</div>
        <button className='btn-primary'>{infoData[status].cta}</button>
    </div>
  )
}

export default Payments;