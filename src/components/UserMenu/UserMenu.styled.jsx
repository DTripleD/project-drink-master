import styled from "@emotion/styled";

export const MenuWrapper = styled.div`
	position: relative;
	display: flex;

	align-items: center;
	gap: 8px;
	width: 91px;

	@media (min-width: 768px) {
		width: 116px;
		gap: 14px;
	}
`;

export const UserPhotoWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 32px;
	height: 32px;
	border-radius: 50%;

	background: ${({ theme }) =>
		theme.currentTheme === "light"
			? theme.colors.backgroundLight
			: theme.colors.white};
	overflow: hidden;
	@media (min-width: 768px) {
		width: 44px;
		height: 44px;
	}
`;

export const UserPhoto = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 50%;
`;

export const NameWrapper = styled.div`
	width: 51px;
	overflow: hidden;

	@media (min-width: 768px) {
		width: 58px;
	}
`;

export const UserName = styled.p`
	font-size: 14px;
	margin: 0;
	color: ${(props) => props.theme.colors.white};
	width: 100%;
`;
