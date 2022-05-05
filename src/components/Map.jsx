import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { pass } from '../pass';

const Map = ({ data }) => {
  const googleAPI = pass.googleMapsAPIKey;
  const mapStyles = {
    height: '50vh',
    width: '100%'
  };

  const defaultCenter = {
    lat: data.lat,
    lng: data.lng
  };

  return (
    <LoadScript googleMapsApiKey={googleAPI}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        center={defaultCenter}
        zoom={9}
      >
        <Marker position={defaultCenter}/>
      </GoogleMap>
    </LoadScript>
  )
}

export { Map };