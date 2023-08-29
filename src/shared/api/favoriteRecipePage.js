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
export const deleteRecipe = async (recipeId) => {
  try {
    const response = await instance.delete(`/favorite/${recipeId}`);
    console.log("response", response);

    return response;
  } catch (e) {
    return e.response.data.message;
  }
};

// export const fetchContacts = createAsyncThunk(
//   "contacts/fetchAll",
//   async (_, thunkAPI) => {
//     try {
//       const { data } = await axios.get("/contacts");
//       // console.log('data', data);
//       return data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue("Failed to load contacts");
//     }
//   }
// );

// export const addContact = createAsyncThunk(
//   "contacts/addContact",
//   async (contact, thunkAPI) => {
//     try {
//       const response = await axios.post("/contacts", contact);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
