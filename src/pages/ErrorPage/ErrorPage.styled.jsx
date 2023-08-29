import styled from "@emotion/styled";
import glass from "../../images/porto-glass.jpg";

export const ErrorText = styled.h2`
  font-weight: 600;
  font-size: 150px;
  line-height: 123px;

  color: rgba(243, 243, 243, 0.1);
  margin: 0;
`;

export const ErrorPageWrapper = styled.div`
  background-image: linear-gradient(
      176.63deg,
      #0a0a11 1.42%,
      rgba(10, 10, 17, 0) 24.97%
    ),
    linear-gradient(281.81deg, #0a0a11 12.84%, rgba(10, 10, 17, 0) 58.63%),
    linear-gradient(359.21deg, #0a0a11 -1.94%, rgba(10, 10, 17, 0) 21.95%),
    linear-gradient(86.16deg, #0a0a11 8.41%, rgba(10, 10, 17, 0) 46.6%),
    url(${glass});
  background-position: right;
  background-repeat: no-repeat;
  width: 465px;
  height: 517px;
  background-size: cover;
  position: relative;
  background-repeat: no-repeat;
  background-size: 100% auto;
      margin-left: auto;
    margin-right: auto;
    margin-top: 83px;
    margin-bottom: 140px;
`;

export const TextWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  width: 301px;
  justify-content: space-between;
`;
