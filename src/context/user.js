import { createContext, useState } from 'react';

export const userContext = createContext(null);

export default function UserProvider({ children }) {
  const [location, setLocation] = useState(null);

  const values = {
    location,
    setLocation,
  };

  return <userContext.Provider value={values}>{children}</userContext.Provider>;
}
