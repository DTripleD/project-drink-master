// import { useDispatch } from "react-redux";
// // import { useEffect } from 'react';
// // import { useSearchParams } from 'react-router-dom';
// // import { verifyThunk } from '../../redux/auth/operations';
// import { signup } from "../../redux/auth/operations";
// import { SignUpSchema } from "./SignUpAndSignInSchema";
// import { AuthNavigate } from "../AuthNav/AuthNav";
// import { useState } from "react";
// // import { handleEyeClick } from '../../redux/auth/authSlice';
// // import { selectIsClicked } from '../../redux/auth/selectors';
// import {
//   StyledButton,
//   StyledError,
//   StyledForm,
//   StyledFormInsight,
//   StyledIconChecked,
//   StyledIconError,
//   StyledInput,
//   StyledInputWrap,
//   StyledTitle,
//   StyledInnerDiv,
//   StyledMessage,
//   StyledAiOutlineEye,
//   StyledAiOutlineEyeInvisible,
//   StyledPasswordDiv,
// } from "./AuthForm.styled";
// import { theme } from "../../main";

// export const SignUpForm = () => {
//   const dispatch = useDispatch();
//   //   const isClicked = useSelector(selectIsClicked);
//   const [isClicked, setIsClicked] = useState(false);

//   //   const [searchParams] = useSearchParams();
//   //   const verificationToken = searchParams.get('verificationToken');

//   //   useEffect(() => {
//   //     if (verificationToken === null) return;
//   //     // dispatch(verifyThunk(verificationToken));
//   //   }, [verificationToken, dispatch]);

//   const openPassword = () => {
//     setIsClicked((prevIsClicked) => !prevIsClicked);
//   };

//   return (
//     <StyledForm
//       initialValues={{
//         name: "",
//         email: "",
//         password: "",
//       }}
//       validationSchema={SignUpSchema}
//       onSubmit={(values) => {
//         dispatch(signup(values));
//       }}
//     >
//       {({ errors, touched, handleChange, setFieldTouched }) => (
//         <StyledFormInsight>
//           <StyledTitle>Registration</StyledTitle>
//           <StyledInnerDiv>
//             <StyledInputWrap>
//               <StyledInput
//                 type="text"
//                 name="name"
//                 placeholder="Name"
//                 onChange={(e) => {
//                   setFieldTouched("name");
//                   handleChange(e);
//                 }}
//                 className={
//                   touched.name && !errors.name
//                     ? "valid-border"
//                     : errors.name && touched.name
//                     ? "invalid-border"
//                     : ""
//                 }
//               />
//               {errors.name && touched.name && (
//                 <div>
//                   <StyledIconError color="red" />{" "}
//                   <StyledError name="name" component="div" />
//                 </div>
//               )}
//               {touched.name && !errors.name && (
//                 <div>
//                   <StyledIconChecked color="green" />{" "}
//                   <StyledMessage>This is an CORRECT name</StyledMessage>
//                 </div>
//               )}
//             </StyledInputWrap>

//             <StyledInputWrap>
//               <StyledInput
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 onChange={(e) => {
//                   setFieldTouched("email");
//                   handleChange(e);
//                 }}
//                 className={
//                   touched.email && !errors.email
//                     ? "valid-border"
//                     : errors.email && touched.email
//                     ? "invalid-border"
//                     : ""
//                 }
//               />
//               {errors.email && touched.email && (
//                 <div>
//                   <StyledIconError color="red" />{" "}
//                   <StyledError name="email" component="div" />
//                 </div>
//               )}
//               {touched.email && !errors.email && (
//                 <div>
//                   <StyledIconChecked color="green" />{" "}
//                   <StyledMessage>This is an CORRECT email</StyledMessage>
//                 </div>
//               )}
//             </StyledInputWrap>
//             <StyledInputWrap>
//               <StyledPasswordDiv>
//                 <StyledInput
//                   id="password"
//                   type={isClicked ? "text" : "password"}
//                   name="password"
//                   onChange={(e) => {
//                     setFieldTouched("password");
//                     handleChange(e);
//                   }}
//                   placeholder="Password"
//                   className={
//                     touched.password && !errors.password
//                       ? "valid-border"
//                       : errors.password && touched.password
//                       ? "invalid-border"
//                       : ""
//                   }
//                 />
//                 {touched.password && !isClicked ? (
//                   <StyledAiOutlineEyeInvisible
//                     color={theme.colors.white}
//                     onClick={openPassword}
//                   />
//                 ) : touched.password && isClicked ? (
//                   <StyledAiOutlineEye
//                     color={theme.colors.white}
//                     onClick={openPassword}
//                   />
//                 ) : (
//                   ""
//                 )}
//               </StyledPasswordDiv>
//               {errors.password && touched.password && (
//                 <StyledError name="password" component="div" />
//               )}
//               {touched.password && !errors.password && (
//                 <StyledMessage>This is an CORRECT password</StyledMessage>
//               )}
//             </StyledInputWrap>
//           </StyledInnerDiv>
//           <StyledButton type="submit">Sign Up</StyledButton>
//           <AuthNavigate />
//         </StyledFormInsight>
//       )}
//     </StyledForm>
//   );
// };


import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { verifyThunk } from '../../redux/auth/operations';

import { signup } from "../../redux/auth/operations";
import { AuthNavigate } from "../AuthNav/AuthNav";
import { SignUpSchema } from "./SignUpAndSignInSchema";
import { yupResolver } from "@hookform/resolvers/yup"; 
import { BiCheckCircle, BiErrorCircle } from 'react-icons/bi';
import { FiEyeOff, FiEye } from 'react-icons/fi';
import {
  StyledForm,
  StyledTitle,
  StyledInputWrap,
  StyledInput,
  StyledButton,
  StyledError,
  StyledInnerDiv,
  StyledMessage,
  StyledPasswordDiv,
} from "./AuthForm.styled";
import { toast } from "react-hot-toast";
import { selectTheme } from "../../redux/theme/selectors";
import theme from "../../shared/theme";

export const SignUpForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors, isValid, dirtyFields } } = useForm({
     mode: 'onChange',
    defaultValues: { name: '', email: '', password: '' },
      resolver: yupResolver(SignUpSchema), 
  });
  const [isClicked, setIsClicked] = useState(false);
  const currentTheme = useSelector(selectTheme);
  const selectedTheme = theme(currentTheme);

  const onSubmit = (data) => {
    dispatch(signup(data));
  };

  const togglePasswordVisibility = () => {
    setIsClicked(!isClicked);
  };

  return (

    <StyledForm  autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <StyledTitle>Registration</StyledTitle>
      <StyledInnerDiv>
        <StyledInputWrap>
          <StyledInput
            type="text"
            name="name"
            placeholder="Name"
                      {...register("name")}
                        className={errors.name ? "invalid-border" : dirtyFields.name ? "valid-border" : ""}
          />
          {errors.name && (
            <div>
                         <BiErrorCircle
                style={{
                  width: '24px',
                  height: '24px',
                    color: 'red',
                  display: 'flex',
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                right: '24px',

                }}
              />
              <StyledError>{errors.name.message}</StyledError>
            </div>
          )}
          {!errors.name && dirtyFields.name && (
            <div>
                         <BiCheckCircle
                style={{
                  width: '24px',
                  height: '24px',
                  color: '#3CBC81',
                  display: 'flex',
                  position: 'absolute',
                 top: '50%',
                 transform: 'translateY(-50%)',
                 right: '24px',
                }}
              />

              <StyledMessage>This is a CORRECT name</StyledMessage>
            </div>
          )}
        </StyledInputWrap>

        <StyledInputWrap>
          <StyledInput
            type="email"
            name="email"
            placeholder="Email"
             {...register("email")}
           className={errors.email ? "invalid-border" : dirtyFields.email ? "valid-border" : ""}
          />
          {errors.email && (
            <div>
               <BiErrorCircle
                style={{
                  width: '24px',
                  height: '24px',
                    color: 'red',
                  display: 'flex',
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                right: '24px',
                }}
              />
              <StyledError>{errors.email.message}</StyledError>
            </div>
          )}
          {!errors.email && dirtyFields.email &&(
            <div>
             <BiCheckCircle
                style={{
                  width: '24px',
                  height: '24px',
                  color: '#3CBC81',
                  display: 'flex',
                  position: 'absolute',
                 top: '50%',
                 transform: 'translateY(-50%)',
                 right: '24px',
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
               className={errors.password ? "invalid-border" : dirtyFields.password ? "valid-border" : ""}
            />
            {errors.password && (
              <StyledError>{errors.password.message}</StyledError>
            )}
            {!errors.password && dirtyFields.password &&(
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
                <FiEye color={theme.colors.white} />
              ) : (
                <FiEyeOff color={theme.colors.white} />

              )}
            </span>
          </Styled

Div>
        </StyledInputWrap>
      </StyledInnerDiv>
          <StyledButton type="submit" disabled={!isValid}>Sign Up</StyledButton>
      <AuthNavigate />
    </StyledForm>
  );
};

export default SignUpForm;