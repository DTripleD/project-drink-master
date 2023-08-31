import FavoriteItem from "../FavoriteItem/FavoriteItem";
import { ListWrapper } from "./FavoriteList.styled";


const FavoriteList = ({ recipes }) => {
  return (
    <ListWrapper>
      {recipes.map((recipe) => (
        <li key={recipe._id}>
          <FavoriteItem recipe={recipe} />
        </li>
      ))}
    </ListWrapper>
  );
};

export default FavoriteList;


