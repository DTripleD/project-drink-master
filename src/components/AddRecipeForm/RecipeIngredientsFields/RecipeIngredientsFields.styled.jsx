import styled from "@emotion/styled";
import Select from "react-select";

export const SubTitleContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 80px;
	@media (min-width: 768px) {
		max-width: 704px;
	}
	@media (min-width: 1440px) {
		max-width: 540px;
	}
`;

export const Counter = styled.div`
	min-width: 104px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-radius: 200px;
	border: 1px solid rgba(243, 243, 243, 0.5);
	padding: 9px 16px;
	@media (min-width: 768px) {
		min-width: 114px;
		height: 44px;
	}
`;

export const CounterButton = styled.button`
	background-color: transparent;
	padding: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	svg {
		fill: rgba(243, 243, 243, 0.5);
		:hover {
			fill: ${(props) => props.theme.colors.white};
			transform: rotate(180deg);
		}
		:focus {
			fill: ${(props) => props.theme.colors.white};
			transform: rotate(180deg);
		}
		:active {
			fill: ${(props) => props.theme.colors.white};
			transform: rotate(180deg);
		}
	}
`;

export const CountValue = styled.p`
	display: inline-block;
	color: #f3f3f3;
	text-align: center;
	font-family: Manrope;
	font-size: 14px;
	line-height: ${18 / 14};
	@media (min-width: 768px) {
		font-size: 17px;
		line-height: 156%;
	}
`;

export const IngredientsList = styled.ul`
	margin-top: 40px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	gap: 18px;
	@media (min-width: 768px) {
		max-width: 704px;
	}
	@media (min-width: 1440px) {
		max-width: 540px;
	}
`;

export const IngredientsListItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 8px;
	width: 100%;
`;

export const StyledInput = styled.input`
	width: 100%;
	min-width: 20px;
	padding: 0;
	background-color: transparent;
	border: 0;
	color: ${(props) => props.theme.colors.white};
	:focus-visible {
		outline: 0;
		box-shadow: 0;
	}
	::placeholder {
		color: ${(props) => props.theme.colors.white};
		font-family: Manrope;
		font-size: 14px;
		line-height: normal;
		letter-spacing: -0.28px;
	}
	@media (min-width: 768px) {
		font-size: 17px;
		line-height: 156%;
	}
`;

export const SelectsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	gap: 8px;
`;

export const SelectContainer = styled.div`
	position: relative;
	padding: 16px 18px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-radius: 200px;
	border: 1px solid rgba(243, 243, 243, 0.5);
	width: 101px;
	height: 50px;
	@media (min-width: 768px) {
		width: 150px;
		height: 56px;
		padding: 14px 24px;
	}
`;

export const Error = styled.p`
	color: red;
	font-size: 14px;
	position: absolute;
	bottom: -17px;
	left: 16px;
`;

export const StyledSelect = styled(Select)`
	.select__menu {
		background-color: ${(props) => props.theme.colors.blue};
		border-radius: 20px;
		outline: 0;
		border: 0;
		margin-top: -5px;
	}

	.select__menu:hover {
		outline: 0;
	}

	.select__menu-list {
		padding: 18px;
		max-height: 185px;
		scrollbar-width: 4px;
		overflow-x: hidden;
	}

	.select__value-container {
		padding: 0;
		text-align: left;
	}

	.select__control {
		cursor: pointer;
		padding: 16px 18px;
		border-radius: 200px;
		border: 1px solid rgba(243, 243, 243, 0.5);
		opacity: 0.8;
		position: relative;
		width: 200px;
		height: 50px;
		background-color: transparent;
		color: ${(props) => props.theme.colors.white};
		font-family: Manrope;
		font-size: 14px;
		@media (min-width: 768px) {
			padding: 14px 24px;
			width: 332px;
			height: 56px;
			font-size: 17px;
			line-height: 156%;
		}
	}

	.select__indicator-separator {
		display: none;
	}

	.select__input-container {
		margin: 0;
		padding: 0;
		color: ${(props) => props.theme.colors.white};
		font-family: Manrope;
		font-size: 14px;
		line-height: ${18 / 14}px;
		@media (min-width: 768px) {
			font-size: 17px;
			line-height: 156%;
		}
	}

	.select__input {
		color: ${(props) => props.theme.colors.white};
		font-family: Manrope;
		font-size: 14px;
		line-height: ${14 / 14}px;
	}

	.select__placeholder {
		position: absolute;
		right: 0;
		top: 3;
		color: ${(props) => props.theme.colors.white};
		font-family: Manrope;
		font-size: 14px;
		line-height: ${14 / 14}px;
		@media (min-width: 768px) {
			font-size: 17px;
			line-height: 156%;
		}
	}

	.select__option {
		background-color: transparent;
		color: rgba(243, 243, 243, 0.4);
		font-family: Manrope;
		font-size: 12px;
		line-height: ${16 / 10}px;
		:hover {
			color: ${(props) => props.theme.colors.white};
		}
		:focus {
			color: ${(props) => props.theme.colors.white};
		}
		@media (min-width: 768px) {
			font-size: 17px;
			line-height: 156%;
		}
	}

	.select__control--is-focused {
		outline: 0;
	}

	.select__indicator {
		padding: 0;
		svg {
			fill: rgba(243, 243, 243, 0.5);
			transition: transform 300ms ease;
			:hover {
				fill: ${(props) => props.theme.colors.white};
				transform: rotate(180deg);
			}
			:focus {
				fill: ${(props) => props.theme.colors.white};
				transform: rotate(180deg);
			}
			:active {
				fill: ${(props) => props.theme.colors.white};
				transform: rotate(180deg);
			}
		}
	}

	.select__value-container {
		position: relative;
	}

	.select__single-value {
		display: block;
		color: ${(props) => props.theme.colors.white};
		font-family: Manrope;
		font-size: 14px;
		@media (min-width: 768px) {
			font-size: 17px;
			line-height: 156%;
		}
	}
`;

export const StyledUnitSelect = styled(Select)`
	.select__menu {
		background-color: ${(props) => props.theme.colors.blue};
		border-radius: 12px;
		outline: 0;
		border: 0;
		margin-top: -5px;
		@media (min-width: 768px) {
			font-size: 17px;
			line-height: 156%;
		}
	}

	.select__menu:hover {
		outline: 0;
	}

	.select__menu-list {
		padding: 0;
		max-height: 185px;
		scrollbar-width: 4px;
		overflow-x: hidden;
	}

	.select__value-container {
		padding: 0;
	}

	.select__control {
		cursor: pointer;
		border: 0;
		width: 48px;
		position: relative;
		background-color: transparent;
		color: ${(props) => props.theme.colors.white};
		font-family: Manrope;
		font-size: 14px;
		@media (min-width: 768px) {
			width: 70px;
		}
	}

	.select__indicator-separator {
		display: none;
	}

	.select__input-container {
		margin: 0;
		padding: 0;
		width: 30px;
		color: ${(props) => props.theme.colors.white};
		font-family: Manrope;
		font-size: 14px;
		line-height: ${18 / 14}px;
	}

	.select__input {
		color: ${(props) => props.theme.colors.white};
		font-family: Manrope;
		font-size: 14px;
		line-height: ${14 / 14}px;
	}

	.select__placeholder {
		position: absolute;
		right: 0;
		top: 3;
		color: ${(props) => props.theme.colors.white};
		font-family: Manrope;
		font-size: 14px;
		line-height: ${14 / 14}px;
		@media (min-width: 768px) {
			font-size: 17px;
			line-height: 156%;
		}
	}

	.select__option {
		background-color: transparent;
		color: rgba(243, 243, 243, 0.4);
		font-family: Manrope;
		font-size: 12px;
		line-height: ${16 / 10}px;
		:hover {
			color: ${(props) => props.theme.colors.white};
		}
		:focus {
			color: ${(props) => props.theme.colors.white};
		}
		@media (min-width: 768px) {
			font-size: 17px;
			line-height: 156%;
		}
	}

	.select__control--is-focused {
		outline: 0;
	}

	.select__indicator {
		padding: 0;
		svg {
			fill: rgba(243, 243, 243, 0.5);
			transition: transform 300ms ease;
			:hover {
				fill: ${(props) => props.theme.colors.white};
				transform: rotate(180deg);
			}
			:focus {
				fill: ${(props) => props.theme.colors.white};
				transform: rotate(180deg);
			}
			:active {
				fill: ${(props) => props.theme.colors.white};
				transform: rotate(180deg);
			}
		}
	}

	.select__value-container {
		position: relative;
	}

	.select__single-value {
		display: block;
		color: ${(props) => props.theme.colors.white};
		font-family: Manrope;
		font-size: 14px;
		color: ${(props) => props.theme.colors.white};
		@media (min-width: 768px) {
			font-size: 17px;
			line-height: 156%;
		}
	}
`;

export const DeleteButton = styled.button`
	background-color: transparent;
	padding: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 0;
	svg {
		fill: rgba(243, 243, 243, 0.5);
		:hover {
			fill: ${(props) => props.theme.colors.white};
			transform: rotate(180deg);
		}
		:focus {
			fill: ${(props) => props.theme.colors.white};
			transform: rotate(180deg);
		}
		:active {
			fill: ${(props) => props.theme.colors.white};
			transform: rotate(180deg);
		}
	}
`;
