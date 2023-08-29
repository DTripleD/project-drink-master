// import glass from "../../images/porto-glass.jpg";
import { ErrorText, ErrorPageWrapper, TextWrapper } from "./ErrorPage.styled";

const ErrorPage = () => {
  return (
    <ErrorPageWrapper>
      <TextWrapper>
        <ErrorText>4</ErrorText>
        <ErrorText>4</ErrorText>
      </TextWrapper>
      {/* <img src={glass} alt="" /> */}
    </ErrorPageWrapper>
  );
};

export default ErrorPage;
