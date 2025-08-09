export default function MainContent() {
    const data = []
    var dataElements = data.map(x => <li key={x}> {x}</li>)
    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const ingredient = formData.get("ingredient")
        data.push(ingredient)
        console.log("Form Submitted:" + ingredient)
    }
    return (
        <main>
            <form className="add-ingredient-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="e.g pepper" aria-label="Add Ingredient" name="ingredient"/>
                <button type="submit">Add Ingredient</button>
            </form>
            <h2> Ingredients </h2>
            <ul>
                { dataElements }
            </ul>
            
        </main>
    )
}