
import { API_END_POINT } from '../../const';
import { Link } from "react-router-dom"
import {useDataFetching} from '../../Hooks/useDataFetching.js'

export const Category = () => {
    const { data: categories, loading } = useDataFetching(`${API_END_POINT}/categories/`);

  if (loading) {
    return <div>Loading...</div>;
  }
    

    return(
        <>
        
            {categories.map((category, index) => (
                <div key={index}>
                    <Link className='link' to={`/category/${category.id}`}>{category.category_name}</Link>
                    
                </div>
            ))}
        
        
        </>
    )
}