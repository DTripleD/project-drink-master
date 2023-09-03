import instance from "./instance";

export const getMyCoctails = async () => {
  try {
    const data = await instance.get(`/own`);

    return data;
  } catch (err) {
    return err.response.data.message;
  }
};
