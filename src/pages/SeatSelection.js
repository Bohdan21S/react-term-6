// src/components/SeatSelection.js
import React, { useContext } from "react";
import { SeatSelectionContext } from "../context/SeatSelectionContext";
import "../assets/styles/SeatSelection.css";
import Header from "../components/Header";
import Ticket from "../components/Ticket";

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
      if (selectedSeats.length === 0) {
        alert("Виберіть квиток!");
        return;
      }
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
      setSelectedSeats([]);
      setTimeout(() => {
        alert("Квитки успішно придбані!");
      }, 300);   
    } else {
      alert("Для покупки квитків увійдіть в акаунт");
      window.location.href = "/login";
    }
  };

  return (
    <div className="seat-selection-page">
      <Header />
      <div className="content">
        <Ticket ticketInfo={ticketInfo} selectedSeats={selectedSeats}/>
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
