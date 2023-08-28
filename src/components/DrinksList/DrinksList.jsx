import React from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const DrinksList = ({ drinks }) => {
	const location = useLocation();

	return (
		<>
			<ul>
				{drinks.map(({ _id, drink, drinkThumb, instructions }) => (
					<li key={_id}>
						<Link to={`/my/${_id}`} state={{ from: location }}>
							<img src={drinkThumb} alt={instructions} loading="lazy" />
							<p>{drink}</p>
							<p>Ingredients</p>
						</Link>
					</li>
				))}
			</ul>
		</>
	);
};

DrinksList.propTypes = {
	drinks: PropTypes.array.isRequired,
};

export default DrinksList;
