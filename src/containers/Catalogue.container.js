import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import PropTypes from 'prop-types';
import style from '../assets/styles/Catalogue.css';
import {
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
    cocktails,
    url,
    isError,
    isLoading,
    categories,
    fetchSuccess,
    fetchFailure,
    filter,
    filterRecipes,
    getCategories,
  } = props;

  const handleFetchRecipes = useCallback(
    () => {
      Axios.get(url)
        .then(result => {
          console.log(url);
          fetchSuccess(result.data);
        })
        .catch(() => {
          fetchFailure();
        });
    },
    [url, fetchSuccess, fetchFailure],
  );

  const handleFilter = e => {
    filterRecipes(e.target.innerText);
    handleFetchRecipes(url);
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

  const handleClick = data => console.log(data);

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
      { !isLoading && <List recipes={cocktails} handleClick={handleClick} category={filter} />}
    </div>
  );
};

Catalogue.defaultProps = {
  cocktails: [],
  url: '',
  categories: [],
  filter: '',
  isError: false,
  isLoading: false,
};

Catalogue.propTypes = {
  cocktails: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  url: PropTypes.string,
  isError: PropTypes.bool,
  isLoading: PropTypes.bool,
  categories: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  fetchFailure: PropTypes.func.isRequired,
  fetchSuccess: PropTypes.func.isRequired,
  filter: PropTypes.string,
  getCategories: PropTypes.func.isRequired,
  filterRecipes: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cocktails: state.recipesReducer.cocktails,
  categories: state.categoriesReducer,
  filter: state.filterReducer.filter,
  url: state.urlReducer.url,
});

export default connect(mapStateToProps, {
  fetchSuccess,
  fetchFailure,
  filterRecipes,
  getCategories,
})(Catalogue);
