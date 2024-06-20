import React from 'react'
import "../assets/styles/Ticket.css"

const Ticket = ({ticketInfo, selectedSeats}) => {
  return (
    <div className="ticket-info" back>
          <p>{ticketInfo.movieTitle}</p>
          <p>Зал: {ticketInfo.hallName}</p>
          <p>Дата: {ticketInfo.date}</p>
          <p>Початок: {ticketInfo.time}</p>
          <p>Місця: {selectedSeats.sort((a, b) => a - b).join(", ")}</p>
          <p>Сума: {selectedSeats.length * ticketInfo.price} грн</p>
        </div>
  )
}

export default Ticket