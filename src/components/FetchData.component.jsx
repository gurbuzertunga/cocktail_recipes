const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail';
const FetchCocktails = async () => {
  const data = [];
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(res.status);
    }
    data.push(await res.json());
    console.log(data);
  } catch (error) {
    console.log(error);
  }
  return data;
};

export default FetchCocktails;
