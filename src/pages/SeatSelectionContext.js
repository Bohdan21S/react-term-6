// src/SeatSelectionContext.js
import React, { createContext, useState, useEffect } from 'react';

export const SeatSelectionContext = createContext();

export const SeatSelectionProvider = ({ children }) => {
  const [selectedSeats, setSelectedSeats] = useState(() => {
    const savedSeats = localStorage.getItem('selectedSeats');
    return savedSeats ? JSON.parse(savedSeats) : [];
  });

  const [ticketInfo, setTicketInfo] = useState({
    movieTitle: 'Inception',
    hallName: 'Зал №3',
    date: '2023-12-25',
    time: '18:00',
    price: 100,
  });

  useEffect(() => {
    localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
  }, [selectedSeats]);

  return (
    <SeatSelectionContext.Provider value={{ selectedSeats, setSelectedSeats, ticketInfo, setTicketInfo }}>
      {children}
    </SeatSelectionContext.Provider>
  );
};
