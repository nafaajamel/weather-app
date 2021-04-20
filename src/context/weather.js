import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const weatherContext = createContext(null);

export default function WeatherProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [staticData, setStaticData] = useState(null);
  const [dailyData, setDailyData] = useState(null);
  const [userLocation, setUserLocation] = useState({});
  const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  // fetch static weather info
  const fetchStaticData = async () => {
    const { latitude, longitude } = location;

    const res = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
    );
    if (res.error) {
      throw res.error;
    }
    setStaticData(res.data);
    setLoading(false);
  };

  const fetchDailyForecast = async () => {
    const { latitude, longitude } = location;
    let res = await axios.get(
      `http://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&cnt=5&appid=${WEATHER_API_KEY}&units=metric`
    );
    if (res.error) {
      throw res.error;
    }
    setDailyData(res.data);
  };

  useEffect(() => {
    if (location) {
      fetchStaticData();
      fetchDailyForecast();
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
    dailyData,
  };

  return (
    <weatherContext.Provider value={values}>{children}</weatherContext.Provider>
  );
}
