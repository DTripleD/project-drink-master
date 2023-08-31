import { SignUpForm } from '../../components/AuthForm/SignUpForm';
import { BaseDiv, SummaryWrapper } from '../../pages/WellcomPage/WelcomePage.styled';
import Background from "../../components/Background/Background";


const SignUpPage = () => {
  return (
     <Background>
    <BaseDiv>
      <SummaryWrapper>
        <SignUpForm />
      </SummaryWrapper>
      </BaseDiv>
      </Background>
  );
};

export default SignUpPage;





