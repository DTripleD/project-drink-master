// import glass from "../../images/porto-glass.jpg";
import { MainContainer } from "../../components/MainContainer/MainContainer";
import { ErrorText, ErrorPageWrapper, TextWrapper } from "./ErrorPage.styled";

const ErrorPage = () => {
  return (
    <MainContainer>
      <ErrorPageWrapper>
        <TextWrapper>
          <ErrorText>4</ErrorText>
          <ErrorText>4</ErrorText>
        </TextWrapper>

        {/* <img src={glass} alt="" /> */}
      </ErrorPageWrapper>
    </MainContainer>
  );
};

export default ErrorPage;
