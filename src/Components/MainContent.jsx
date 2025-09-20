import { useState } from "react"
import Ingredients from "./Ingredients"
import RecipeResponse from "./RecipeResponse"
import { getRecipeFromMistral } from "../Services/ai"
export default function MainContent() {
    const [data, setData] = useState([])
    const [recipe, setRecipe] = useState("")

    function addIngredient(formData) {
        const ingredient = formData.get("ingredient")
        if (!ingredient) { return }

        let value = ingredient.trim().toLowerCase();
        if (value.length == 0 || data.includes(value)) { return }
        setData(prev => [...prev, value])
    }

    function displayIngredients() {
        return data.length > 0 && <Ingredients items={data} />
    }

    function displayCreateRecipe() {
        return data.length > 2 && (<div className="recipeFooter">
            <div>
                <h2> Ready for a recipe? </h2>
                <p >Generate a recipe from your list of ingredients</p>
            </div>           
            <button onClick={getRecipe}>Get a recipe</button>
        </div>)
    }

    async function getRecipe() {
        // Call AI service to get recipe
        const recipeMarkdown = await getRecipeFromMistral(data)
        setRecipe(recipeMarkdown)
    }

    return (
        <main>
            <form className="add-ingredient-form" action={addIngredient}>
                <input type="text" placeholder="e.g pepper" aria-label="Add Ingredient" name="ingredient"/>
                <button>Add Ingredient</button>
            </form>

            {displayIngredients()}

            {displayCreateRecipe()}

            {recipe != "" && <RecipeResponse recipe={recipe} />}

        </main>
    )
}