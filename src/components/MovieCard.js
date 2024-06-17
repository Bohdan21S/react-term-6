import React, { useEffect } from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../assets/styles/MovieCard.css";
import img3 from "../assets/images/image3.jpg"; 

const MovieCard = ({ movie, showDates }) => {
    const logMsg = () => {
        //alert('img ' + movie.title);
    }

    useEffect(() => {
       // alert('img ' + movie.poster);
    }, []);

    
    return (
        <Card className="movie-card">
            <div className="card-content">
                <Card.Img className="movie-poster" variant="top" src={movie.poster} />
                <Card.Body>

                    {showDates && showDates.map((date, index) => (
                        <Button key={index} variant="primary">{date}</Button>
                    ))}
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>
                        <strong>Тривалість:</strong> {movie.duration} хв<br/>
                        <strong>Режисер:</strong> {movie.director}<br/>
                        <strong>Актори:</strong> {movie.actors.join(', ')}<br/>
                        {movie.description}
                    </Card.Text>
                    <div className="buttons-container">
                        <Button as={Link} to={`/movies/${movie.id}`} variant="primary">Детальніше</Button>
                        <Button variant="primary">Придбати квиток</Button>
                    </div>
                    <Badge pill bg="info" className="likes-badge">
                        {movie.likes} <i className="bi bi-hand-thumbs-up"></i>
                    </Badge>
                </Card.Body>
            </div>
        </Card>
    );
}

export default MovieCard;
