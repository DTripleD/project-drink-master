// import { useSelector } from "react-redux";
import { Nav, StyledLink } from "./Navigation.styled";
// import { selectIsLoggedIn } from "redux/auth/authSelectors";

export const Navigation = () => {
	//   const isLoggedIn = useSelector(selectIsLoggedIn);
	return (
		<>
			<Nav>
				{true && (
					<StyledLink сlassname={"menu - item"} to="/main">
						Home
					</StyledLink>
				)}
				{true && (
					<StyledLink сlassname={"menu - item"} to="/drinks">
						Drinks
					</StyledLink>
				)}
				{true && (
					<StyledLink сlassname={"menu - item"} to="/add">
						Add recipe
					</StyledLink>
				)}
				{true && (
					<StyledLink сlassname={"menu - item"} to="/my">
						My recipes
					</StyledLink>
				)}
				{true && (
					<StyledLink сlassname={"menu - item"} to="/favorite">
						Favorites
					</StyledLink>
				)}
			</Nav>
		</>
	);
};
