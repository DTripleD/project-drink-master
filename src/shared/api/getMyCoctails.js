import instance from "./instance";

export const getMyCoctails = async (query) => {
  try {
    const data = await instance.get(`/own?${query}`);

    return data;
  } catch (err) {
    return err.response.data.message;
  }
};
