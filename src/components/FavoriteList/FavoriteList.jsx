import FavoriteItem from "../FavoriteItem/FavoriteItem";
import { ListWrapper } from "./FavoriteList.styled";
import { AddButton } from "../../components/Button/AddButton/AddButton";
import { SeeButton } from "../../components/Button/SeeButton/SeeButton";

const FavoriteList = ({ recipes, deleteFavorite }) => {
  return (
    <ListWrapper>
      {recipes.map((recipe) => (
        <li key={recipe._id}>
          <FavoriteItem recipe={recipe} deleteFavorite={deleteFavorite} />
        </li>
      ))}
    </ListWrapper>
  );
};

export default FavoriteList;

// // <li key={_id} page={"favorite"}>
// //   {/* {_id} */}
// //   <img src={drinkThumb} alt={drink} width="400" height="400" />
// //   <h3>{drink}</h3>
// //   {description}
// //   <div>
// //     <SeeButton id={_id} />

// //     <AddButton
// //       id={_id}
// //       text={"Delete"}
// //       ariaLabel={"button for click"}
// //       onClick={() => deleteFavorite(_id)}
// //       type="button"
// //     />
// //   </div>
// </li>
