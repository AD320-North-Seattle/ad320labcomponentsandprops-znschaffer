import Recipe from "./Recipe.jsx";

const RecipeContainer = ({recipes}) => {
    return (
        <div>
            {recipes.map(recipe => (<Recipe recipeData={recipe}/>))}
        </div>
    )
}

export default RecipeContainer