import React, { useState } from 'react';
import SideBar from '../components/sidebar';
import '../styles/recipes_page.css';
import SearchBar from '../components/searchbar';
import RecipesCards from '../components/recipescards';
import { useNavigate } from 'react-router-dom';
const RecipesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (query) => {
    setSearchQuery(query);
    setFilteredProjects(
        recipes.filter((recipe) =>
            recipe.name.toLowerCase().includes(query.toLowerCase())
        )
    );
};

const handleRecipeClick = (recipeId) => {
  navigate(`/recipespage/${recipeId}`);
};

return(
    <body>
    <SideBar/>  
    <SearchBar value={searchQuery} onChange={handleSearch}/>
    <RecipesCards onClick={handleRecipeClick}/>

    
</body>
);
};
  
  export default RecipesPage;