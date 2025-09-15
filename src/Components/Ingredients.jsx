function Ingredients({ items }) {
    const dataElements = items.map(x =>
        <li key={x}> {x}</li>)
  return (
      <section>
          <h1> Ingredients on hand</h1>
          <ul>
              {dataElements}
          </ul>
      </section>
  );
}

export default Ingredients;