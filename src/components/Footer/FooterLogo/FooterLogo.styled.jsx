import styled from "@emotion/styled";

export const LogoText = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 1.125;
  margin: 0;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 18px;
    letter-spacing: 1.22;
    margin-bottom: 28px;
  }
`;

export const LogoWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 14px;
	margin: 0

	@media (min-width: 768px) {
		gap: 14px;
		
`;

export const getStyledIcon = (component) => styled(component)`
  width: 22px;
  height: 22px;
  fill: ${(props) => props.theme.colors.white};
  margin-bottom: 20px;
  @media (min-width: 768px) {
    width: 28px;
    height: 28px;
    margin-bottom: 28px;
  }
`;
