import { useState } from "react"
import Ingredients from "./Ingredients"
export default function MainContent() {
    const [data, setData] = useState([])

    function addIngredient(formData) {
        const ingredient = formData.get("ingredient")
        if (!ingredient) { return }

        let value = ingredient.trim().toLowerCase();
        if (value.length == 0 || data.includes(value)) { return }
        setData(prev => [...prev, value])

        console.log("Form Submitted:" + ingredient)
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
            <button>Get a recipe</button>
        </div>)
    }
    return (
        <main>
            <form className="add-ingredient-form" action={addIngredient}>
                <input type="text" placeholder="e.g pepper" aria-label="Add Ingredient" name="ingredient"/>
                <button>Add Ingredient</button>
            </form>

            {displayIngredients()}

            {displayCreateRecipe()}
        </main>
    )
}