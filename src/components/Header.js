import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import style from '../assets/styles/Header.module.css';

const NavBar = () => (
  <nav className={style.container}>
    <div className={style.logoContainer}>
      <h4>COCTAIL RECIPES</h4>
    </div>
    <div className="links">
      <ul className={style.list}>
        <Link to="/">
          <li>Home</li>
        </Link>
      </ul>
    </div>
  </nav>
);

export default withRouter(NavBar);
