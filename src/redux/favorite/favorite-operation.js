import instance from "../../shared/api/instance";

//отримує список улюбленних
export const getFavoriteList = async () => {
  try {
    const { data } = await instance.get("/favorite");
    return data;
  } catch (err) {
    return err.response.data.message;
  }
};
