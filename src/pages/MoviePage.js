import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { FaPlay } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "../assets/styles/MoviePage.css";

const MoviePage = ({ film }) => {
  const [trailerVisible, setTrailerVisible] = useState(false);
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(1);
  const [reviews, setReviews] = useState([
    { id: 1, user: 'John Doe', rating: 8, comment: 'Great movie!' },
    { id: 2, user: 'Jane Smith', rating: 7, comment: 'Enjoyed it a lot.' },
    { id: 3, user: 'Alice Johnson', rating: 9, comment: 'Must-watch!' }
  ]);

  const handleTrailerClick = () => {
    setTrailerVisible(true);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (review.trim() === '') return; // Prevent empty reviews

    const newReview = {
      id: Date.now(), // Unique identifier (can be timestamp)
      user: 'Current User', // Replace with actual user info
      rating,
      comment: review
    };

    // Add new review to the beginning of the reviews list
    setReviews([newReview, ...reviews]);
    setReview('');
    setRating(1);
  };

  const handleDeleteReview = (reviewId) => {
    // Filter out the review to delete based on its id
    const updatedReviews = reviews.filter(review => review.id !== reviewId);
    setReviews(updatedReviews);
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
              style={{ width: "100%", height: "100%" }}
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
            <p><strong>Опис фільму:</strong> {film.description}</p>
          </Col>
        </Row>
        <div className="review-section">
          <h2>Відгуки</h2>
          {/* Display existing reviews */}
          {reviews.map(review => (
            <div key={review.id} className="review-item">
              <p><strong>{review.user}</strong> оцінив на {review.rating}/10:</p>
              <p>{review.comment}</p>
              {/* Display delete button only for user's own reviews */}
              {review.user === 'Current User' && (
                <Button variant="danger" size="sm" onClick={() => handleDeleteReview(review.id)}>
                  Видалити відгук
                </Button>
              )}
              <hr />
            </div>
          ))}
          {/* Review form */}
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
              <div className="star-rating">
                {[...Array(10)].map((_, i) => (
                  <React.Fragment key={i}>
                    <input
                      type="radio"
                      id={`star${10 - i}`}
                      name="rating"
                      value={10 - i}
                      checked={rating === 10 - i}
                      onChange={() => setRating(10 - i)}
                    />
                    <label htmlFor={`star${10 - i}`}>★</label>
                  </React.Fragment>
                ))}
              </div>
            </Form.Group>
            <Button variant="primary" type="submit">
              Відправити
            </Button>
          </Form>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default MoviePage;
