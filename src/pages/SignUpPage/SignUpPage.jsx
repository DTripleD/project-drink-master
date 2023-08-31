import { SignUpForm } from '../../components/AuthForm/SignUpForm';
import { BaseDiv, SummaryWrapper } from '../../pages/WellcomPage/WelcomePage.styled';
import { MainContainer } from "../../components/MainContainer/MainContainer";


const SignUpPage = () => {
  return (
    <MainContainer>
    <BaseDiv>
      <SummaryWrapper>
        <SignUpForm />
      </SummaryWrapper>
    </BaseDiv>
  </MainContainer>
  );
};

export default SignUpPage;





