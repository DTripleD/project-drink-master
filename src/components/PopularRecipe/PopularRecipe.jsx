import PropTypes from "prop-types";
import { getPopularReceipts } from "../../shared/api/addRecipePageQuery";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  PopularList,
  PopularItem,
  PopularLink,
  Image,
  PopularTitle,
  PopularText,
} from "./PopularRecipe.styled";

const PopularRecipe = () => {
  const [popular, setPopular] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getPopularReceipts()
      .then((res) => {
        setPopular(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <PopularList>
      {popular.length > 0 &&
        popular.map(({ _id, drink, drinkThumb, instructions }) => (
          <PopularItem key={_id}>
            <PopularLink to={`/recipe/${_id}`} state={{ from: location }}>
              <Image
                src={drinkThumb ? drinkThumb : "/public/plug-b.png"}
                alt={drink}
                loading="lazy"
              />
              <div>
                <PopularTitle>{drink}</PopularTitle>
                <PopularText>{instructions}</PopularText>
              </div>
            </PopularLink>
          </PopularItem>
        ))}
    </PopularList>
  );
};

PopularRecipe.propTypes = {};

export default PopularRecipe;
