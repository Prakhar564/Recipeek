// SmartCooking.js

import React, { useState } from 'react';
import axios from 'axios';
import '../index.css';

const SmartCooking = () => {
  const [userInput, setUserInput] = useState('');
  const [results, setResults] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [recipeDetails, setRecipeDetails] = useState(null);

  const API_KEY = '0fea7dacbb8e4fd0944ab7cb9dc97cf5';

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
    
    <div className="smart-cooking-container">
      <div className="sidebar">
        {selectedRecipe && recipeDetails && (
          <>
            <h3>Nutrition Label</h3>
            <div dangerouslySetInnerHTML={{ __html: recipeDetails.nutritionLabel }} />
          </>
        )}
      </div>
      <div className="content">
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
            <h3>Ingredients</h3>
            <ul>
              {recipeDetails.ingredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.name}</li>
              ))}
            </ul>
            <h3>Equipment</h3>
            <ul>
              {recipeDetails.equipment.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
            <h3>Instructions</h3>
            
<ul>
  {recipeDetails.instructions.map((instruction, index) => (
    <li key={index}>
      {instruction.steps.map((step, stepIndex) => (
        <div key={`${index}-${stepIndex}`}>
          <p>{step.number}. {step.step}</p>
          {step.ingredients.length > 0 && (
            <div>
              <strong>Ingredients:</strong>
              <ul>
                {step.ingredients.map((ingredient, ingredientIndex) => (
                  <li key={`${index}-${stepIndex}-${ingredientIndex}`}>
                    {ingredient.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {step.equipment.length > 0 && (
            <div>
              <strong>Equipment:</strong>
              <ul>
                {step.equipment.map((equipment, equipmentIndex) => (
                  <li key={`${index}-${stepIndex}-${equipmentIndex}`}>
                    {equipment.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </li>
  ))}
</ul>
            <h3>Recipe Information</h3>
            <p>
               {recipeDetails.recipeInfo.summary &&
               recipeDetails.recipeInfo.summary.replace(/<a\b[^>](.*?),\/a>/gi,'[LINK_PLACEHOLDER]')}
            </p>
            <p>Prep Time: {recipeDetails.recipeInfo.readyInMinutes} minutes</p>
            <p>Servings: {recipeDetails.recipeInfo.servings}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SmartCooking;
