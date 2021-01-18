import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button';
import { useHistory } from 'react-router-dom';

import AppContext from '../context/AppContext';
import handleSumTotal from '../helpers/handleSumTotal';

import '../styles/components/Payment.css';

const Payment = () => {
  const {
    state: { cart },
    buyer,
    addNewOrder,
  } = useContext(AppContext);

  const history = useHistory();

  const paypalOptions = {
    clientId:
      'AZwHZEn4coKdS9NiieW1F3dClKoJVJVX9WKctSuRd-c6Up1kgEBiaWfByzEySt-HAxtlNq0MGd0M79gt',
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handlePaymentSuccess = (data) => {
    console.log(data);

    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };

      addNewOrder(newOrder);

      history.push('/checkout/success');
    }
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Order resume:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.ref}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal(cart)}
            onPaymentStart={() => console.log('Start Payment')}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onPaymentError={(error) => console.log(error)}
            onPaymentCancel={(data) => console.log(data)}
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
