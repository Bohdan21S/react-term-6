import Header from '../components/Header';
import Footer from '../components/Footer';
import KaruselkaNahui from '../components/KaruselkaNahui';
import Hui from '../components/Hui';
import Trah from '../components/Trah';

import img4 from '../assets/images/image5.webp';
import img6 from '../assets/images/image6.png';

import MovieCard from '../components/MovieCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';

import "../assets/styles/MainPage.css";



const MainPage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const moviesList = [
      {
        id: 1,
        title: 'Фуріоза: Шалений Макс. Сага',
        duration: 148,
        director: 'Джордж Міллер',
        actors: ['Аня Тейлор-Джой', 'Кріс Гемстворт', 'Аліла Браун', 'Том Берк', 'та інші.'],
        description: 'Коли світ занепав, юну Фуріозу викрадають із Зеленого Місця Багатьох Матерів та віддають до рук великої Байкерської Орди на чолі з Дементусом. Пробираючись разом Пусткою, вони натрапляють на Цитадель Несмертела Джо. Поки два тирани воюють за панування, на Фуріозу чекає багато випробувань у спробі віднайти шлях додому.',
        poster: img4,
        likes: 21,
        showDates: ['09:30', '12:45', '24:21']
      },
      {
        id: 2,
        title: 'Фільм 1',
        duration: 120,
        director: 'Режисер 1',
        actors: ['Актор 1', 'Актор 2'],
        description: 'Короткий опис фільму 1',
        poster: img6,
        likes: 21,
        showDates: ['09:30', '12:45', '24:21']
      },
       {
        id: 3,
        title: 'Фільм 1',
        duration: 120,
        director: 'Режисер 1',
        actors: ['Актор 1', 'Актор 2'],
        description: 'Короткий опис фільму 1',
        poster: img4,
        likes: 21,
        showDates: ['09:30', '12:45', '24:21']
      }
    ];
    setMovies(moviesList);
  }, []);
  return (
    <>
    
        <Header/>

        <KaruselkaNahui />

        <div id='containsRow'>
      <Row>
        {movies.map(movie => (
          <Col md={6} key={movie.id}>
            <MovieCard movie={movie} showDates={movie.showDates}/>
          </Col>
        ))}
      </Row>
    </div>

    
        <header className="App-header">
            <h1>Ласкаво просимо на хуй державної служби!</h1>
            <Hui>ЯКШО ТИ ЦЕ ЧИТАЄШ - ТИ ПІДАР</Hui>
            <Trah/>
        </header>
    <image src={img4} alt='sddsdasd'/>







    
        <main>
            <section className="intro-section">
                <h2>Розвиток країни через державну службу</h2>
            <p>
            Вітаємо вас на нашому сайті, присвяченому державним ініціативам,
            політиці та розвитку країни через державну службу. Тут ви знайдете
            інформацію про реформи, законодавство, актуальні ініціативи та
            багато іншого.
          </p>
        </section>
        
        <section className="featured-initiatives">
          <h2>хуй ініціативи</h2>
          <div className="initiative-card">
            <img src="initiative-image.jpg" alt="Актуальна ініціатива" />
            <h3>Цифрова трансформація</h3>
            <p>
              Інформація про цифрові проекти, які хуй життя громадян.
            </p>
          </div>
          <div className="initiative-card">
            <img src="initiative-image.jpg" alt="Актуальна ініціатива" />
            <h3>Соціальна підтримка</h3>
            <p>
              Програми та ініціативи для підтримки вразливих хуївnp
              населення.
            </p>
          </div>
        </section>
      </main>
        <Footer/>
    </>
  );
};

export default MainPage;
