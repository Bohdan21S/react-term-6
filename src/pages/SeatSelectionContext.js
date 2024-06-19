// src/SeatSelectionContext.js
import React, { createContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const SeatSelectionContext = createContext();

export const SeatSelectionProvider = ({ children, moviesList }) => {
  const [selectedSeats, setSelectedSeats] = useState(() => {
    const savedSeats = localStorage.getItem("selectedSeats");
    return savedSeats ? JSON.parse(savedSeats) : [];
  });

  const [ticketInfo, setTicketInfo] = useState({
    movieTitle: "Inception",
    hallName: "Зал №3",
    date: "2023-12-25",
    time: "18:00",
    price: 100,
  });

  let { movieId } = useParams();
  let { timeId } = useParams();
  const date = new Date().toISOString().split('T')[0];

  ticketInfo.movieTitle=moviesList[movieId-1].title;
  ticketInfo.time=moviesList[movieId-1].showDates[timeId-1];
  ticketInfo.date=date;

  useEffect(() => {
    localStorage.setItem("selectedSeats", JSON.stringify(selectedSeats));
  }, [selectedSeats]);

  return (
    <SeatSelectionContext.Provider
      value={{ selectedSeats, setSelectedSeats, ticketInfo, setTicketInfo }}
    >
      {children}
    </SeatSelectionContext.Provider>
  );
};
