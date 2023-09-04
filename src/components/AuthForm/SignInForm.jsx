// // import { useNavigate } from "react-router";
// import toast from "react-hot-toast";
// import { useDispatch } from "react-redux";
// import { signin, refreshUser } from "../../redux/auth/operations";
// import { AuthNavigate } from "../AuthNav/AuthNav";
// import { useState } from "react";
// // import { selectIsClicked } from '../../redux/auth/selectors';
// // import { handleEyeClick } from '../../redux/auth/authSlice';
// import { SignInSchema } from "./SignUpAndSignInSchema";
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

// export const SignInForm = () => {
// //   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   //   const isClicked = useSelector(selectIsClicked);
//   const [isClicked, setIsClicked] = useState(false);

//   const openPassword = () => {
//     setIsClicked((prevIsClicked) => !prevIsClicked);
//   };

//   const handleSubmit = async (values) => {
//     try {
//       const res = await dispatch(signin(values));
//       if (res.payload.response?.status === 401) {
//         toast.error(res.payload.response.data.message);
//         throw new Error(res.payload.response.data.message);
//       }

//       toast.success("Authentication successful");
//       dispatch(refreshUser());
//       return;
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <>
//       <StyledForm
//         initialValues={{
//           email: "",
//           password: "",
//         }}
//         validationSchema={SignInSchema}
//         onSubmit={(values) => handleSubmit(values)}
//       >
//         {({ errors, touched, handleChange, setFieldTouched }) => (
//           <StyledFormInsight>
//             <StyledTitle>Sign In</StyledTitle>
//             <StyledInnerDiv>
//               <StyledInputWrap>
//                 <StyledInput
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   onChange={(e) => {
//                     setFieldTouched("email");
//                     handleChange(e);
//                   }}
//                   className={
//                     touched.email && !errors.email
//                       ? "valid-border"
//                       : errors.email && touched.email
//                       ? "invalid-border"
//                       : ""
//                   }
//                 />
//                 {errors.email && touched.email && (
//                   <div>
//                     <StyledIconError color="red" />{" "}
//                     <StyledError name="email" component="div" />
//                   </div>
//                 )}
//                 {touched.email && !errors.email && (
//                   <div>
//                     <StyledIconChecked color="green" />{" "}
//                     <StyledMessage>This is an CORRECT email</StyledMessage>
//                   </div>
//                 )}
//               </StyledInputWrap>
//               <StyledInputWrap>
//                 <StyledPasswordDiv>
//                   <StyledInput
//                     id="password"
//                     type={isClicked ? "text" : "password"}
//                     name="password"
//                     placeholder="Password"
//                     onChange={(e) => {
//                       setFieldTouched("password");
//                       handleChange(e);
//                     }}
//                     className={
//                       touched.password && !errors.password
//                         ? "valid-border"
//                         : errors.password && touched.password
//                         ? "invalid-border"
//                         : ""
//                     }
//                   />
//                   {touched.password && !isClicked ? (
//                     <StyledAiOutlineEyeInvisible
//                       color={theme.colors.white}
//                       onClick={openPassword}
//                     />
//                   ) : touched.password && isClicked ? (
//                     <StyledAiOutlineEye
//                       color={theme.colors.white}
//                       onClick={openPassword}
//                     />
//                   ) : (
//                     ""
//                   )}
//                 </StyledPasswordDiv>
//                 {errors.password && touched.password && (
//                   <StyledError name="password" component="div" />
//                 )}
//                 {touched.password && !errors.password && (
//                   <StyledMessage>This is an CORRECT password</StyledMessage>
//                 )}
//               </StyledInputWrap>
//             </StyledInnerDiv>
//             <StyledButton type="submit">Sign In</StyledButton>
//             <AuthNavigate />
//           </StyledFormInsight>
//         )}
//       </StyledForm>
//     </>
//   );
// };



import  { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { signin, refreshUser } from '../../redux/auth/operations';
import { AuthNavigate } from '../AuthNav/AuthNav';
import { useForm } from 'react-hook-form'; // Импортируем useForm из react-hook-form
import { SignInSchema } from './SignUpAndSignInSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { BiCheckCircle, BiErrorCircle } from 'react-icons/bi';
import { FiEyeOff, FiEye } from 'react-icons/fi';
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

} from './AuthForm.styled';
import { theme } from '../../main';
import { selectTheme } from "../../redux/theme/selectors";
import theme from "../../shared/theme";

export const SignInForm = () => {
  const { register, handleSubmit,formState: { errors,isValid, dirtyFields }, } = useForm({
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
     <StyledForm onSubmit={handleSubmit(onSubmit)} 
      >
        <StyledFormInsight>
          <StyledTitle>Sign In</StyledTitle>
          <StyledInnerDiv>
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
          </StyledPasswordDiv>
        </StyledInputWrap>
          </StyledInnerDiv>
          <StyledButton type="submit" disabled={!isValid}>Sign In</StyledButton>
          <AuthNavigate />
        </StyledFormInsight>

 
      </StyledForm>
       </>      
  );
};