import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../shared/api/instance";

export const getCategories = createAsyncThunk(
	"drinksQuery/getCategories",
	async (_, thunkAPI) => {
		try {
			const { data } = await instance.get("recipes/category-list");
			return data;
		} catch (error) {
			//возвращаю пока весь объект error
			return thunkAPI.rejectWithValue(error);
		}
	}
);

export const getIngredients = createAsyncThunk(
	"drinksQuery/getIngredients",
	async (_, thunkAPI) => {
		try {
			const { data } = await instance.get("ingredients/list");
			return data;
		} catch (error) {
			//возвращаю пока весь объект error
			return thunkAPI.rejectWithValue(error);
		}
	}
);

export const getGlasses = createAsyncThunk(
	"drinksQuery/getGlasses",
	async (_, thunkAPI) => {
		try {
			const { data } = await instance.get("/glasses");
			return data;
		} catch (error) {
			//возвращаю пока весь объект error
			return thunkAPI.rejectWithValue(error);
		}
	}
);
