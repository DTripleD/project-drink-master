import { useState } from "react";
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
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const [emailValue, setEmailValue] = useState("");

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async ({ email }) => {
    try {
      const res = await subscribeUser({ email });

      if (res.status === 409) {
        throw new Error("Email already subscribed");
      } else if (res.status === 400) {
        throw new Error("Error. User is not registered");
      }
      toast.success("Subscribe success");
      reset();
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setEmailValue(inputValue);
    setButtonDisabled(inputValue === "");
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
