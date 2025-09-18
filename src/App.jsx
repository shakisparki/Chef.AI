import Header from "./Components/Header"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Recipes from "./Pages/Recipes"
import { Routes, Route } from "react-router-dom"
import './App.css'

function App() {

  return (
    <>
        <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>    
    </>
  )
}

export default App
