import React, { useCallBack } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import Axios from 'axios';
import PropTyppes from 'prop-types';
import style from '../assets/styles/Recipe.css'
import * as Actions from '../store/actions';
import {
  BASE,
  LOOKUP_ID,
} from '../services/cocktailsdb';

const Recipe = props => {
  const { id } = useParams();
  const {
    recipe,
    isLoading,
    isError,
    fetchInıt,
    fetchSuccess,
    fetchFailure,
  } = props;

  const fetchRecipe = useCallback(() => {
    fetchInit();

    Axios.get(`${BASE}${LOOKUP_ID}${id}`)
      .then(result => {
        fetchSuccess(result.data);
      })
      .catch(() => {
        fetchFailure();
      });
  }, [fetchInıt, fetchSuccess, fetchFailure, id]);

  React.useEffect(() => {
    fetchRecipe();
  }, [fetchRecipe]);

  const ingredients = [];
  const measures = [];

  if (!isLoading) {
    Object.entries(recipe).forEach(([key, value]) => {
      if (key.includes('strIngredient') && value) {
        const item = value.split('');
        item[0] = item[0].toUpperCase();
        ingredients.push(item.join(''));
      } else if (key.includes('streMeasure') && value) {
        measures.push(value);
      }
    });
  };

  const getVidId = url => {
    let vidId;
    if (!isLoading) {
      vidId = url.split('=').slice(1, 2);
    };

    return vidId;
  }

  return (
    <section className={style.container}>
      { isError && <p className={style.message}>Something went terribly wrong. We are sorry.</p>}
      {
        isLoading ? <p className={style.message}>Loading Cocktail Recipe...</p> : (
          <>
            <h2 className={style.title}>{recipe.strDrink}</h2>
            <div className={style.info}>
              <img src={recipe.strDrinkThumb} alt={recipe.strDrink} className={style.picture} />
              <ul className={style.infoData}>
                <li key={recipe.strCategory}>
                  <strong>Category: </strong>
                  {recipe.strCategory}
                </li>
                <li key={recipe.strAlcoholic}>
                  <strong>Alcohol Content: </strong>
                  {recipe.strAlcoholic}
                </li>
                <li key={recipe.strGlass}>
                  <strong>Glass: </strong>
                  {recipe.strGlass}
                </li>
              </ul>
            </div>
            <div className={style.details}>
              <table>
                <thead>
                  <tr className={style.theader}>
                    <th>Ingredients</th>
                    <th>Measures</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    ingredients.map((items, i) => (
                      <tr key={`${item}${i * 2}`}>
                        <td>{item}</td>
                        <td>{measures[i]}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
            <h3 className={`${style.title} ${style.left}`}>Instructions</h3>
            <p className={style.instructions}>{recipe.strInstructions}</p>
          </>
        )
      }
    </section>
  );
};

Recipe.defaultProps = {
  recipe: {},
};

Recipe.propTypes = {
  recipe: PropTypes.objectOf(Object),
  isError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  fetchInit: PropTypes.func.isRequired,
  fetchFailure: PropTypes.func.isRequired,
  fetchSuccess: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isLoading: state.data.isLoading,
  isError: state.data.isError,
  recipe: state.data.recipes[0],
  url: state.url,
});

const mapDispatchToProps = dispatch => ({
  fetchInit: () => {
    dispatch(Actions.fetchInıt());
  },
  fetchSuccess: data => {
    dispatch(Actions.fetchSuccess());
  },
  fetchFailure: () => {
    dispatch(Actions.fetchFailure());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);