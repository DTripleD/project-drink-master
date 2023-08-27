import styled from "@emotion/styled";
import Select from "react-select";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 40px;
`;

export const StyledImageInput = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 18px;
	border-radius: 8px;
	background: rgba(22, 31, 55, 0.5);
	width: 335px;
	height: 320px;
	@media (min-width: 1440px) {
		width: 440px;
		height: 440px;
	}
`;

export const AddImageButton = styled.label`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 50px;
	height: 50px;
	border-radius: 6px;
	background: #f3f3f3;
	cursor: pointer;
	&:hover {
		transform: 1.2;
	}
`;

export const AddImageTitle = styled.p`
	color: #f3f3f3;
	font-family: Manrope;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: ${20 / 16}px;
`;

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 34px;
`;

export const StyledInput = styled.input`
	width: 100%;
	padding: 0;
	position: relative;
	background-color: transparent;
	height: 34px;
	border: 0;
	border-bottom: 1px rgba(243, 243, 243, 0.5) solid;
	:focus-visible {
		outline: 0;
		box-shadow: 0;
	}
	::placeholder {
		position: absolute;
		left: 0;
		top: 0;
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
		background-color: #161f37;
		border-radius: 12px;
		outline: 0;
		border: 0;
		margin-top: -10px;
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
		width: 154px;
		height: 34px;
		background-color: transparent;
		color: #f3f3f3;
		font-family: Manrope;
		font-size: 14px;
		border: 0;
		border-radius: 0;
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
		position: absolute;
		right: 0;
		top: 3;
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
		position: absolute;
		right: 0;
		top: -6px;
		color: #f3f3f3;
		font-family: Manrope;
		font-size: 14px;
	}
`;
