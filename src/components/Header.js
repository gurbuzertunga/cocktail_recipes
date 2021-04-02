import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
// import cocktailRecipes from '../assets/images/cocktailrecipes.png';
import style from '../assets/styles/Header.module.css';

const NavBar = ({ history }) => {
  const id = history.location.pathname;
  console.log(id);
  return (
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
};

NavBar.propTypes = {
  history: PropTypes.objectOf(Object).isRequired,
};

export default withRouter(NavBar);
