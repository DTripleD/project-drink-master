// import instance from "./instance";

// //отримує список улюбленних
// export const getFavoriteList = async () => {
//   try {
//     const { data } = await instance.get("/favorite");
//     return data;
//   } catch (err) {
//     return err.response.data.message;
//   }
// };
// export const deleteFavoriteRecipe = async (recipeId) => {
//   try {
//     const response = await instance.delete(`/favorite/${recipeId}`);
//     // console.log("response", response);

//     return response;
//   } catch (e) {
//     return e.response.data.message;
//   // }
// };

// export const addFavoriteRecipe = async (recipeId) => {
//   try {
//     const response = await instance.patch(`/favorite/${recipeId}`);
//     // console.log("response", response);

//     return response;
//   } catch (e) {
//     return e.response.data.message;
//   }
// };
