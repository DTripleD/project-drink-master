import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { verifyThunk } from '../../redux/auth/operations';
import { signup } from '../../redux/auth/operations';
import { SignUpSchema } from './SignUpAndSignInSchema';
import { AuthNavigate } from '../AuthNav/AuthNav';
import { useState } from 'react';
// import { handleEyeClick } from '../../redux/auth/authSlice';
// import { selectIsClicked } from '../../redux/auth/selectors';
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

export const SignUpForm = () => {
  const dispatch = useDispatch();
//   const isClicked = useSelector(selectIsClicked);
    const [isClicked, setIsClicked] = useState(false);

//   const [searchParams] = useSearchParams();
//   const verificationToken = searchParams.get('verificationToken');

//   useEffect(() => {
//     if (verificationToken === null) return;
//     // dispatch(verifyThunk(verificationToken));
//   }, [verificationToken, dispatch]);

  const openPassword = () => {
    setIsClicked(prevIsClicked => !prevIsClicked);
  };

  return (
    <StyledForm
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={SignUpSchema}
      onSubmit={values => {
        dispatch(signup(values));
      }}
    >
      {({ errors, touched, handleChange, setFieldTouched }) => (
        <StyledFormInsight>
          <StyledTitle>Registration</StyledTitle>
          <StyledInnerDiv>
            <StyledInputWrap>
              <StyledInput
                type="text"
                name="name"
                placeholder="Name"
                onChange={e => {
                  setFieldTouched('name');
                  handleChange(e);
                }}
                className={
                  touched.name && !errors.name
                    ? 'valid-border'
                    : errors.name && touched.name
                    ? 'invalid-border'
                    : ''
                }
              />
              {errors.name && touched.name && (
                <div>
                  <StyledIconError color="red" />{' '}
                  <StyledError name="name" component="div" />
                </div>
              )}
              {touched.name && !errors.name && (
                <div>
                  <StyledIconChecked color="green" />{' '}
                  <StyledMessage>This is an CORRECT name</StyledMessage>
                </div>
              )}
            </StyledInputWrap>

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
                  type={isClicked ? 'text' : 'password'}
                  name="password"
                  onChange={e => {
                    setFieldTouched('password');
                    handleChange(e);
                  }}
                  placeholder="Password"
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
          <StyledButton type="submit">Sign Up</StyledButton>
          <AuthNavigate />
        </StyledFormInsight>
      )}
    </StyledForm>
  );
};