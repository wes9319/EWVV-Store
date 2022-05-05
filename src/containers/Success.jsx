import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Map } from '../components/Map';
import { useGoogleAddress } from '../hooks/useGoogleAddress';
import '../styles/components/Success.css';

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  const location = useGoogleAddress(buyer[0].address)
  
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>
          {`Hi ${buyer[0].name}, Thank you for your purchase`}
        </h2>
        <span> Your order will arrive in 3 days to the following address: </span>
        <div className="Success-map">
          <Map data={location}/>
        </div>
      </div>
    </div>
  )
}

export { Success };