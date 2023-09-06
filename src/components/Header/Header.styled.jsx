import styled from "@emotion/styled";

export const HeaderStyled = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px 0;

	width: 100%;
	box-sizing: border-box;
`;

export const UserMenuWrapper = styled.div`
	display: flex;
	gap: 14px;

	@media (min-width: 768px) {
		gap: 24px;
	}
`;

export const MenuWrepper = styled.div`
	z-index: 800;

	@media (min-width: 1440px) {
		display: none;
	}
`;
