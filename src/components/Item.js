import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from '../assets/styles/Item.css';

const Item = ({ recipe, history, handleClick }) => {
  const { idDrink, strDrink, strDrinkThumb } = recipe;
  const clickEffect = id => {
    handleClick();
    history.push(`/${id}`);
  };

  return (
    <article className={style.item}>
      <div onClick={() => clickEffect(idDrink)} onKeyPress={() => clickEffect(idDrink)} role="presentation">
        <h4 className={style.name}>{strDrink}</h4>
        <img className={style.thumb} src={strDrinkThumb} alt={strDrink} />
      </div>
    </article>
  );
};

Item.propTypes = {
  recipe: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  history: PropTypes.objectOf(Object).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default withRouter(Item);
