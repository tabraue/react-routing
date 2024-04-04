import React, { useEffect, useState } from 'react';
import './CardReceta.css';
import { useParams } from 'react-router-dom';
import { getMealById } from '../../services/meal.service';

const CardReceta = () => {
  const { idMeal } = useParams();
  const [mealById, setMealById] = useState({});

  const getOneMealById = async () => {
    const meal = await getMealById(idMeal);
    setMealById(meal);
  };

  useEffect(() => {
    getOneMealById();
  }, []);

  /* console.log(idMeal) */

  const ingredientsAndMeasures = [];

  for (let i = 1; i <= 7; i++) {
    const ingredient = mealById[`strIngredient${i}`];
    const measure = mealById[`strMeasure${i}`];
    if (ingredient && measure) {
      // si existen ambos -> ok, de esta forma sin va vacio o null no peta
      ingredientsAndMeasures.push({ ingredient, measure });
    } else if (ingredient) {
      // en caso de que solo exista el ingrediente sin la medida
      ingredientsAndMeasures.push({ ingredient, measure: '' });
    }
  }

  return (
    <div className="meal-container">
      <div className="card">
        <h3 className="meal-name">{mealById.strMeal}</h3>
        <img src={mealById.strMealThumb} alt={mealById.strMeal} />
        <details>
          <summary>Ingredientes</summary>
          {ingredientsAndMeasures &&
            ingredientsAndMeasures.map(({ ingredient, measure }, idx) => (
              <p key={idx}>
                {ingredient} · {measure}
              </p>
            ))}
          <p>
            {mealById.strIngredient1} · {mealById.strMeasure1}
          </p>
        </details>
        <details>
          <summary>Instrucciones</summary>
          <p>{mealById.strInstructions}</p>
        </details>
      </div>
    </div>
  );
};

export default CardReceta;
