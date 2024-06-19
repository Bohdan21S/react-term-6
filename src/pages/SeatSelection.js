// src/components/SeatSelection.js
import React, { useContext } from "react";
import { SeatSelectionContext } from "./SeatSelectionContext";
import "./SeatSelection.css";
import Header from "../components/Header";

const SeatSelection = () => {
  const { selectedSeats, setSelectedSeats, ticketInfo } =
    useContext(SeatSelectionContext);
  const totalSeats = 10 * 10; // 10 на 10 місць
  const seats = Array.from({ length: totalSeats }, (_, i) => i + 1);

  const handleSeatClick = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  return (
    <div className="seat-selection-page">
      <Header />
      <div className="content">
        <div className="ticket-info" back>
          <p>{ticketInfo.movieTitle}</p>
          <p>Зал: {ticketInfo.hallName}</p>
          <p>Дата: {ticketInfo.date}</p>
          <p>Початок: {ticketInfo.time}</p>
          <p>Місця: {selectedSeats.sort((a, b) => a - b).join(", ")}</p>
          <p>Сума: {selectedSeats.length * ticketInfo.price} грн</p>
        </div>
        <div className="seat-map-container">
          <div className="screen">Екран</div>
          <div className="seat-map">
            {seats.map((seat) => (
              <div
                key={seat}
                className={`seat ${
                  selectedSeats.includes(seat) ? "selected" : ""
                }`}
                onClick={() => handleSeatClick(seat)}
              >
                {seat}
              </div>
            ))}
          </div>
        </div>
      </div>
      <button className="purchase-button">Купити</button>
    </div>
  );
};

export default SeatSelection;
