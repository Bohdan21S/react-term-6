import React, {useState, useEffect} from 'react'
import Ticket from '../components/Ticket';
import "../assets/styles/MyProfilePage.css"
import Header from '../components/Header';

const MyProfilePage = () => {
    const [user, setUser] = useState(null);
    const [tickets, setTickets] = useState([]);

    useEffect(() =>{
        const loggedInUser = localStorage.getItem('loggedInUser');
        const foundUser = loggedInUser ? JSON.parse(loggedInUser) : null;
        setUser(foundUser);

        const ticketsInfo = localStorage.getItem('ticketsInfo');
        if(ticketsInfo){
            const parsedTickets = JSON.parse(ticketsInfo);
            const userTickets = parsedTickets[foundUser.id] || [];
            setTickets(userTickets);
        }
    }, []);
    

return (
    <>
    <Header />
    <div className='main-container'>
        <h1 id='main-title'>Мій профіль</h1>
        {user && (
            <div>
                <p className='profile-info'>Ім’я: {user.name}</p>
                <p className='profile-info'>Email: {user.email}</p>
            </div>
        )}
        <h2 id='my-tickets'>Мої квитки</h2>
        <div className='ticket-container'>
            {tickets && tickets.map((ticket, index) => (
                <Ticket key={index} ticketInfo={ticket.ticketInfo} selectedSeats={ticket.selectedSeats} />
            ))}
        </div>
    </div>
    </>
)
}

export default MyProfilePage