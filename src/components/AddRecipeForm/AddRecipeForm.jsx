import { useEffect, useRef, useState } from "react";
// import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import RecipeDescriptionFields from "./RecipeDescriptionFields/RecipeDescriptionFields";
import RecipeIngredientsFields from "./RecipeIngredientsFields/RecipeIngredientsFields";
import RecipePreparationFields from "./RecipePreparationFields/RecipePreparationFields";
import { useDispatch } from "react-redux";
import {
  getCategories,
  getGlasses,
  getIngredients,
} from "../../redux/drinks/drinksOperations";
import { AddButton } from "./AddRecipeForm.styled";
import { addReciept } from "../../shared/api/addRecipePageQuery";

const AddRecipeForm = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getGlasses());
    dispatch(getIngredients());
  }, [dispatch]);

  const [file, setFile] = useState(null);

  const getFile = (file) => {
    setFile(file);
  };

  const [ingredientsList, setIngredientsList] = useState([]);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const formData = new FormData();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (file === null) {
      toast.error("Please add an image");
    }
    console.log(ingredientsList);
    if (ingredientsList.length === 0) {
			toast.error("Please add at least 2 ingredient");
		}

    const newIngredientsList = ingredientsList.map((ingredient) => ({
      ...ingredient.ingredient,
      measure: ingredient.amount.concat(` ${ingredient.unit}`),
    }));

    console.log(newIngredientsList);

    formData.append("drink", data.drink);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("glass", data.glass);
    formData.append("instructions", data.instructions);
    formData.append("ingredients", JSON.stringify(newIngredientsList));
    formData.append("drinkThumb", file);

    addReciept(formData)
      .then((res) => {
        if (res.response?.status === 400) {
          toast.error(res.response.data.message);
          throw new Error(res.response.data.message);
        }
        navigate("/my", { replace: true });
        toast.success("You have successfully added a new recipe!");
      })
      .catch((error) => {
        console.log(error);
      });

    // for (var pair of formData.entries()) {
    // 	console.log(pair[0] + ", " + pair[1]);
    // }
  };

  const isFirtsRender = useRef(true);

  useEffect(() => {
    if (isFirtsRender.current) {
      isFirtsRender.current = false;
      return;
    }
    // console.log(errors?.drinkThumb?.message);
    // console.log(errors?.drink?.message);
    // console.log(errors?.description?.message);
    // console.log(errors?.category?.message);
    // console.log(errors?.glass?.message);
  }, [errors]);

  return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<RecipeDescriptionFields
				getFile={getFile}
				register={register}
				control={control}
				errors={errors}
			/>
			<RecipeIngredientsFields
				register={register}
				errors={errors}
				ingredientsList={ingredientsList}
				setIngredientsList={setIngredientsList}
			/>
			<RecipePreparationFields register={register} errors={errors} />
			<AddButton type="submit">Add</AddButton>
		</form>
	);
};

AddRecipeForm.propTypes = {
};

export default AddRecipeForm;
