import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const PopularList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 21px;
	@media (min-width: 768px) {
		flex-direction: row;
		flex-wrap: wrap;
		gap: 32px;
	}
	@media (min-width: 1440px) {
		flex-direction: column;
		flex-wrap: nowrap;
		gap: 25px;
	}
`;

export const PopularItem = styled.li`
	@media (min-width: 768px) {
		max-width: 336px;
	}
`;
export const PopularLink = styled(Link)`
	display: flex;
	justify-content: flex-start;
	gap: 14px;
`;

export const Image = styled.img`
	width: 90px;
	height: 90px;
	border-radius: 10px;
`;

export const PopularTitle = styled.h4`
	color: ${(props) => props.theme.colors.white};
	font-size: 16px;
	font-weight: 500;
	line-height: ${22 / 16};
	margin-bottom: 8px;
`;

export const PopularText = styled.p`
	overflow: hidden;
	color: rgba(243, 243, 243, 0.5);
	font-size: 14px;
	font-weight: 400;
	line-height: ${18 / 14};
	margin-bottom: 3px;
	height: 57px;
`;
