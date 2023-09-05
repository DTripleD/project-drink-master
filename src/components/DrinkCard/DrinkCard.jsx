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

export const DrinkCard = ({ cocktail, page }) => {
  console.log(cocktail);
  return (
    <Link to={`/recipe/${cocktail._id}`}>
      <Card>
        <ImageWrapper>
          <Image
            src={cocktail.drinkThumb}
            alt={cocktail.drink}
            onError={(e) => {
              e.currentTarget.src = drink;
            }}
          />
        </ImageWrapper>

        <Wrapper>
          <Ingredientswrapper position={page}>
            <Drinkingreds>{cocktail.drink}</Drinkingreds>

            <Ingredients>Ingredients</Ingredients>
          </Ingredientswrapper>
        </Wrapper>
        <AboutStyled>{cocktail.description}</AboutStyled>

        <ButtonsWrapper>
          <SeeButton id={cocktail._id} />

          <DeleteButton id={cocktail._id} page={page} />
        </ButtonsWrapper>
      </Card>
    </Link>
  );
};

DrinkCard.propTypes = {
  page: PropTypes.string,

  cocktail: PropTypes.object,
};
