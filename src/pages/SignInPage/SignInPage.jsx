import { SignInForm } from "../../components/AuthForm/SignInForm";
import { BaseDiv, SummaryWrapper } from "../WelcomePage/WelcomePage.styled";
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
