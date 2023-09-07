import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { Li, Img, Div, P, P2, Ul } from "./DrinksList.styled";
import defaultImg from "../../images/plug-b.png";

const DrinksList = ({ drinks }) => {
	const location = useLocation();

	return (
		<>
			{drinks && Array.isArray(drinks) && drinks.length > 0 && (
				<Ul>
					{drinks.map(({ _id, drink, drinkThumb, instructions }) => (
						<Li key={_id}>
							<Link to={`/recipe/${_id}`} state={{ from: location }}>
								<Img
									src={drinkThumb || defaultImg}
									alt={instructions}
									loading="lazy"
								/>
								<Div>
									<P>{drink}</P>
									<P2>Ingredients</P2>
								</Div>
							</Link>
						</Li>
					))}
				</Ul>
			)}
		</>
	);
};

DrinksList.propTypes = {
	drinks: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

export default DrinksList;
