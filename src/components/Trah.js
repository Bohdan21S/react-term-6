import React, { useState } from 'react';
//import '../Trah.css'

const Trah = () => {
  const [counter, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(c => c + 1);
    alert('Я так і знав ти цього хочеш');
  };

  const [buttonText, setButtonText] = useState('Натягнути Настю');

  const handleMouseEnter = () => {
    setButtonText('Натягнути Назіка!');
  };

  return (
    <div>
      <button onClick={handleClick} onMouseEnter={handleMouseEnter} class="btn btn-danger" id='NASTYA'>
        {buttonText}
      </button>
      <p>Настю трахнуто: {counter} разів</p>
    </div>
  );
};

export default Trah;
