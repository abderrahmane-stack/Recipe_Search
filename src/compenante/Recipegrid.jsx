import React, { useEffect, useState } from 'react';

const api = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';

const Recipegrid = ({ ingredient }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(api + ingredient)
      .then((response) => response.json())
      .then((data) => setRecipes(data.meals || [])) 
      .catch((error) => console.error('Error:', error));
  }, [ingredient]); 
  return (
    <div className="recipe-grid">
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <div key={recipe.idMeal} className="recipe-card">
            <h3>{recipe.strMeal}</h3>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          </div>
        ))
      ) : (
        <p>No recipes found for "{ingredient}"</p>
      )}
    </div>
  );
};

export default Recipegrid;
