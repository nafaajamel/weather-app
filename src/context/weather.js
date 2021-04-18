import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const weatherContext = createContext(null);

export default function WeatherProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [staticData, setStaticData] = useState(null);

  const WEATHER_API_KEY = 'e9338267048203adc9f97ec82a49af0f';

  // fetch static weather info
  const fetchStaticData = async (coords) => {
    const { latitude, longitude } = coords;

    const res = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
    );
    return res.data;
  };

  useEffect(() => {
    if (location) {
      fetchStaticData(location.coords)
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
      navigator.geolocation.getCurrentPosition(setLocation);
    }
  }, []);
  const values = {
    location,
    setLocation,
    staticData,
    setStaticData,
    loading,
    setLoading,
  };

  return (
    <weatherContext.Provider value={values}>{children}</weatherContext.Provider>
  );
}
