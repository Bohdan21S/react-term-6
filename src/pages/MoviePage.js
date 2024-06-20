import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { FaPlay } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReactPlayer from "react-player";
import "../assets/styles/MoviePage.css";
import { useNavigate } from "react-router-dom";

const MoviePage = ({ film }) => {
  const [trailerVisible, setTrailerVisible] = useState(false);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(1);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [reviews, setReviews] = useState([
    { id: 1, user: "John Doe", rating: 8, comment: "Чудовий фільм!", userID: "",},
    {
      id: 2,
      user: "Jane Smith",
      rating: 7,
      comment: "Доволі класне кінце впринципі можу рекомендувати",
      userID: "",
    },
    {
      id: 3,
      user: "Alice Johnson",
      rating: 10,
      comment:
        "Це буквально один із шедеврів кінематографу! Прекрасний сюжет, хороша картинка, витончена кожна деталь фільму.",
        userID: "",
    },
  ]);

  const loggedInUser = localStorage.getItem('loggedInUser');
  const userId = loggedInUser ? JSON.parse(loggedInUser).id : null;
  const userName = loggedInUser ?  JSON.parse(loggedInUser).name : 'Guest';
  const movieId = film.id;

  //додає з локалстореджа в reviews всі відгуки до цього фільму
  useEffect(() => {
    const existingReviews = localStorage.getItem('reviews');
    if (existingReviews) {
      const reviewsObject = JSON.parse(existingReviews);
      let allReviews = [];
      for (let user in reviewsObject) {
        if (reviewsObject[user][movieId]) {
            allReviews = [...allReviews, ...reviewsObject[user][movieId].map(review => ({...review, userID: user}))];
        }
      }
      setReviews(prevReviews => [...allReviews, ...prevReviews]);
    }
  }, [movieId]);

  const handleTrailerClick = () => {
    setTrailerVisible(true);
  };

  // Коректно включає трейлер фільму
  const handleOnReady = () => {
    setPlaying(true);
    setVolume(0);
    setTimeout(() => {
      setVolume(1);
    }, 50);
  };


  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (review.trim() === "") return; // Prevent empty reviews

    const newReview = {
      id: Date.now(), // Unique identifier (can be timestamp)
      user: userName,
      rating,
      comment: review,
      userID: userId
    };

    setReviews(prevReviews => [newReview, ...prevReviews]);

    let reviewsObject = {};
  const existingReviews = localStorage.getItem('reviews');
  if (existingReviews) {
    reviewsObject = JSON.parse(existingReviews);
  }

  if (!reviewsObject[userId]) {
    reviewsObject[userId] = {};
  }

  if (!reviewsObject[userId][movieId]) {
    reviewsObject[userId][movieId] = [];
  }

  reviewsObject[userId][movieId].push(newReview);

  localStorage.setItem('reviews', JSON.stringify(reviewsObject));

  setReview('');
  setRating(1);
};

const handleDeleteReview = (reviewId) => {
  let storedReviews = JSON.parse(localStorage.getItem('reviews'));

  for (let userId in storedReviews) {
    for (let movieId in storedReviews[userId]) {
      storedReviews[userId][movieId] = storedReviews[userId][movieId].filter(review => review.id !== reviewId);
    }
  }

  localStorage.setItem('reviews', JSON.stringify(storedReviews));

  // Filter out the review to delete based on its id
  const updatedReviews = reviews.filter((review) => review.id !== reviewId);
  setReviews(updatedReviews);
};

  const navigate = useNavigate();
  const handleTicketBuy = (ticketId) => {
    navigate(`/ticket/${film.id}/${ticketId + 1}`);
  };

  return (
    <>
      <Header />
      <Container fluid className="p-0 container-p-0">
        {!trailerVisible && (
          <div
            className="banner"
            style={{ backgroundImage: `url(${film.banner})` }}
          >
            <Button
              variant="primary"
              className="banner-button"
              onClick={handleTrailerClick}
            >
              <FaPlay />
            </Button>
          </div>
        )}
        {trailerVisible && (
          <div className="player">
            <ReactPlayer
              width="100%"
              height="100%"
              volume={volume}
              onReady={handleOnReady}
              playing={playing}
              url={film.trailerUrl}
            />
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
          {film.showDates && (
            <div className="show-dates-for-movie">
              {film.showDates.map((date, index) => (
                <Button onClick={() => handleTicketBuy(index)} key={index} variant="primary" className="date-button">
                  {date}
                </Button>
              ))}
            </div>
          )}
            <p>
              <strong>Вікове обмеження:</strong> {film.ageLimit}
            </p>
            <p>
              <strong>Жанр:</strong> {film.genre}
            </p>
            <p>
              <strong>Тривалість:</strong> {film.duration}
            </p>
            <p>
              <strong>Рік випуску:</strong> {film.year}
            </p>
            <p>
              <strong>Країна:</strong> {film.country}
            </p>
            <p>
              <strong>Режисер:</strong> {film.director}
            </p>
            <p>
              <strong>Актори:</strong> {film.actors.join(", ")}
            </p>
            <p>
              <strong>Рейтинги:</strong> {film.ratings}
            </p>
            <p>
              <strong>Опис фільму:</strong> {film.description}
            </p>
          </Col>
        </Row>
        <div className="review-section">
          <h2>Відгуки</h2>
          {/* Display existing reviews */}
          {reviews.map((review) => (
            <div key={review.id} className="review-item">
              <p>
                <strong>{review.user}</strong> оцінив на {review.rating}/10:
              </p>
              <p>{review.comment}</p>
              {/* Display delete button only for user's own reviews */}
              {review.userID === userId && (
                <a
                  id="delete-button"
                  onClick={() => handleDeleteReview(review.id)}
                >
                  Видалити відгук
                </a>
              )}
              <hr />
            </div>
          ))}
          {/* Review form */}
          <Form id="leave-review-form" onSubmit={handleReviewSubmit}>
            <Form.Group controlId="reviewTextarea">
              <Form.Label id="label-write-review">Написати відгук</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={review}
                onChange={(e) => setReview(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="rating-part" controlId="ratingSelect">
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
            <Button id="submit-button" variant="primary" type="submit">
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
