import { SignInForm } from '../../components/AuthForm/SignInForm';
import { BaseDiv, SummaryWrapper } from '../../pages/WellcomPage/WelcomePage.styled';
import { MainContainer } from "../../components/MainContainer/MainContainer";

const SignInPage = () => {
  return (
    <MainContainer>
    <BaseDiv>
      <SummaryWrapper>
        <SignInForm />
      </SummaryWrapper>
      </BaseDiv>
      </MainContainer>
  );
};

export default SignInPage;





