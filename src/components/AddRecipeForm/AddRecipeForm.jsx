import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from "react-hook-form";
import RecipeDescriptionFields from './RecipeDescriptionFields/RecipeDescriptionFields'

const AddRecipeForm = props => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
		<form onSubmit={handleSubmit(onSubmit)}>
      <RecipeDescriptionFields register={register} />
			<button type="submit">Add</button>
		</form>
	);
}

AddRecipeForm.propTypes = {}

export default AddRecipeForm