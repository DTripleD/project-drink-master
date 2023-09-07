// import glass from "../../images/porto-glass.jpg";
import { MainContainer } from "../../components/MainContainer/MainContainer";
import {
  ErrorText,
  ErrorPageWrapper,
  TextWrapper,
  ErrorContainer,
} from "./ErrorPage.styled";

const ErrorPage = () => {
  return (
    <MainContainer>
      <ErrorContainer>
        <ErrorPageWrapper>
          <TextWrapper>
            <ErrorText>4</ErrorText>
            <ErrorText>4</ErrorText>
          </TextWrapper>

          {/* <img src={glass} alt="" /> */}
        </ErrorPageWrapper>
      </ErrorContainer>
    </MainContainer>
  );
};

export default ErrorPage;
