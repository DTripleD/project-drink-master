import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {  signin } from '../../redux/auth/operations';
import { AuthNavigate } from '../AuthNav/AuthNav';
import { selectIsClicked } from '../../redux/auth/selectors';
import { handleEyeClick } from '../../redux/auth/authSlice';
import { SignInSchema } from './SignUpAndSignInSchema';
import {
  StyledButton,
  StyledError,
  StyledForm,
  StyledFormInsight,
  StyledIconChecked,
  StyledIconError,
  StyledInput,
  StyledInputWrap,
  StyledTitle,
  StyledInnerDiv,
  StyledMessage,
  StyledAiOutlineEye,
  StyledAiOutlineEyeInvisible,
  StyledPasswordDiv,
} from './AuthForm.styled';

export const SignInForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isClicked = useSelector(selectIsClicked);

  const openPassword = () => {
    dispatch(handleEyeClick());
  };

  return (
    <StyledForm
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={SignInSchema}
      onSubmit={values => {
        dispatch(signin(values)).then(res => {
          if (res.payload && res.payload.status === 200) {
            navigate('/signin');
            // dispatch(getCurrentUserThunk());
          }
        });
      }}
    >
      {({ errors, touched, handleChange, setFieldTouched }) => (
        <StyledFormInsight>
          <StyledTitle>Sign In</StyledTitle>
          <StyledInnerDiv>
            <StyledInputWrap>
              <StyledInput
                type="email"
                name="email"
                placeholder="Email"
                onChange={e => {
                  setFieldTouched('email');
                  handleChange(e);
                }}
                className={
                  touched.email && !errors.email
                    ? 'valid-border'
                    : errors.email && touched.email
                    ? 'invalid-border'
                    : ''
                }
              />
              {errors.email && touched.email && (
                <div>
                  <StyledIconError color="red" />{' '}
                  <StyledError name="email" component="div" />
                </div>
              )}
              {touched.email && !errors.email && (
                <div>
                  <StyledIconChecked color="green" />{' '}
                  <StyledMessage>This is an CORRECT email</StyledMessage>
                </div>
              )}
            </StyledInputWrap>
            <StyledInputWrap>
              <StyledPasswordDiv>
                <StyledInput
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={e => {
                    setFieldTouched('password');
                    handleChange(e);
                  }}
                  className={
                    touched.password && !errors.password
                      ? 'valid-border'
                      : errors.password && touched.password
                      ? 'invalid-border'
                      : ''
                  }
                />
                {touched.password && !isClicked ? (
                  <StyledAiOutlineEyeInvisible
                    color="#F3F3F3"
                    onClick={openPassword}
                  />
                ) : touched.password && isClicked ? (
                  <StyledAiOutlineEye color="#F3F3F3" onClick={openPassword} />
                ) : (
                  ''
                )}
              </StyledPasswordDiv>
              {errors.password && touched.password && (
                <StyledError name="password" component="div" />
              )}
              {touched.password && !errors.password && (
                <StyledMessage>This is an CORRECT password</StyledMessage>
              )}
            </StyledInputWrap>
          </StyledInnerDiv>
          <StyledButton type="submit">Sign In</StyledButton>
          <AuthNavigate />
        </StyledFormInsight>
      )}
    </StyledForm>
  );
};