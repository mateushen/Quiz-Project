import React from 'react';
import './style.css';
import LogoQuiz from '../../assets/images/quiz.png';

function Home() {
  return (
    <div className="container">
        <h1 className="title">Bem-vindo ao</h1>
        <img src={LogoQuiz} alt="Logo Quiz" className="logo"/>
        <small className="description">Teste seus conhecimentos sobre React</small>

        <button className="button-start">🚀 Começar</button>
        <footer className="footer">
            <span className="author">Criado por <a href="https://github.com/mateushen/" target="_blank" rel="noreferrer" className="author">Mateus Henrique 😄</a></span>
        </footer>
    </div>
  )
}

export default Home;