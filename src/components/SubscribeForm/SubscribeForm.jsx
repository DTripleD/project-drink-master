import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { selectSubscribe } from "../../redux/subscribe/selector";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { subscripbeValidationSchema } from "./subscripbeValidationSchema";

import { subscribeUser } from "../../shared/api/subscribe";
import {
  FooterSubscribeWrapper,
  FooterSubscribetext,
  FooterSubscribeLabel,
  FooterSubscribeInput,
  FooterSubscribeButton,
} from "./SubscribeForm.styled";

const SubscribeForm = () => {
  const user = useSelector(selectSubscribe);
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const [emailValue, setEmailValue] = useState('');

  const { register, handleSubmit, formState, reset } = useForm();

  const onSubmit = async ({ email }) => {
    try {
      await subscribeUser({ email });
      toast.success("Subscribe success");
      reset();
    } catch (error) {
      if (error.response.status === 409) {
        toast.error("Email already subscribed");
        reset();
      } else {
        toast.error("Error. User is not registered");
        reset();
      }
    }
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setEmailValue(inputValue); 
    setButtonDisabled(inputValue === ''); 
  };

  return (
    <FooterSubscribeWrapper onSubmit={handleSubmit(onSubmit)}>
      <FooterSubscribetext>
        Subscribe up to our newsletter. Be in touch with latest news and special
        offers, etc.
      </FooterSubscribetext>

      <FooterSubscribeLabel>
        <FooterSubscribeInput
          validationSchema={subscripbeValidationSchema}
          type="email"
          name="email"
          placeholder="Enter the email"
          {...register("email", {
            required: "Email is required",
          })}
          value={emailValue} 
          onChange={handleInputChange} 
        />
      </FooterSubscribeLabel>

      <FooterSubscribeButton type="submit" disabled={isButtonDisabled}>
        Subscribe
      </FooterSubscribeButton>
    </FooterSubscribeWrapper>
  );
};

export default SubscribeForm;
