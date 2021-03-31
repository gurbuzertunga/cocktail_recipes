import React from 'react';
import { Route } from 'react-router-dom';
import Catalogue from '../containers/Catalogue.container';
import Header from './Header';
import Footer from '.Footer';
import Recipe from '../containers/Recipe.container';

const App = () => (
  <>
    <Header />
    <Route path="/:id">
      <Recipe />
    </Route>
    <Route exact path="/">
      <Catalogue />
    </Route>
    <Footer />
  </>
)

export default App;
