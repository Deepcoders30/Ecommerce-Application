import React, { useState } from 'react'
import "./navbar.scss";
import { Link } from 'react-router-dom';
import { BsCart2 } from "react-icons/bs";
import Cart from "../../pages/cart/Cart.js";
import { useSelector } from 'react-redux';


function Navbar() {

  const [openCart, setOpenCart] = useState(false);
  const categories = useSelector(state => state.categoryReducer.categories);
  const cart = useSelector(state => state.cartReducer.cart);
  let totalItem = 0;
  cart.forEach(item => totalItem += item.quantity);


  return (
    <>
      <nav className='Navbar'>
        <div className="container nav-container">
          <div className="nav-left">
            <ul className='link-group'>
              {categories?.map((category) => (
                <li className="hover-link" key={category.id}>
                  <Link
                    className="link"
                    to={`/category/${category.attributes.key}`}
                  >
                    {category.attributes.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="nav-center">
            <Link to="/">
              <h1 className='banner'>DeePosz.</h1>
            </Link>
          </div>
          <div className="nav-right">
            <div className="nav-cart hover-link" onClick={() => setOpenCart(!openCart)}>
              <BsCart2 className="icon" />
              {totalItem > 0 && <span className='cart-count center'>{totalItem}</span>}
            </div>
          </div>
        </div>
      </nav>
      {openCart && <Cart onClose={() => setOpenCart(false)} />}
    </>
  )
}

export default Navbar;