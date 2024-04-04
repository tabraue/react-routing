import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getMealsFilteredByCategory } from '../services/meal.service';

/**
 * * AQUI SE VAN A MOSTRAR LOS NOMBRES DE LAS RECETAS
 * * BASANDONOS EN LAS DIFERENTES CATEGORÍAS DE LAS COMIDAS
 * - visualmente serán cards blancas con el nombre de la receta en su interior
 *
 */

const Recetario = () => {
  const { categoryName } = useParams();
  const [allMealsByCategory, setAllMealsByCategory] = useState();

  console.log(allMealsByCategory);

  const listMealsByCategories = async () => {
    const meals = await getMealsFilteredByCategory(categoryName);
    setAllMealsByCategory(meals);
  };

  useEffect(() => {
    listMealsByCategories();
  }, []);

  return (
    <div>
      <h1>Recetario </h1>
      <div className="receta-list">
        {allMealsByCategory &&
          allMealsByCategory.map((meal) => {
            return (
              <div key={meal.idMeal} className="receta-item">
                <Link to={`/receta/${meal.idMeal}`}>{meal.strMeal}</Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Recetario;
