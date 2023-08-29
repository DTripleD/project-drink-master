import styled from "@emotion/styled";
import Select from "react-select";

export const StyledSelect = styled(Select)`
	background-color: #161f37;
	border-radius: 200px;

	.select__menu {
		background-color: #161f37;
		border-radius: 12px;
		outline: 0;
		border: 0;
		margin-top: 10px;
		z-index: 2;
	}

	.select__menu:hover {
		outline: 0;
	}

	.select__menu-list {
		padding: 0;

		max-height: 185px;
		scrollbar-width: 6px;
		overflow-x: hidden;
	}

	.select__value-container {
		padding: 0;
	}

	.select__control {
		position: relative;
		width: 199px;
		height: 56px;
		background-color: transparent;
		color: #f3f3f3;
		font-family: Manrope;
		font-size: 14px;
		border: 0;
		border-radius: 0;
		/* border-bottom: 1px rgba(243, 243, 243, 0.5) solid; */
		:hover {
			outline: 0;
			box-shadow: 0;
			outline: 0;
			box-shadow: none;
			border: 0;
			/* border-bottom: 1px rgba(243, 243, 243, 0.5) solid; */
		}
	}

	.select__indicator-separator {
		display: none;
	}

	.select__input-container {
		margin: auto;
		padding: auto;
		color: #f3f3f3;
		font-family: Manrope;
		font-size: 14px;
		line-height: ${14 / 14}px;
	}

	.select__input {
		color: #f3f3f3;
		font-family: Manrope;
		font-size: 14px;
		line-height: ${14 / 14}px;
	}

	.select__placeholder {
		/* position: absolute; */
		/* right: 0;
		top: 3; */
		margin: auto;
		padding: auto;
		color: #f3f3f3;
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
			color: #f3f3f3;
		}
		:focus {
			color: #f3f3f3;
		}
	}

	.select__control--is-focused {
		outline: 0;
	}

	.select__indicator {
		padding: 0;
	}

	.select__value-container {
		position: relative;
	}

	.select__single-value {
		display: block;
		/* position: absolute;
		right: 0;
		top: -6px; */
		margin: auto;
		padding: auto;
		color: #f3f3f3;
		font-family: Manrope;
		font-size: 14px;
	}
`;
