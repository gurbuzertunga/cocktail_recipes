import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
// import cocktailRecipes from '../assets/images/cocktailrecipes.png'
import style from '../assets/styles/Header.css';

const NavBar = ({ history }) => {
  const id = history.location.pathname;

  return (
    <nav className={
      id === '/' ? style.container : `${style.container}``${style.containerNarrow}`
    }
    >
      <div className="logo">
        <img className={style.logo} src="cocktailRecipes" alt="Cocktail Recipes Logo" />
      </div>
      <div className="links">
        <ul className="style.list">
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
