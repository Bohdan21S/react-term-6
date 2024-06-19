import React, { createContext, useState } from 'react';

// Створюємо контекст
export const ShowDatesContext = createContext();

// Провайдер для контексту
export const ShowDatesProvider = ({ children }) => {
  const [showDates, setShowDates] = useState([]);

  return (
    <ShowDatesContext.Provider value={{ showDates, setShowDates }}>
      {children}
    </ShowDatesContext.Provider>
  );
};
