import { createContext, useContext, useEffect, useState } from "react";

const DarkContext = createContext();

export const DarkProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDark(!isDark);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  function toggleDarkTheme() {
    setIsDark(!isDark);
  }

  const value = {
    isDark,
    toggleDarkTheme
  };

  return <DarkContext.Provider value={value}>{children}</DarkContext.Provider>;
};

export const darkContext = () => {
  const context = useContext(DarkContext);
  return context;
};
