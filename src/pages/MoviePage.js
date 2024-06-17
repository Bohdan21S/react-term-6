import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import "../assets/styles/MoviePage.css";
import Header from '../components/Header';
import { FaPlay } from 'react-icons/fa'; // Бібліотека для значків

import { useParams } from 'react-router-dom';


const MoviePage = ({ film }) => {
  const [trailerVisible, setTrailerVisible] = useState(false);
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(1);

  // const { id } = useParams();
  // const film = moviesData && moviesData.find(movie => movie.id === parseInt(id));

  const handleTrailerClick = () => {
    setTrailerVisible(true);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    console.log('Review:', review, 'Rating:', rating);
    setReview('');
    setRating(1);
  };

  return (
    <>
      <Header />
      <Container fluid className="p-0">
        {!trailerVisible && (
          <div
            className="banner"
            style={{ backgroundImage: `url(${film.banner})` }}
          >
            <Button variant="primary" className="banner-button" onClick={handleTrailerClick}>
              <FaPlay />
            </Button>
          </div>
        )}
        {trailerVisible && (
          <div className="embed-responsive embed-responsive-16by9 my-4">
            <iframe
              className="embed-responsive-item"
              src={film.trailerUrl}
              allowFullScreen
              title="Trailer"
            ></iframe>
          </div>
        )}
      </Container>
      <Container className="film-info my-4">
        <h1>{film.title}</h1>
        <Row>
          <Col md={4}>
            <img src={film.poster} alt={`${film.title} poster`} />
          </Col>
          <Col md={8}>
            <p><strong>Вікове обмеження:</strong> {film.ageLimit}</p>
            <p><strong>Жанр:</strong> {film.genre}</p>
            <p><strong>Тривалість:</strong> {film.duration}</p>
            <p><strong>Рік випуску:</strong> {film.year}</p>
            <p><strong>Країна:</strong> {film.country}</p>
            <p><strong>Режисер:</strong> {film.director}</p>
            <p><strong>Актори:</strong> {film.actors.join(', ')}</p>
            <p><strong>Рейтинги:</strong> {film.ratings}</p>
            <p>{film.description}</p>
          </Col>
        </Row>
        <div className="review-section">
          <h2>Залишити відгук</h2>
          <Form onSubmit={handleReviewSubmit}>
            <Form.Group controlId="reviewTextarea">
              <Form.Label>Ваш відгук</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={review}
                onChange={(e) => setReview(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="ratingSelect">
              <Form.Label>Оцінка</Form.Label>
              <Form.Control
                as="select"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              >
                {[...Array(10).keys()].map((num) => (
                  <option key={num + 1} value={num + 1}>
                    {num + 1}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
              Відправити
            </Button>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default MoviePage;
