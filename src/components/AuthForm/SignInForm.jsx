import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../redux/auth/operations";
import { AuthNavigate } from "../AuthNav/AuthNav";
import { useState } from "react";
// import { selectIsClicked } from '../../redux/auth/selectors';
// import { handleEyeClick } from '../../redux/auth/authSlice';
import { SignInSchema } from "./SignUpAndSignInSchema";
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
} from "./AuthForm.styled";
import { selectTheme } from "../../redux/theme/selectors";
import theme from "../../shared/theme";

export const SignInForm = () => {
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false);
  const currentTheme = useSelector(selectTheme);
  const themes = theme(currentTheme);

  const openPassword = () => {
    setIsClicked((prevIsClicked) => !prevIsClicked);
  };

  const handleSubmit = async (values) => {
    try {
      const res = await dispatch(signin(values));
      if (res.payload.response?.status === 401) {
        toast.error(res.payload.response.data.message);
        throw new Error(res.payload.response.data.message);
      }

      toast.success("Authentication successful");
      // dispatch(refreshUser());
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <StyledForm
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignInSchema}
        onSubmit={(values) => handleSubmit(values)}
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
                  onChange={(e) => {
                    setFieldTouched("email");
                    handleChange(e);
                  }}
                  className={
                    touched.email && !errors.email
                      ? "valid-border"
                      : errors.email && touched.email
                      ? "invalid-border"
                      : ""
                  }
                />
                {errors.email && touched.email && (
                  <div>
                    <StyledIconError color="red" />{" "}
                    <StyledError name="email" component="div" />
                  </div>
                )}
                {touched.email && !errors.email && (
                  <div>
                    <StyledIconChecked color="green" />{" "}
                    <StyledMessage>This is an CORRECT email</StyledMessage>
                  </div>
                )}
              </StyledInputWrap>
              <StyledInputWrap>
                <StyledPasswordDiv>
                  <StyledInput
                    id="password"
                    type={isClicked ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    onChange={(e) => {
                      setFieldTouched("password");
                      handleChange(e);
                    }}
                    className={
                      touched.password && !errors.password
                        ? "valid-border"
                        : errors.password && touched.password
                        ? "invalid-border"
                        : ""
                    }
                  />
                  {touched.password && !isClicked ? (
                    <StyledAiOutlineEyeInvisible
                      color={themes.colors.white}
                      onClick={openPassword}
                    />
                  ) : touched.password && isClicked ? (
                    <StyledAiOutlineEye
                      color={themes.colors.white}
                      onClick={openPassword}
                    />
                  ) : (
                    ""
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
    </>
  );
};
