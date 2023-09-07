import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";
import { useState } from "react";

export const App = () => {
  const [chosenRecipe, SetChosenRecipe] = useState();

  return (
    <>
      {chosenRecipe ? (
        <RecipePage recipe={chosenRecipe} clickFn={SetChosenRecipe} />
      ) : (
        <RecipeListPage clickFn={SetChosenRecipe} />
      )}
    </>
  );
};