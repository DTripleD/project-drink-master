import { SignInForm } from '../../components/AuthForm/SignInForm';
import { BaseDiv, SummaryWrapper } from '../../pages/WellcomPage/WelcomePage.styled';
import Background from "../../components/Background/Background";

const SignInPage = () => {
  return (
    <Background>
    <BaseDiv>
      <SummaryWrapper>
        <SignInForm />
      </SummaryWrapper>
    </BaseDiv>
    </Background>
  );
};

export default SignInPage;





