
export default function RecipeResponse({ recipe }) {
    console.log("rendering with" + recipe)
    return (
        <section>
            <h2>Your Recipe</h2>
            <p>{recipe}</p>
        </section>
    )
}