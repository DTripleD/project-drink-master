import instance from "../instance";

const getIngrеdients = async (id) => {
  try {
    const { data } = await instance.get(`/recipes/${id}`);
    return data;
  } catch (err) {
    return err.response.data.message;
  }
};

export default getIngrеdients;
