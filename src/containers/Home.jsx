import React from 'react';
import { Helmet } from 'react-helmet';
import initialState from '../initialState';
import { Products } from '../components/Products';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>EWVV Store - Products</title>
      </Helmet>
      <Products products={initialState.products}/>
    </>
  )
}

export { Home };