import instance from "./instance";

//отримує список категорій
export const getCategoriesList = async () => {
  try {
    const { data } = await instance.get("/recipes/category-list");
    return data;
  } catch (err) {
    return err.response.data.message;
  }
};

//отримує список тари
export const getGlassesList = async () => {
  try {
    const { data } = await instance.get("/glasses");
    return data;
  } catch (err) {
    return err.response.data.message;
  }
};

//отримує список інгридієнтів
export const getIngredientsList = async () => {
  try {
    const { data } = await instance.get("/ingredients/list");
    const ingredients = data.map((ingredient) => ingredient.title);
    return ingredients;
  } catch (err) {
    return err.response.data.message;
  }
};

export const getMainPage = async () => {
  try {
    const { data } = await instance.get("/recipes/main-page");
    return data;
  } catch (err) {
    return err.response.data.message;
  }
};

export const getMyOwnRecipies = async () => {
  const params = {};

  try {
    const res = await instance.get("own", {
      params,
    });
    return res.data;
  } catch (error) {
    return error.response.data.message;
  }
};
