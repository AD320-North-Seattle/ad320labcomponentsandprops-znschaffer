const Recipe = ({recipeData}) => {
    return (<div className={"recipe"}>
            <h2 className={"recipeName"}>{recipeData.name}</h2>
            <h3>Ingredients</h3>
            <ul className={"ingredients"}>
                {recipeData.ingredients.map(ingredient => (<li>{ingredient}</li>))}
            </ul>
            <h3>Instructions</h3>
            <ol className={"instructions"}>
                {recipeData.instructions.map(instruction => (<li>{instruction}</li>))}
            </ol>
            {recipeData.optionalGlaze ? (<>
                <hr/>
                <h4> {recipeData.optionalGlaze.name}</h4>
                <h4>Ingredients</h4>
                <ul className={"ingredients"}>
                    {recipeData.optionalGlaze.ingredients.map(ingredient => (<li>{ingredient}</li>))}
                </ul>
                <h4>Instructions</h4>
                <ol className={"instructions"}>
                    {recipeData.optionalGlaze.instructions.map(instruction => (<li>{instruction}</li>))}
                </ol>
            </>) : <></>}
        </div>)
}

export default Recipe