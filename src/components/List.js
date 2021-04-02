import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import style from '../assets/styles/List.module.css';

const List = ({ recipes, handleClick, category }) => (
  <>
    <div className={style.wrapper}>
      <h3 className={style.title}>{category}</h3>
      <div className={style.container}>
        {
          recipes && recipes.map(recipe => <Item key={recipe.idDrink} recipe={recipe} handleClick={handleClick} />) /* eslint-disable-line */
        }
      </div>
    </div>
  </>
);

List.defaultProps = {
  category: '',
  recipes: [],
};

List.propTypes = {
  recipes: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  handleClick: PropTypes.func.isRequired,
  category: PropTypes.string,
};

export default List;
