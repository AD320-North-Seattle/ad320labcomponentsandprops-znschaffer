import './App.css'
import {recipes} from "./data.js"
import RecipeContainer from "./components/RecipeContainer.jsx";

function App() {
  return (
      <RecipeContainer recipes={recipes}/>
  )
}

export default App
