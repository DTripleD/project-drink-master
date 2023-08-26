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
