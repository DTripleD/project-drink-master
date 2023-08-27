import { SignUpForm } from '../../components/AuthForm/SignUpForm';
import { BaseDiv, SummaryWrapper } from '../../pages/WellcomPage/WelcomePage.styled';


const SignUpPage = () => {
  return (
    <BaseDiv>
      <SummaryWrapper>
        <SignUpForm />
      </SummaryWrapper>
    </BaseDiv>
  );
};

export default SignUpPage;





