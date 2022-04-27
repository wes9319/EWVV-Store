import React from 'react';
import '../styles/components/Header.css';

const Header = () => {
  return (
    <div className='Header'>
      <h1 className='Header-title'>
        Conf Merch
      </h1>
      <div className='Header-checkout'>
        Checkout
      </div>
    </div>
  )
}

export { Header };