import styled from "@emotion/styled";

export const FollowUsConatiner = styled.div`
margin-top: 80px;
	display: flex;
	aling-items: left;
	flex-direction: column;
	justify-content: center;
  gap: 24px;
`;

export const FollowUsTitle = styled.h3`
	color: ${(props) => props.theme.colors.white};
	font-family: Manrope;
	font-size: 24px;
	font-style: normal;
	font-weight: 500;
	line-height: ${32 / 24};
`;
