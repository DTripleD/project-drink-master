import { Nav, StyledLink } from "./Navigation.styled";

export const Navigation = () => {
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
