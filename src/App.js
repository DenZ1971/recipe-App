import { Link, Route, Routes } from "react-router-dom";
import { Home } from './components/Home/Home'
import { RecipeDetail } from './components/RecipDetail/Recipdetail'
import { Recipes } from "./components/Recipes/Recipes";
import { Category } from "./components/Category/Category";


function App() {
  
  return (
    
    <div className='App'>
      
      <nav className="navbar">
      <Link className="link" to='/'>Home</Link>
      <Category />
      
      </nav>
      <Routes >
      <Route path='/' element={<Home />} />
      <Route
          path={`/category/:categoryId`}
          element={<Recipes />}
        />
      <Route path='/recipe/:recipeId' element={<RecipeDetail />} />

      
      </Routes>
    </div>
  );
}

export default App;
