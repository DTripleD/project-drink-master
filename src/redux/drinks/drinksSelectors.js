import { createSelector } from "@reduxjs/toolkit";

export const selectCategories = (state) => state.drinksQuery.categories;

export const selectGlasses = (state) => state.drinksQuery.glasses;

export const selectIngredients = (state) => state.drinksQuery.ingredients;

//возвращает список ингриентов по алфавиту
//мемоизированный селектор
export const selectIngredientsListSorted = createSelector(
	[selectIngredients],
	(ingredients) => {
		const ingredientsList = ingredients
			.map((ingredient) => ingredient.title)
			.sort((a, b) => a.localeCompare(b));
		return ingredientsList;
	}
);

// export const getIngredientsListSorted = (state) => {
// 	const ingredients = getIngredients(state);
// 	const ingredientsList = ingredients
// 		.map((ingredient) => ingredient.title)
// 		.sort((a, b) => a.localeCompare(b));
// 	return ingredientsList;
// };
