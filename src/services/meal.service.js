import api from './index.service';

// * Servicio que me retorne todas las categorías de las recetas

export const getMealsCategories = async () => {
  try {
    ///list.php?c=list
    const { data } = await api.get('list.php?c=list');
    console.log(data.meals);
    return data.meals;
  } catch (error) {
    console.error(error);
    throw new Error('Cannot get all categories');
  }
};

// * Servicio que me retorne todas las recetas filtradas por una categoría concreta
//www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
export const getMealsFilteredByCategory = async (categoryName) => {
  try {
    const { data } = await api.get(`/filter.php?c=${categoryName}`);
    console.log(data.meals);
    return data.meals;
  } catch (error) {
    console.error(error);
    throw new Error('Cannot get meals by category');
  }
};

// * Servicio que me retorne 1 receta concreta
//www.themealdb.com/api/json/v1/1/lookup.php?i=52772
export const getMealById = async (idMeal) => {
  try {
    const { data } = await api.get(`/lookup.php?i=${idMeal}`);
    console.log(data.meals);
    return data.meals[0];
  } catch (error) {
    console.error(error);
    throw new Error('Cannot get chosen meal');
  }
};
