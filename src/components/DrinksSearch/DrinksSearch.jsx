import { useLocation, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
//----------------Selectors---------------------
import {
	selectCategories,
	selectIngredientsListSorted,
} from "../../redux/drinks/drinksSelectors";
//----------------Functions---------------------
import {
	getCategories,
	getIngredients,
} from "../../redux/drinks/drinksOperations";
import { getDrinksList } from "../../shared/api/drinksSearch";
//-----------------Styles------------------------
import {
	StyledSelect,
	Form,
	Button,
	InputContainer,
	Input,
} from "./DrinksSearch.styled";
import { ErrorPageWrapper } from "../../pages/ErrorPage/ErrorPage.styled";
import { P3 } from "../DrinksList/DrinksList.styled";
//-----------------Components--------------------
import PaginationComponent from "../Pagination/Pagination";
import DrinksList from "../../components/DrinksList/DrinksList";
import Loader from "../Loader/Loader";
import { ReactComponent as Search } from "../../images/svg/search.svg";

const DrinksSearch = () => {
	const { state } = useLocation();
	const dispatch = useDispatch();
	const { register, handleSubmit, control } = useForm();
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [data, setData] = useState([]);
	const [error, setError] = useState("");
	const [itemsPerPage, setItemsPerPage] = useState(() => {
		const width = window.innerWidth;

		if (width >= 1440) {
			return 9;
		} else {
			return 10;
		}
	});
	const [searchParams, setSearchParams] = useSearchParams({
		search: "",
		category: state?.category ? state?.category : "",
		ingredients: "",
		page: page,
		limit: itemsPerPage,
	});
	const updatedParams = new URLSearchParams(searchParams.toString());

	useEffect(() => {
		dispatch(getCategories());
		dispatch(getIngredients());
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}, []);

	useEffect(() => {
		const handleWindowResize = () => {
			const width = window.innerWidth;

			if (width >= 1440) {
				setItemsPerPage(9);
			} else {
				setItemsPerPage(10);
			}
		};
		window.addEventListener("resize", handleWindowResize);

		return () => window.removeEventListener("resize", handleWindowResize);
	}, []);

	useEffect(() => {
		const newPage = parseInt(searchParams.get("page")) || 1;
		if (newPage !== page) {
			setPage(newPage);
		}

		getDrinksList(searchParams)
			.then((data) => {
				setData(data);
				setError(data);
				setTotalPages(Math.ceil(data.totalHits / itemsPerPage));
			})
			.catch((error) => {
				setError(error);
			});
	}, [searchParams]);

	const categories = useSelector(selectCategories);
	const ingredients = useSelector(selectIngredientsListSorted);

	const optionCategories = categories.map((category) => ({
		value: category,
		label: category,
	}));
	optionCategories.unshift({ value: "", label: "All categories" });

	const optionIngredients = ingredients.map((ingredient) => ({
		value: ingredient,
		label: ingredient,
	}));
	optionIngredients.unshift({ value: "", label: "Ingredients" });

	const onSubmit = (data) => {
		setSearchParams({
			search: data?.search || "",
			category: data?.category?.value || state?.category || "",
			ingredients: data?.ingredients?.value || "",
			page: "1",
			limit: itemsPerPage,
		});
	};

	const handleCategoryChange = (selectedCategory) => {
		setSearchParams((prevSearchParams) => ({
			...prevSearchParams,
			category: selectedCategory?.value || "",
			search: "",
			page: "1",
			limit: itemsPerPage,
		}));
	};

	const handleIngridientChange = (selectedIngridient) => {
		setSearchParams((prevSearchParams) => ({
			...prevSearchParams,
			ingredients: selectedIngridient?.value || "",
			search: "",
			page: "1",
			limit: itemsPerPage,
		}));
	};

	const changeNum = (_, num) => {
		updatedParams.set("page", num.toString());
		setSearchParams(updatedParams);
		setPage(num);
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<InputContainer>
					<Input
						type="text"
						{...register("search")}
						placeholder={
							updatedParams.get("search") === ""
								? "Enter the text"
								: updatedParams.get("search")
						}
					/>
					<Button type="submit">
						<Search style={{ width: 20, height: 20 }} />
					</Button>
				</InputContainer>
				<Controller
					control={control}
					name="category"
					render={({ field: { onChange, value } }) => (
						<StyledSelect
							defaultValue={
								updatedParams.get("category") === ""
									? optionCategories[0]
									: { value: "", label: updatedParams.get("category") }
							}
							options={optionCategories}
							value={value}
							onChange={(selectedOption) => {
								onChange(selectedOption);
								handleCategoryChange(selectedOption);
							}}
							classNamePrefix={"select"}
						/>
					)}
				/>
				<Controller
					control={control}
					name="ingredients"
					render={({ field: { onChange, value } }) => (
						<StyledSelect
							defaultValue={
								updatedParams.get("ingredients") === ""
									? optionIngredients[0]
									: { value: "", label: updatedParams.get("ingredients") }
							}
							options={optionIngredients}
							value={value}
							onChange={(selectedOption) => {
								onChange(selectedOption);
								handleIngridientChange(selectedOption);
							}}
							classNamePrefix={"select"}
						/>
					)}
				/>
			</Form>
			{!data.drinks && !error && <Loader />}
			<DrinksList drinks={data.drinks} />
			{error === "drinks not found" && (
				<>
					<ErrorPageWrapper></ErrorPageWrapper>
					<P3>Unfortunately, there is no such cocktails.... 😭</P3>
				</>
			)}
			{totalPages > 1 && (
				<PaginationComponent
					totalPages={totalPages}
					page={page}
					changeNum={changeNum}
				/>
			)}
		</>
	);
};

export default DrinksSearch;
