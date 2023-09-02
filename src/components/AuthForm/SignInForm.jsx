import { useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { signin, refreshUser } from "../../redux/auth/operations";
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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //   const isClicked = useSelector(selectIsClicked);
  const [isClicked, setIsClicked] = useState(false);
  const currentTheme = useSelector(selectTheme);
  const themes = theme(currentTheme);

  const openPassword = () => {
    setIsClicked((prevIsClicked) => !prevIsClicked);
  };

  const handleSubmit = (Values) => {
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then((response) => {
        toast.success(`Wellcome, ${response.user.name}!`);
        form.reset();
      })
      // .catch(err => console.log('err', err));
      .catch(() => toast.error("Error login- wrong email or password."));
  };
  return (
    <>
      <StyledForm
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignInSchema}
        onSubmit={async (values) => {
          try {
            const res = await dispatch(signin(values));
            console.log("first", res.payload.status);
            if (res.payload.status === 401) {
              toast.error(res.payload.data.message);
              throw new Error(res.payload.data.message);
            }

            if (res.payload && res.payload.status === 200) {
              navigate("/signin");
              dispatch(refreshUser());
              toast.success("Authentication successful");
              return;
            }
          } catch (error) {
            console.log(error);
          }
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
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "#66BB6A",
              border: "1px solid ##66BB6A",
              borderRadius: "4px",
              color: "white",
            },
            icon: () => null,
          },
          error: {
            style: {
              background: "#E57373",
              border: "1px solid #FF5733",
              borderRadius: "4px",
              color: "white",
            },
            icon: () => null,
          },
        }}
      />
    </>
  );
};
