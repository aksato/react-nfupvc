import React from 'react';
import './style.css';
import logo from './logo.svg';

export default function App() {
  return (
    <>
      <header id="cabecalho-principal">
        <a href="#">
          <img src={logo} />
        </a>
        <nav id="navegacao-principal">
          <ul>
            <li>
              <a href="#">Filmes</a>
            </li>
            <li>
              <a href="#">Listas</a>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
          </ul>
        </nav>
      </header>
      <main id="conteiner-principal"></main>
      <footer id="rodape-principal">
        <p>
          <small>Copyright 2021</small>
        </p>
      </footer>
    </>
  );
}
