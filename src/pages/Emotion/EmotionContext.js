import React, { createContext, useState } from 'react';

export const EmotionContext = createContext();

export const EmotionProvider = ({ children }) => {
  const [customEmotion, setCustomEmotion] = useState(null);

  return (
    <EmotionContext.Provider value={{ customEmotion, setCustomEmotion }}>
      {children}
    </EmotionContext.Provider>
  );
};
