import React from 'react';
import PropTypes from 'prop-types';
import style from '../assets/styles/Filter.css';

const Filter = ({handleFilter, categories}) => (
  <section className={style.container}>
    <h3 className={style.title}>Categories</h3>
    <ul className={style.list}>
      {
        categories.map(category => (
          <li key={category.idCategory}>
            <span onClick={handleFilter} role="presentation">{category.strCategory}</span>
          </li>
        ))
      }
    </ul>
  </section>
);

Filter.PropTypes = {
  handleFilter: PropTypes.func.isRequired,
  categories: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default Filter;