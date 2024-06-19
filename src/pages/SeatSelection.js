// src/components/SeatSelection.js
import React, { useContext } from "react";
import { SeatSelectionContext } from "./SeatSelectionContext";
import "../assets/styles/SeatSelection.css";
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

  const handlePurchase = () => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const updatedTicketInfo = {
        ticketInfo,
        selectedSeats: selectedSeats
      };
      const allTicketsInfo = JSON.parse(localStorage.getItem('ticketsInfo')) || {};
      const userId = JSON.parse(loggedInUser).id;
      if (!allTicketsInfo[userId]) {
        allTicketsInfo[userId] = [];
      }
      allTicketsInfo[userId].push(updatedTicketInfo);
      localStorage.setItem('ticketsInfo', JSON.stringify(allTicketsInfo));
      sessionStorage.removeItem("selectedSeats");
    } else {
      alert("Для покупки квитків увійдіть в акаунт");
      window.location.href = "/login";
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
      <button className="purchase-button" onClick={handlePurchase}>
        Купити
      </button>
    </div>
  );
};

export default SeatSelection;
