import './App.css'
import Header from "./Components/Header"
import Entry from "./Components/Entry"
import data from "./assets/data.json"

function App() { 
    const dataElements = data.map(x => <Entry key={x.key} Data={x} />);
  return (
      <>
          <Header />
          <main>
              {dataElements}
          </main>        
    </>
  )
}

export default App
