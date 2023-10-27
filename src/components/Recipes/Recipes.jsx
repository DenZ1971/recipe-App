import { API_END_POINT } from '../../const';
import { useParams, Link } from "react-router-dom";
import {useDataFetching} from '../../Hooks/useDataFetching.js'

export const Recipes = ({category}) => {
    const { categoryId } = useParams();
    const { data: recipes, loading } = useDataFetching(`${API_END_POINT}/recipe/?category=${categoryId}`);

  if (loading) {
    return <div>Loading...</div>;
  }

    
    return(
        <div className='content'>
            {recipes.map((recipe, index) => (
                <div key={recipe.id}>
                    <h2 className='title'><Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link></h2>
                   
                    <p className='text-cut'>{recipe.text}</p>
                </div>
            ))}
        
        </div>
    )
}