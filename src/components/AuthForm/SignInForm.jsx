import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { signin, refreshUser } from "../../redux/auth/operations";
import { AuthNavigate } from "../AuthNav/AuthNav";
import { useForm } from "react-hook-form";
import { SignInSchema } from "./SignUpAndSignInSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { BiCheckCircle, BiErrorCircle } from "react-icons/bi";
import { FiEyeOff, FiEye } from "react-icons/fi";
// import { selectIsClicked } from '../../redux/auth/selectors';
// import { handleEyeClick } from '../../redux/auth/authSlice';

import {
  StyledButton,
  StyledError,
  StyledForm,
  StyledFormInsight,
  StyledInput,
  StyledInputWrap,
  StyledTitle,
  StyledInnerDiv,
  StyledMessage,
  StyledPasswordDiv,
} from "./AuthForm.styled";
import { selectTheme } from "../../redux/theme/selectors";
import theme from "../../shared/theme";

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, dirtyFields },
  } = useForm({
    mode: "onChange",
    defaultValues: { email: "", password: "" },
    resolver: yupResolver(SignInSchema),
  });

  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false);
  const currentTheme = useSelector(selectTheme);
  const themes = theme(currentTheme);

  const togglePasswordVisibility = () => {
    setIsClicked(!isClicked);
  };

  const onSubmit = async (values) => {
    try {
      const res = await dispatch(signin(values));
      if (res.payload.response?.status === 401) {
        toast.error(res.payload.response.data.message);
        throw new Error(res.payload.response.data.message);
      }

      toast.success("Authentication successful");
      dispatch(refreshUser());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <StyledForm autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <StyledFormInsight>
          <StyledTitle>Sign In</StyledTitle>
          <StyledInnerDiv>
            <StyledInputWrap>
              <StyledInput
                type="email"
                name="email"
                placeholder="Email"
                {...register("email")}
                className={
                  errors.email
                    ? "invalid-border"
                    : dirtyFields.email
                    ? "valid-border"
                    : ""
                }
              />
              {errors.email && (
                <div>
                  <BiErrorCircle
                    style={{
                      width: "24px",
                      height: "24px",
                      color: "red",
                      display: "flex",
                      position: "absolute",
                      top: "50%",
                      transform: "translateY(-50%)",
                      right: "24px",
                    }}
                  />
                  <StyledError>{errors.email.message}</StyledError>
                </div>
              )}
              {!errors.email && dirtyFields.email && (
                <div>
                  <BiCheckCircle
                    style={{
                      width: "24px",
                      height: "24px",
                      color: "#3CBC81",
                      display: "flex",
                      position: "absolute",
                      top: "50%",
                      transform: "translateY(-50%)",
                      right: "24px",
                    }}
                  />
                  <StyledMessage>This is a CORRECT email</StyledMessage>
                </div>
              )}
            </StyledInputWrap>
            <StyledInputWrap>
              <StyledPasswordDiv>
                <StyledInput
                  type={isClicked ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  {...register("password")}
                  className={
                    errors.password
                      ? "invalid-border"
                      : dirtyFields.password
                      ? "valid-border"
                      : ""
                  }
                />
                {errors.password && (
                  <StyledError>{errors.password.message}</StyledError>
                )}
                {!errors.password && dirtyFields.password && (
                  <StyledMessage>This is a CORRECT password</StyledMessage>
                )}

                <span
                  onClick={togglePasswordVisibility}
                  style={{
                    position: "absolute",
                    right: "24px",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                >
                  {isClicked ? (
                    <FiEye color={themes.colors.white} />
                  ) : (
                    <FiEyeOff color={themes.colors.white} />
                  )}
                </span>
              </StyledPasswordDiv>
            </StyledInputWrap>
          </StyledInnerDiv>
          <StyledButton type="submit" disabled={!isValid}>
            Sign In
          </StyledButton>
          <AuthNavigate />
        </StyledFormInsight>
      </StyledForm>
    </>
  );
};
