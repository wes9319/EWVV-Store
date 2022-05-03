import React from 'react';
import '../styles/components/Success.css';

const Success = () => {
  return (
    <div className="Success">
      <div className="Success-content">
        <h2> Hi Elvis, Thank you for your purchase </h2>
        <span> Your order will arrive in 3 days to the following address: </span>
        <dvi className="Success-map">
          Google maps integration goes here
        </dvi>
      </div>
    </div>
  )
}

export { Success };