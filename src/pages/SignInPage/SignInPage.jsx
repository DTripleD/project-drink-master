import { SignInForm } from '../../components/AuthForm/SignInForm';
import { BaseDiv, SummaryWrapper } from '../../pages/WellcomPage/WelcomePage.styled';

const SignInPage = () => {
  return (
    <BaseDiv>
      <SummaryWrapper>
        <SignInForm />
      </SummaryWrapper>
    </BaseDiv>
  );
};

export default SignInPage;





