import React, { useEffect } from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../assets/styles/MovieCard.css";
import img3 from "../assets/images/image3.jpg"; 

const MovieCard = ({ movie, showDates }) => {
    return (
        <Card className="movie-card">
            <div className="card-content">
                <Card.Img className="movie-poster" variant="top" src={movie.poster} />
                <div className="movie-info">
                <Card.Title className="movie-title">{movie.title}</Card.Title>
                    {showDates && (
                        <div className="show-dates">
                            {showDates.map((date, index) => (
                                <Button key={index} variant="primary" className="date-button">{date}</Button>
                            ))}
                        </div>
                    )}
                    <Card.Text>
                        <strong>Тривалість:</strong> {movie.duration} хв<br/>
                        <strong>Режисер:</strong> {movie.director}<br/>
                        <strong>Актори:</strong> {movie.actors.join(', ')}<br/>
                    </Card.Text>
                    <div className="buttons-container">
                        <Button as={Link} to={`/movies/${movie.id}`} variant="primary">Детальніше</Button>
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
