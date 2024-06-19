import Header from "../components/Header";
import Footer from "../components/Footer";
import Karuselka from "../components/Karuselka";

import img1 from "../assets/images/card-poster-1.jpg";
import img2 from "../assets/images/image5.webp";
import img3 from "../assets/images/card-poster-3.png";
import img4 from "../assets/images/card-poster-4.png";

import MovieCard from "../components/MovieCard";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";

import "../assets/styles/MainPage.css";

const MainPage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    {/* Info for movie cards */}
    const moviesList = [
      {
        id: 1,
        title: "Inception",
        duration: 148,
        director: "Крістофер Нолан",
        actors: [
          "Леонардо Ді Капріо",
          "Елліот Пейдж",
          "Кілліан Мерфі",
          "Маріон Котіяр",
          "та інші.",
        ],
        poster: img1,
        likes: 21,
        showDates: ["09:30", "12:00", "21:21"],
      },
      {
        id: 2,
        title: "Фуріоза: Шалений Макс. Сага",
        duration: 148,
        director: "Джордж Міллер",
        actors: ["Аня Тейлор-Джой",
          "Кріс Гемстворт",
          "Аліла Браун",
          "Том Берк",
          "та інші."],
        poster: img2,
        likes: 21,
        showDates: ["10:00", "15:30", "20:00"],
      },
      {
        id: 3,
        title: "Уявні друзі",
        duration: 104,
        director: "Джон Кразінські",
        actors: ["Раян Рейнольдс",
          "Джон Кразінські",
          "Блейк Лайвлі",
          "Бред Пітт",
          "та інші."],
        poster: img3,
        likes: 21,
        showDates: ["12:45", "17:00", "18:30"],
      },
      {
        id: 4,
        title: "Будинок Слово. Нескінчений роман",
        duration: 120,
        director: "Тарас Томенко",
        actors: ["Довженко В'ячеслав Валерійович",
          "Попенко Геннадій Миколайович",
          "Ніна Набока",
          "та інші."],
        poster: img4,
        likes: 21,
        showDates: ["10:00", "15:30", "22:00"],
      },
    ];
    setMovies(moviesList);
  }, []);
  return (
    <>
      <Header />

      <Karuselka />

      <div id="containsRow">
        <Row>
          {movies.map((movie) => (
            <Col md={6} key={movie.id}>
              <MovieCard movie={movie} />
            </Col>
          ))}
        </Row>
      </div>
      <Footer />
    </>
  );
};

export default MainPage;
