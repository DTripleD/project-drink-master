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

export default function FavoriteItem({ recipe, deleteFavorite }) {
  console.log("recipe", recipe);
  return (
    <ItemCard>
      <ItemImg
        src={recipe.drinkThumb ? recipe.drinkThumb : defaultImg}
        alt={recipe.drink}
      />
      {/* <ItemTextWrapper> */}
      <ItemTitle>
        {recipe.drink}
        <ItemGlass>{recipe.glass}</ItemGlass>
      </ItemTitle>
      {/* </ItemTextWrapper> */}
      <ItemDescription>{recipe.description || "Good cocktail"}</ItemDescription>
      <div>
        <SeeButton id={recipe._id} />

        <AddButton
          id={recipe._id}
          text={"Delete"}
          ariaLabel={"button for click"}
          onClick={() => deleteFavorite(recipe._id)}
          type={"button"}
        />
      </div>
    </ItemCard>
  );
}
