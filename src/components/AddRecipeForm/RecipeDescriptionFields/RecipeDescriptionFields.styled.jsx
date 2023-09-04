import styled from "@emotion/styled";
import Select from "react-select";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 40px;
	@media (min-width: 768px) {
		flex-direction: row;
		gap: 34px;
	}
`;

export const AddImageButtonContainer = styled.div`
	height: 100%;
	width: 100%;
	position: absolute;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 18px;
`;

export const Image = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;

export const StyledImageInput = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 18px;
	overflow: hidden;
	border-radius: 8px;
	background: rgba(22, 31, 55, 0.5);
	width: 335px;
	height: 320px;
	@media (min-width: 768px) {
		width: 320px;
	}
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
	background: ${(props) => props.theme.colors.white};
	cursor: pointer;
	&:hover {
		transform: 1.2;
	}
`;

export const AddImageTitle = styled.p`
	color: ${(props) => props.theme.colors.white};
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
	@media (min-width: 768px) {
		gap: 40px;
	}
`;

export const StyledInput = styled.input`
	width: 100%;
	padding: 0;
	padding-bottom: 14px;
	background-color: transparent;
	min-height: 23px;
	border: 0;
	border-bottom: 1px rgba(243, 243, 243, 0.5) solid;
	color: ${(props) => props.theme.colors.white};
	font-family: Manrope;
	font-size: 14px;
	line-height: normal;
	letter-spacing: -0.28px;
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
	@media (min-width: 768px) {
		font-size: 16px;
		letter-spacing: -0.32px;
		padding-bottom: 18px;
	}
	@media (min-width: 1440px) {
	}
`;

export const ErrorContainer = styled.div`
	position: relative;
`;

export const ErrorImg = styled.p`
	color: red;
	font-size: 14px;
	position: absolute;
	bottom: 25px;
	left: 50%;
	transform: translate(-50%);
`;

export const Error = styled.p`
	color: red;
	font-size: 14px;
	position: absolute;
	bottom: -18px;
	left: 0;
`;

export const SelectContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	position: relative;
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
		padding: 10px 0;
		max-height: 185px;
		scrollbar-width: 4px;
		overflow-x: hidden;
		height: 118px;
	}

	.select__value-container {
		padding: 0;
	}

	.select__control {
		cursor: pointer;
		position: relative;
		width: 190px;
		height: 34px;
		background-color: transparent;
		color: ${(props) => props.theme.colors.white};
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

	.select-container {
		outline: 0;
	}

	.select__control--is-focused {
		outline: 0;
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
		line-height: ${14 / 14};
	}

	.select__input {
		color: ${(props) => props.theme.colors.white};
		font-family: Manrope;
		font-size: 14px;
		line-height: ${14 / 14}px;
	}

	.select__placeholder {
		color: ${(props) => props.theme.colors.white};
		font-family: Manrope;
		font-size: 14px;
		line-height: ${14 / 14};
		text-align: right;
		padding-bottom: 9px;
		@media (min-width: 768px) {
			padding-bottom: 18px;
		}
	}

	.select__option {
		background-color: transparent;
		color: rgba(243, 243, 243, 0.4);
		font-family: Manrope;
		font-size: 12px;
		line-height: ${16 / 12}px;
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
		padding-bottom: 10px;
		@media (min-width: 768px) {
			padding-bottom: 15px;
		}
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

	.select__indicators {
	}

	.select__value-container {
		position: relative;
	}

	.select__single-value {
		color: ${(props) => props.theme.colors.white};
		font-family: Manrope;
		font-size: 14px;
		text-align: right;
		padding-bottom: 8px;
		@media (min-width: 768px) {
			padding-bottom: 17px;
		}
	}
`;
