import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
    const [ingredients, setIngredients] = useState('');
    const [recipes, setRecipes] = useState([]);

    // Spoonacular API key
    // const apiKey = "4a2351deb18546f4a63a0a7e16d60263";
    // const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;
    // console.log(process.env.REACT_APP_SPOONACULAR_API_KEY)
    console.log('OpenAI API Key:', process.env.REACT_APP_OPENAI_API_KEY);
    console.log('Spoonacular API Key:', process.env.REACT_APP_SPOONACULAR_API_KEY);

    const fetchRecipes = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&ingredients=${encodeURIComponent(ingredients)}&number=10`);
            const data = await response.json();
            setRecipes(data);
        } catch (error) {
            console.error("Error fetching recipes: ", error);
            setRecipes([]);
        }
    };

    return (
        <div className="container-fluid" style={{ paddingTop: "100px" }}>
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                <h1>My Dashboard</h1>

                <form onSubmit={fetchRecipes}>
                    <input
                        type="text"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        placeholder="Enter ingredients (comma separated)"
                    />
                    <button type="submit">Search Recipes</button>
                </form>

                <div>
                    {recipes.map((recipe) => (
                        <div key={recipe.id}>
                            <Link to={`/recipe/${recipe.id}`}>
                                <h4>{recipe.title}</h4>
                                <img src={recipe.image} alt={recipe.title} style={{width: "100px", height: "100px"}} />
                            </Link>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default Dashboard;

