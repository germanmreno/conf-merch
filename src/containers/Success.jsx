import React from 'react';

import '../styles/components/Success.css';

const Success = () => (
  <div className="Success">
    <div className="Success-content">
      <h2>User, thanks for your order</h2>
      <span>Your order will arrive in 3 days at your address:</span>
      <div className="Success-map">Google Maps</div>
    </div>
  </div>
);

export default Success;
