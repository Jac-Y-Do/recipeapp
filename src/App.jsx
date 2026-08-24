import { RecipeListPage } from './pages/RecipeListPage'
import { RecipeItemPage } from './pages/RecipeItemPage'

import { Footer } from './components/Footer'
import { useState } from 'react'

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState()

  // Your state code here
  return (
    <>
      {selectedRecipe ? (
        <RecipeItemPage item={selectedRecipe} clickFn={setSelectedRecipe} />
      ) : (
        <RecipeListPage clickFn={setSelectedRecipe} />
      )}

      <Footer />
    </>
  )
}
