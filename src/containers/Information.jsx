import React, { useContext, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

import AppContext from '../context/AppContext';

import '../styles/components/Information.css';

const Information = () => {
  const {
    state: { cart },
    addToBuyer,
  } = useContext(AppContext);

  const form = useRef(null);

  const history = useHistory();

  const handleSubmit = () => {
    const formData = new FormData(form.current);

    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      city: formData.get('city'),
      country: formData.get('country'),
      state: formData.get('state'),
      zip: formData.get('zip'),
      phone: formData.get('phone'),
    };

    addToBuyer(buyer);

    history.push('/checkout/payment');
  };

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Contact info:</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder="Full name" name="name" />
            <input type="email" placeholder="E-mail" name="email" />
            <input type="text" placeholder="Address" name="address" />
            <input type="text" placeholder="City" name="city" />
            <input type="text" placeholder="Country" name="country" />
            <input type="text" placeholder="State" name="state" />
            <input type="text" placeholder="Zip code" name="zip" />
            <input type="text" placeholder="Phone" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout">Go back</Link>
          </div>
          <div className="Information-next">
            <button type="button" onClick={handleSubmit}>
              Pay
            </button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Order:</h3>
        {cart.map((item) => (
          <div className="Information-item" key={item.ref}>
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;
