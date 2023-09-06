import instance from "./instance";

// export const subscribe = async (email) => {
//     try {
//         const { data } = await instance.get(`/subscribe`);

//         return data;
//     } catch (err) {
//         return err.response.data.message;
//     }
// };

export const subscribeUser = async (body) => {
  try {
    const { data } = await instance.post("/subscribe", body);
    return data;
  } catch (error) {
    return error.response;
  }
};
