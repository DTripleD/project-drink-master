import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { Li, Img, Div, P, P2, P3, Ul } from "./DrinksList.styled";

const DrinksList = ({ drinks }) => {
	const location = useLocation();

	return (
		<>
			{Array.isArray(drinks) ? (
				<Ul>
					{drinks.map(({ _id, drink, drinkThumb, instructions }) => (
						<Li key={_id}>
							<Link to={`/recipe/${_id}`} state={{ from: location }}>
								<Img src={drinkThumb} alt={instructions} loading="lazy" />
								<Div>
									<P>{drink}</P>
									<P2>Ingredients</P2>
								</Div>
							</Link>
						</Li>
					))}
				</Ul>
			) : (
				<P3>Unfortunately, there is no such coctails .... 😭</P3>
			)}
		</>
	);
};

DrinksList.propTypes = {
	drinks: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

export default DrinksList;
