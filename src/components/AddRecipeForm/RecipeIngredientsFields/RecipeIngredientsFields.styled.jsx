import styled from "@emotion/styled";
import Select from "react-select";

export const SubTitleContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 80px;
`;

export const Counter = styled.div`
	min-width: 104px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-radius: 200px;
	border: 1px solid rgba(243, 243, 243, 0.5);
	padding: 9px 16px;
`;

export const CounterButton = styled.button`
	background-color: transparent;
	padding: 0;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const CountValue = styled.p`
	display: inline-block;
	color: #f3f3f3;
	text-align: center;
	font-family: Manrope;
	font-size: 14px;
	line-height: ${18 / 14}px;
`;

export const IngredientsList = styled.ul`
margin-top: 34px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`
export const StyledInput = styled.input`
	width: 100%;
	padding: 0;
	padding-bottom: 14px;
	background-color: transparent;
	min-height: 23px;
	border: 0;
	border-bottom: 1px rgba(243, 243, 243, 0.5) solid;
	:focus-visible {
		outline: 0;
		box-shadow: 0;
	}
	::placeholder {
		color: rgba(243, 243, 243, 0.5);
		font-family: Manrope;
		font-size: 14px;
		line-height: normal;
		letter-spacing: -0.28px;
	}
`;

export const SelectContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-end;
`;

export const StyledSelect = styled(Select)`
	.select__menu {
		position: absolute;
		right: -5px;
		top: 35px;
		width: 170px;
		background-color: ${(props) => props.theme.colors.blue};
		border-radius: 12px;
		outline: 0;
		border: 0;
		margin-top: -10px;
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
		border-radius: 200px;
		border: 1px solid rgba(243, 243, 243, 0.5);
		opacity: 0.8;
		position: relative;
		width: 190px;
		height: 34px;
		background-color: transparent;
		color: ${(props) => props.theme.colors.white};
		font-family: Manrope;
		font-size: 14px;
		border-bottom: 1px rgba(243, 243, 243, 0.5) solid;
		:hover {
			outline: 0;
			box-shadow: 0;
			outline: 0;
			box-shadow: none;
			border: 0;
			border-bottom: 1px rgba(243, 243, 243, 0.5) solid;
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
		line-height: ${14 / 14}px;
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
	}

	.select__control--is-focused {
		outline: 0;
	}

	.select__indicator {
		padding: 0;

		:hover {
			translate-x: 180;
		}
	}

	.select__value-container {
		position: relative;
	}

	.select__single-value {
		display: block;
		position: absolute;
		right: 0;
		top: -6px;
		color: ${(props) => props.theme.colors.white};
		font-family: Manrope;
		font-size: 14px;
	}
`;
