import { createContext, useState } from 'react';
import React from 'react';

interface ImageColors {
  primary: string;
  secondary: string;
}

interface ContextProps {
  colors: ImageColors;
  prevColors: ImageColors;
  setMainColors: (colorPair: ImageColors) => void;
  setPreviousColors: (colorPair: ImageColors) => void;
}

export const GradientContext = createContext({} as ContextProps); // definir tipo

export const GradientProvider = ({ children }: any) => {

  const [colors, setColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const [prevColors, setPrevColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const setMainColors = (colorPair: ImageColors) => {
    setColors(colorPair);
  };

  const setPreviousColors = (colorPair: ImageColors) => {
    setPrevColors(colorPair);
  };

  return (
    <GradientContext.Provider value={{
      colors,
      prevColors,
      setMainColors,
      setPreviousColors,
    }}>
      {children}
    </GradientContext.Provider>
  );
};
