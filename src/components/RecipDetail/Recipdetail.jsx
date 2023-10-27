import { API_END_POINT } from '../../const';
import { useParams } from 'react-router-dom'
import {useDataFetching} from '../../Hooks/useDataFetching.js'

export const RecipeDetail = () => {
  const { recipeId } = useParams();
  const { data: recipe, loading } = useDataFetching(`${API_END_POINT}/recipe/${recipeId}/`);

  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <div className='content'>
      <h2 className='title'>{recipe.title}</h2>
      <p className='text'>{recipe.text}</p>
      
    </div>
  );
};

