import React, { useState } from 'react';
import axios from 'axios';
import '../index.css'

const SmartCooking = () => {
  const [userInput, setUserInput] = useState('');
  const [results, setResults] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [recipeDetails, setRecipeDetails] = useState(null);

  const API_KEY = '53b89ba3eb90450d957f2601488691f2';

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${userInput}&number=10`
      );
      setResults(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleRecipeSelect = async (recipeId) => {
    try {
      const instructionsResponse = await axios.get(
        `https://api.spoonacular.com/recipes/${recipeId}/analyzedInstructions?apiKey=${API_KEY}`
      );
      const ingredientResponse = await axios.get(
        `https://api.spoonacular.com/recipes/${recipeId}/ingredientWidget.json?apiKey=${API_KEY}`
      );
      const nutritionResponse = await axios.get(
        `https://api.spoonacular.com/recipes/${recipeId}/nutritionLabel?apiKey=${API_KEY}`
      );
      const equipmentResponse = await axios.get(
        `https://api.spoonacular.com/recipes/${recipeId}/equipmentWidget.json?apiKey=${API_KEY}`
      );
      const recipeInfoResponse = await axios.get(
        `https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=false&apiKey=${API_KEY}`
      );

      setSelectedRecipe(recipeId);
      setRecipeDetails({
        instructions: instructionsResponse.data,
        ingredients: ingredientResponse.data.ingredients,
        nutritionLabel: nutritionResponse.data,
        equipment: equipmentResponse.data.equipment,
        recipeInfo: recipeInfoResponse.data,
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Smart Cooking</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter ingredients"
        />
        <button type="submit">Search</button>
      </form>

      {results.length > 0 && (
        <div>
          <h2>Search Results</h2>
          <ul>
            {results.map((result) => (
              <li key={result.id} onClick={() => handleRecipeSelect(result.id)}>
                {result.title}
              </li>
            ))}
          </ul>
        </div>
      )}

      {selectedRecipe && recipeDetails && (
        <div>
          <h2>Selected Recipe: {recipeDetails.recipeInfo.title}</h2>
          <h3>Instructions</h3>
          <ul>
            {recipeDetails.instructions.map((step) => (
              <li key={step.number}>{step.step}</li>
            ))}
          </ul>
          <h3>Ingredients</h3>
          <ul>
            {recipeDetails.ingredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.name}</li>
            ))}
          </ul>
          <h3>Nutrition Label</h3>
          <div dangerouslySetInnerHTML={{ __html: recipeDetails.nutritionLabel }} />
          <h3>Equipment</h3>
          <ul>
            {recipeDetails.equipment.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
          <h3>Recipe Information</h3>
          <p>{recipeDetails.recipeInfo.summary}</p>
          <p>Prep Time: {recipeDetails.recipeInfo.readyInMinutes} minutes</p>
          <p>Servings: {recipeDetails.recipeInfo.servings}</p>
        </div>
      )}
    </div>
  );
};

export default SmartCooking;
