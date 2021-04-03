import React from 'react';
import style from '../assets/styles/Footer.module.css';

const Footer = () => (
  <footer>
    <div className={style.container}>
      <p>
        Data Provided by
        <a href="https://www.thecocktaildb.com/">Cocktails DB</a>
      </p>
      <p>
        Made by
        <a href="https://gurbuzertunga.site/" target="_blank" rel="noreferrer">Gurbuz Ertunga</a>
      </p>
    </div>
  </footer>
);

export default Footer;
