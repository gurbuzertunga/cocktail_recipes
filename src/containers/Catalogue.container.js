import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import PropTypes from 'prop-types';
import style from '../assets/styles/Catalogue.css';
import {
  fetchInit,
  fetchSuccess,
  fetchFailure,
  filterRecipes,
  getCategories,
} from '../store/actions';
import Filter from '../components/Filter';
import List from '../components/List';
import {
  BASE,
  LOOKUP_CATS,
} from '../services/cocktailsdb';

const Catalogue = props => {
  const {
    recipes,
    url,
    isError,
    isLoading,
    categories,
    fetchInit,
    fetchSuccess,
    fetchFailure,
    filter,
    filterRecipes,
    getCategories,
  } = props;

  console.log(categories);
  const handleFilter = e => {
    filterRecipes(e.target.innerText);
  };

  const fetchCategories = useCallback(() => {
    Axios.get(`${BASE}${LOOKUP_CATS}`)
      .then(result => {
        getCategories(result.data.drinks);
      })
      .catch(fetchFailure());
  }, [getCategories, fetchFailure]);

  const handleFilterSelect = useCallback(
    () => {
      filterRecipes(filter);
    },
    [filter, filterRecipes],
  );

  const handleFetchRecipes = useCallback(
    () => {
      if (!url) {
        return;
      }

      fetchInit();

      Axios.get(url)
        .then(result => {
          fetchSuccess(result.data);
        })
        .catch(() => {
          fetchFailure();
        });
    },
    [url, fetchInit, fetchSuccess, fetchFailure],
  );

  const handleClick = () => fetchInit();

  React.useEffect(() => {
    handleFilterSelect();
  }, [handleFilterSelect]);

  React.useEffect(() => {
    handleFetchRecipes();
  }, [handleFetchRecipes]);

  React.useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <div className={style.container}>
      { isError && <p className={style.message}>Something went terribly wrong. We are sorry.</p>}
      { !filter && <p className={style.message}>Please Select A Category</p>}
      { isLoading
        ? <p className={style.message}>Loading Cocktail Recipes...</p>
        : (<Filter categories={categories} handleFilter={handleFilter} />)}
      { !isLoading && <List recipes={recipes} handleClick={handleClick} category={filter} />}
    </div>
  );
};

Catalogue.defaultProps = {
  recipes: [],
  url: '',
  categories: [],
  filter: '',
  isError: false,
  isLoading: false,
};

Catalogue.propTypes = {
  recipes: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  url: PropTypes.string,
  isError: PropTypes.bool,
  isLoading: PropTypes.bool,
  categories: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  fetchInit: PropTypes.func.isRequired,
  fetchFailure: PropTypes.func.isRequired,
  fetchSuccess: PropTypes.func.isRequired,
  filter: PropTypes.string,
  getCategories: PropTypes.func.isRequired,
  filterRecipes: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  recipes: state.recipesReducer.data,
  categories: state.categoriesReducer,
  filter: state.filterReducer.filter,
  url: state.url,
});

export default connect(mapStateToProps, {
  fetchInit,
  fetchSuccess,
  fetchFailure,
  filterRecipes,
  getCategories,
})(Catalogue);
