import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import LogoQuiz from '../../assets/images/quiz.png';

function Score({ score }) {
  const navigate = useNavigate();

  function restart() {
    return navigate('/');
  }

  const messages = {
    0: 'Você não sabe nada sobre react 😐',
    1: 'Você sabe muito pouco sobre react 🤨',
    2: 'Você sabe um pouco sobre react 🤔',
    3: 'Você está no caminho 🙂',
    4: 'Você está aprendendo bem sobre react 😏',
    5: 'Você sabe muito sobre react 😉',

  }


  return (
    <div className="container">
      <h1 className="title">Pontuação</h1>
      <img src={LogoQuiz} alt="Logo Quiz" className="logo" />
      <small className="description">{score? messages[score] : messages[5]}</small>

      <div className="score-container">
        <big className="score">{score ? score : 5}</big>
        <small className="total">/5</small>
      </div>


      <button className="button-restart" onClick={restart}>🚀 Reiniciar</button>
      <footer className="footer">
        <span className="author">Criado por <a href="https://github.com/mateushen/" target="_blank" rel="noreferrer" className="author">Mateus Henrique 😄</a></span>
      </footer>
    </div>
  )
}

export default Score;