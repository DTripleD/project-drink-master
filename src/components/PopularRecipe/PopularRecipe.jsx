import PropTypes from "prop-types";
import { getPopularReceipts } from "../../shared/api/addRecipePageQuery";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

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
  console.log(popular)

  return (
		<ul>
			{popular.length > 0 &&
				popular.map(({ _id, drink, drinkThumb, instructions }) => (
					<li key={_id}>
						<Link to={`/recipe/${_id}`} state={{ from: location }}>
							<img
								src={drinkThumb ? drinkThumb : "/public/plug-b.png"}
								alt={drink}
								loading="lazy"
							/>
							<div>
								<h4>{drink}</h4>
								<p>{instructions}</p>
							</div>
						</Link>
					</li>
				))}
		</ul>
	);
};

PopularRecipe.propTypes = {};

export default PopularRecipe;
