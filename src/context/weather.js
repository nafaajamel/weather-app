import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const weatherContext = createContext(null);

export default function WeatherProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [staticData, setStaticData] = useState(null);
  const [userLocation, setUserLocation] = useState({});
  const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  // fetch static weather info
  const fetchStaticData = async (location) => {
    const { latitude, longitude } = location;

    const res = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
    );
    return res.data;
  };

  useEffect(() => {
    if (location) {
      fetchStaticData(location)
        .then((data) => {
          console.log({ data });
          setStaticData(data);
        })
        .catch((err) => {
          throw err;
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [location]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((l) => {
        const { latitude, longitude } = l.coords;
        setLocation({ latitude, longitude });
        setUserLocation({ latitude, longitude });
      });
    }
  }, []);
  const values = {
    location,
    setLocation,
    staticData,
    setStaticData,
    loading,
    setLoading,
    userLocation,
  };

  return (
    <weatherContext.Provider value={values}>{children}</weatherContext.Provider>
  );
}
