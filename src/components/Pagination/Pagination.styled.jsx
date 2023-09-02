import styled from "@emotion/styled";

export const PaginationWrapper = styled.div`
	display: flex;
	justify-content: center;
	ul {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 5px 10px;
		margin-bottom: 80px;

		@media screen and (min-width: 768px) {
			margin-bottom: 140px;
		}
	}
	li {
		margin-right: 24px;
	}
	div {
		color: ${(props) => props.theme.colors.white};
	}
	button {
		color: ${(props) => props.theme.colors.white};
		font-size: 12px;
		text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		font-weight: 500;
		font-feature-settings: "ss04" on;
	}
	button.Mui-selected {
		background-color: rgba(64, 112, 205, 0.5);
	}
`;
