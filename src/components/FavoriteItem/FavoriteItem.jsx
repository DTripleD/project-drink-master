// import { Link } from "react-router-dom";
// import { UseSvg } from "../../helpers/useSvg/useSvg";

import {
  ItemCard,
  ItemImg,
  ItemTextWrapper,
  ItemTitle,
  ItemGlass,
  ItemDescription,
  //   CardTime,
  //   CardButtonSee,
  //   CardButtonDelete,
  //   CardIcon,
} from "./FavoriteItem.styled";
import { AddButton } from "../../components/Button/AddButton/AddButton";
import { SeeButton } from "../../components/Button/SeeButton/SeeButton";
import defaultImg from "../../images/plug-m.png";
import { useDispatch } from "react-redux";
import { deleteFavorite } from "../../redux/favorite/favorite-operation";

export default function FavoriteItem({ recipe }) {
  const dispatch = useDispatch();

  return (
    <ItemCard>
      <ItemImg
        src={recipe.drinkThumb ? recipe.drinkThumb : defaultImg}
        alt={recipe.drink}
      />
      <ItemTextWrapper>
        <ItemTitle>{recipe.drink}</ItemTitle>
        <ItemGlass>{recipe.glass}</ItemGlass>
      </ItemTextWrapper>
      <ItemDescription>{recipe.description || "Good cocktail"}</ItemDescription>
      <div>
        <SeeButton id={recipe._id} />

        <AddButton
          id={recipe._id}
          text={"Delete"}
          ariaLabel={"button for click"}
          onClick={() => dispatch(deleteFavorite(recipe._id))}
          type={"button"}
        />
      </div>
    </ItemCard>
  );
}
