import React, { useEffect, useRef } from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../assets/styles/MovieCard.css";
import img3 from "../assets/images/image3.jpg"; 

const MovieCard = ({ movie, showDates }) => {

    // штука яка крч шрифт міняє в залежності від ширини карточки
    const movieCardRef = useRef(null);
    const movieTitleRef = useRef(null);
    const movieTextRef = useRef(null);
    const movieDetailsRef = useRef(null);
    useEffect(() => {
        function adjustFontSize() {
            if (movieCardRef.current && movieTitleRef.current && movieTextRef.current && movieDetailsRef.current) {
                const titleFontSize = movieCardRef.current.offsetWidth * 0.05; 
                const textFontSize = movieCardRef.current.offsetWidth * 0.027; 
                const detailsFontSize = movieCardRef.current.offsetWidth * 0.03; 
                movieTitleRef.current.style.fontSize = `${titleFontSize}px`;
                movieTextRef.current.style.fontSize = `${textFontSize}px`;
                movieDetailsRef.current.style.fontSize = `${detailsFontSize}px`;
            }
        }
        adjustFontSize();
        window.addEventListener('resize', adjustFontSize);
        return () => window.removeEventListener('resize', adjustFontSize);
    }, []);

    return (
    <Card className="movie-card" ref={movieCardRef}>
        <div className="card-content">
            <Card.Img className="movie-poster" variant="top" src={movie.poster} />
            <div className="movie-info">
            <Card.Title className="movie-title" ref={movieTitleRef}>{movie.title}</Card.Title>
                {showDates && (
                    <div className="show-dates">
                        {showDates.map((date, index) => (
                            <Button key={index} variant="primary" className="date-button">{date}</Button>
                        ))}
                    </div>
                )}
                <Card.Text ref={movieTextRef} className="movie-details">
                    <strong>Тривалість:</strong> {movie.duration} хв<br/>
                        <strong>Режисер:</strong> {movie.director}<br/>
                        <strong>Актори:</strong> {movie.actors.join(', ')}<br/>
                    </Card.Text>
                    <div className="buttons-container">
                        <Button as={Link} to={`/movies/${movie.id}`} variant="primary" className="details-button" ref={movieDetailsRef}>Детальніше</Button>
                    </div>
                    <Badge pill bg="info" className="likes-badge">
                        {movie.likes} <i className="bi bi-hand-thumbs-up"></i>
                    </Badge>
                </div>
            </div>
        </Card>
    );
}

export default MovieCard;
