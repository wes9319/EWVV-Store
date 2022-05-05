import { useState, useEffect } from 'react';
import axios from 'axios';
import { pass } from '../pass';

const useGoogleAddress = (address) => {
  const [map, setMap] = useState({lat: 0, lng: 0});
  const googleAPI = pass.googleMapsAPIKey;
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${googleAPI}`;

  useEffect(async () => {
    const response = await axios(API);
    setMap(response.data.results[0].geometry.location);
  }, [])
  return map;
}

export { useGoogleAddress };