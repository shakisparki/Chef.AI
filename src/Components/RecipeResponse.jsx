import ReactMarkdown from 'react-markdown'
export default function RecipeResponse({ recipe }) {
    console.log("rendering with" + recipe)
    return (
        <section className="suggested-recipe-container" aria-live="polite">
            <h2>Your Recipe</h2>
            <ReactMarkdown children={recipe} />
        </section>
    )
}