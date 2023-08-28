export const getIngridients = async (id) => { 
    console.log(id); 
    try { 
      const { data } = await instance.get(`/recipes/${id}`); 
      return data; 
    } catch (err) { 
      return err.response.data.message; 
    } 
  }; 
  