import React from "react";
import { ReactComponent as Search } from "../../images/svg/search.svg";
import DrinksList from "../../components/DrinksList/DrinksList";
import { useLocation, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import {
	selectCategories,
	selectIngredientsListSorted,
} from "../../redux/drinks/drinksSelectors";
import {
	getCategories,
	getIngredients,
} from "../../redux/drinks/drinksOperations";
import {
	StyledSelect,
	Form,
	Button,
	InputContainer,
	Input,
} from "./DrinksSearch.styled";
import { getDrinksList } from "../../shared/api/drinksSearch";
import { useDispatch, useSelector } from "react-redux";
// import Pagination from "../Pagination/Pagination";
import { PaginationWrapper } from "../Pagination/Pagination.styled";
import { Container, Pagination, Stack } from "@mui/material";

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
		category: state?.category ? state?.category : "Cocktail",
		ingredients: "",
		page: page,
		limit: itemsPerPage,
	});
	const updatedParams = new URLSearchParams(searchParams.toString());

	useEffect(() => {
		dispatch(getCategories());
		dispatch(getIngredients());
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

	const categories = useSelector(selectCategories);
	const ingredients = useSelector(selectIngredientsListSorted);

	useEffect(() => {
		const newPage = parseInt(searchParams.get("page")) || 1;
		if (newPage !== page) {
			setPage(newPage);
		}

		getDrinksList(searchParams)
			.then((data) => {
				setData(data);
				setTotalPages(Math.ceil(data.totalHits / itemsPerPage));
			})
			.catch((error) => {
				setError(error.message);
			});
		console.log(data);
	}, [searchParams]);

	const optionCategories = categories.map((category) => ({
		value: category,
		label: category,
	}));

	const optionIngredients = ingredients.map((ingredient) => ({
		value: ingredient,
		label: ingredient,
	}));

	const onSubmit = (data) => {
		setSearchParams({
			search: data?.search || "",
			category: data?.category?.label || state?.category || "",
			ingredients: data?.ingredients?.label || "",
			page: "1",
			limit: itemsPerPage,
		});
	};

	const changeNum = (_, num) => {
		updatedParams.set("page", num.toString());
		setSearchParams(updatedParams);
		setPage(num);
	};

	return (
		<>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<InputContainer>
					<Input
						type="text"
						{...register("search")}
						placeholder="Enter the text"
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
							defaultValue={optionCategories[1]}
							options={optionCategories}
							value={value}
							onChange={onChange}
							classNamePrefix={"select"}
						/>
					)}
				/>
				<Controller
					control={control}
					name="ingredients"
					render={({ field: { onChange, value } }) => (
						<StyledSelect
							defaultValue={optionIngredients[0]}
							options={optionIngredients}
							value={value}
							onChange={onChange}
							classNamePrefix={"select"}
						/>
					)}
				/>
			</Form>
			{error && <p>Sorry. {error} 😭</p>}
			<DrinksList drinks={data.drinks} />
			{totalPages > 1 && (
				// <Pagination totalPages={totalPages} page={page} changeNum={changeNum} />
				<PaginationWrapper>
					<Container>
						<Stack spacing={5}>
							<Pagination
								count={totalPages}
								page={page}
								onChange={changeNum}
								siblingCount={1}
								sx={{ marginY: 3, marginX: "auto" }}
							/>
						</Stack>
					</Container>
				</PaginationWrapper>
			)}
		</>
	);
};

export default DrinksSearch;
