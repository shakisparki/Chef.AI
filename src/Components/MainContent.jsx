import {useState } from "react"
export default function MainContent() {
    const [data, setData] = useState([])
    const dataElements = data.map(x =>
        <li key={x}> {x}</li>)
    function addIngredient(formData) {
        const ingredient = formData.get("ingredient")

        if (!ingredient || ingredient.trim().length == 0) { return }
        setData(prev => [...prev, ingredient.trim()])

        console.log("Form Submitted:" + ingredient)
    }
    return (
        <main>
            <form className="add-ingredient-form" action={addIngredient}>
                <input type="text" placeholder="e.g pepper" aria-label="Add Ingredient" name="ingredient"/>
                <button>Add Ingredient</button>
            </form>
            <h2> Ingredients </h2>
            <ul>
                { dataElements }
            </ul>
            
        </main>
    )
}