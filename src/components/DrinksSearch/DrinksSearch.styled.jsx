import styled from "@emotion/styled";
import Select from "react-select";

export const StyledSelect = styled(Select)`
 background-color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.colors.backgroundLight
      : theme.colors.blue};
	border-radius: 200px;
	max-width: 335px;
	max-height: 54px;

	@media screen and (min-width: 768px) {
		width: 199px;
		height: 56px;
	}

	.select__menu {
		 background-color: ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.colors.backgroundLight
        : theme.colors.blue};
		border-radius: 20px;
		outline: 0;
		border: 0;
		margin-top: 4px;
		z-index: 2;
	}

	.select__menu:hover {
		outline: 0;
	}

	.select__menu-list {
		padding: 14px 15px;

		max-height: 335px;
		overflow-x: hidden;
	}

	.select__value-container {
		padding: 10px;
	}

	.select__control {
		cursor: pointer;
		position: relative;
		width: 315px;
		height: 56px;
		background-color: transparent;
		color: ${(props) => props.theme.colors.white};
		font-family: Manrope;
		font-size: 14px;
		border: 0;
		border-radius: 0;

		@media screen and (min-width: 768px) {
			font-size: 17px;
			width: 190px;
		}
		:hover {
			outline: 0;
			box-shadow: 0;
			outline: 0;
			box-shadow: none;
			border: 0;

			html,
			body {
				overflow: hidden;
			}
		}
		:focus {
			html,
			body {
				overflow: hidden;
			}
		}
	}

	.select__indicator-separator {
		display: none;
	}

	.select__input-container {
		margin: auto;
		padding: auto;
		color: ${(props) => props.theme.colors.white};
		font-family: Manrope;
		font-size: 14px;
		line-height: ${14 / 14}px;
		height: 35px;
		@media screen and (min-width: 768px) {
			font-size: 17px;
		}
	}

	.select__input {
		color: ${(props) => props.theme.colors.white};
		font-family: Manrope;
		font-size: 14px;
		line-height: ${14 / 14}px;
		@media screen and (min-width: 768px) {
			font-size: 17px;
		}
	}

	.select__placeholder {
		position: absolute;
		left: 0;
		top: 5;
		margin: auto;
		padding: auto;
		color: ${(props) => props.theme.colors.white};
		font-family: Manrope;
		font-size: 14px;
		line-height: ${14 / 14}px;
		@media screen and (min-width: 768px) {
			font-size: 17px;
		}
	}

	.select__option {
		background-color: transparent;
		color: ${(props) => props.theme.colors.white};
		font-family: Manrope;
		font-size: 12px;
		@media screen and (min-width: 768px) {
			font-size: 17px;
		}
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
		position: absolute;
		left: 24px;
		margin: auto;
		padding: auto;
		color: ${(props) => props.theme.colors.white};
		font-family: Manrope;
		font-size: 14px;
		@media screen and (min-width: 768px) {
			font-size: 17px;
		}
	}

	.select__menu-list::-webkit-scrollbar {
		width: 8px;
	}
	.select__menu-list::-webkit-scrollbar-thumb {
		background: ${(props) => props.theme.colors.grey};
		border-radius: 20px;
	}

`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const InputContainer = styled.div`
  max-width: 335px;
  max-height: 54px;
  border: 1px solid ${(props) => props.theme.colors.white};
  border-radius: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    width: 264px;
    height: 56px;
  }
`;

export const Input = styled.input`
  background-color: transparent;
  max-width: 170px;
  border: none;
  color: ${(props) => props.theme.colors.white};
  margin-left: 24px;
  height: 35px;
  font-size: 17px;
  ::placeholder {
    color: ${(props) => props.theme.colors.white};
    font-size: 17px;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  :hover {
    outline: none;
    border: none;
  }
  :focus {
    outline: none;
    border: none;
  }
`;
