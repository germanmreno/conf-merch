import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import AppContext from '../context/AppContext';
import handleSumTotal from '../helpers/handleSumTotal';

import '../styles/components/Checkout.css';

const Checkout = () => {
  const {
    state: { cart },
    removeFromCart,
  } = useContext(AppContext);

  const handleRemove = (product) => () => {
    removeFromCart(product);
  };

  const total = handleSumTotal(cart);

  return (
    <>
      <Helmet>
        <title>Order list - Conf Merch</title>
      </Helmet>
      <div className="Checkout">
        <div className="Checkout-content">
          {cart.length > 0 ? <h3>Order car:</h3> : <h3>Car empty</h3>}

          {cart.map((item) => (
            <div className="Checkout-item" key={item.ref}>
              <div className="Checkout-element">
                <h4>{item.title}:</h4>
                <span>${item.price}</span>
              </div>
              <button type="button" onClick={handleRemove(item)}>
                <i className="fas fa-trash-alt" />
              </button>
            </div>
          ))}
        </div>
        {cart.length > 0 && (
          <div className="Checkout-sidebar">
            <h3>{`Total price: $ ${total}`}</h3>
            <Link to="/checkout/information">
              <button type="button">Continue </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Checkout;
