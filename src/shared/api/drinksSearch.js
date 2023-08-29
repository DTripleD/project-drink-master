import instance from "./instance";

export const getDrinksList = async (query) => {
  try {
    const { data } = await instance.get(`/search?${query}`);

    return data.drinks;
  } catch (err) {
    return err.response.data.message;
  }
};