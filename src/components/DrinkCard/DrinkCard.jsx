import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { SeeButton } from "../Button/SeeButton/SeeButton";

import { DeleteButton } from "../Button/DeleteButton/DeleteButton";

import drink from "../../images/coctails.jpg";
import {
  AboutStyled,
  ButtonsWrapper,
  Card,
  Drinkingreds,
  Image,
  Ingredients,
  Ingredientswrapper,
  ImageWrapper,
  OneMoreWrapper,
  Wrapper,
} from "./DrinkCard.styled";

export const DrinkCard = ({ cocktail, page, removeCocktail }) => {
  return (
    <Card>
      <Link to={`/recipe/${cocktail._id}`}>
        <OneMoreWrapper>
          <ImageWrapper>
            <Image
              src={cocktail.drinkThumb}
              alt={cocktail.drink}
              onError={(e) => {
                e.currentTarget.src = drink;
              }}
            />
          </ImageWrapper>
        </OneMoreWrapper>
      </Link>
      <Wrapper>
        <Ingredientswrapper position={page}>
          <Link to={`/recipe/${cocktail._id}`}>
            <Drinkingreds>{cocktail.drink}</Drinkingreds>
          </Link>
          <Ingredients>Ingredients</Ingredients>
        </Ingredientswrapper>
      </Wrapper>
      {(page === "my" || page === "favorite") && (
        <AboutStyled>{cocktail.instructions}</AboutStyled>
      )}
      <ButtonsWrapper>
        {(page === "my" || page === "favorite") && (
          <SeeButton id={cocktail._id} />
        )}

        {(page === "my" || page === "favorite") && (
          <DeleteButton
            id={cocktail._id}
            page={page}
            onClick={() => removeCocktail(cocktail._id)}
          />
        )}
      </ButtonsWrapper>
    </Card>
  );
};

DrinkCard.propTypes = {
  page: PropTypes.string,
  removeCocktail: PropTypes.func,

  cocktail: PropTypes.object,
};
