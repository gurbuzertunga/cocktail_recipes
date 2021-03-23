import axios from 'axios';

const fetchData = () => {
  try{
    const data = axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
  }
  return data;
};

export default fetchData;
