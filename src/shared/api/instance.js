import axios from "axios";

// const { VITE_API_URL } = process.env;

const instance = axios.create({
	// baseURL: VITE_API_URL,
	baseURL: "http://localhost:8000",
});

export default instance;
