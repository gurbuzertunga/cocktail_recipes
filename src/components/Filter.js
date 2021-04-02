import React from 'react';
import PropTypes from 'prop-types';
import style from '../assets/styles/Filter.module.css';

const Filter = ({ handleFilter, categories }) => (
  <section className={style.container}>
    <h3 className={style.title}>Categories</h3>
    <ul className={style.list}>
      {
        categories.data && categories.data.map(category => (
          <li key={Math.floor((Date.now() * Math.random()))}>
            <span onClick={handleFilter} role="presentation">{category.strCategory}</span>
          </li>
        ))
      }
    </ul>
  </section>
);

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  categories: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default Filter;
