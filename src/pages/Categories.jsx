import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getMealsCategories } from '../services/meal.service';

/**
 * * AQUI SE VAN A MOSTRAR LOS NOMBRES DE TODAS LAS CATEGORÍAS
 * - visualmente serán cards blancas con el nombre de la categoría en su interior
 *
 */

const Categories = () => {
  const [data, setData] = useState()

  const getAllCategories = async () => {
    const meals = await getMealsCategories()
    setData(meals)
  }

  useEffect(() => {
    getAllCategories()
  }, [])
  
  console.log(data)

  return (
    <div>
      <h3 className="categ">Categorias</h3>
      <div className="category-list">
        {
          data && data.map((el, idx) => {
            return (
              <div className='category-item' key={idx}>
                <Link to={`/recetas/${el.strCategory}`} >
                  {el.strCategory}
                </Link>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Categories;
