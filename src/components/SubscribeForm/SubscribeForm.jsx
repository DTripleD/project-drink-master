import { useDispatch, useSelector } from 'react-redux';


import { selectSubscribe } from "../../redux/subscribe/selector";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { subscripbeValidationSchema } from "./subscripbeValidationSchema";

import { subscribeUser } from "../../shared/api/subscribe"
import {
    FooterSubscribeWrapper,
    FooterSubscribetext,
    FooterSubscribeLabel,
    FooterSubscribeInput,
   
    FooterSubscribeButton,
} from './SubscribeForm.styled';



 const SubscribeForm = () => {
   
     const user = useSelector(selectSubscribe);


     const { register, handleSubmit, formState, reset } = useForm();
     
     
     const onSubmit = async ({email}) => {
         try {
             await subscribeUser({ email });
             toast.success('Subscribe success');
             reset();
             
             
         } catch (error) {
             if (error.response.status === 409) {
                 toast.error('Email already subscribed');
                 reset();
                 
                 
             } else {
                 toast.error('Error. User is not registered');
                 reset();
                 
                 
             }
         }
        
     };
 
       
    return (
        <FooterSubscribeWrapper onSubmit={handleSubmit(onSubmit)}>
            
               
                <FooterSubscribetext>
                Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.
                </FooterSubscribetext>
            

            <FooterSubscribeLabel>
                <FooterSubscribeInput
                    validationSchema={subscripbeValidationSchema}
                    type="email"
                    name="email"
                    placeholder="Enter the email"
                    {...register('email', {
                        required: true,
                        
                    })}
                    
                />
                
            </FooterSubscribeLabel>

            <FooterSubscribeButton type="submit" disabled={!formState.isValid}>
                Subscribe
            </FooterSubscribeButton>
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
        </FooterSubscribeWrapper>
    );
};


    
export default SubscribeForm;

//  const SubscribeForm = () => {
   
     
 
//          const dispatch = useDispatch();
//          const user = useSelector(selectSubscribe);

//          const { register, setValue, handleSubmit } = useForm();

//          const [subscribeState, setSubscribeState] = useState(''); 

//          const onSubmit = (data) => {
//              dispatch(fetchSubscribe({ email: data.email }));
//          };

//          useEffect(() => {
//              if (user?.email) {
//                  setValue('email', user.email);
//                  setSubscribeState(user.email); 
//              }
//          }, [user, setValue]);



//     return (
//         <FooterSubscribeWrapper onSubmit={handleSubmit(onSubmit)}>
            
               
//                 <FooterSubscribetext>
//                 Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.
//                 </FooterSubscribetext>
            

//             <FooterSubscribeLabel>
//                 <FooterSubscribeInput
//                     onChange={e => setSubscribeState(e.currentTarget.value)}
//                     value={subscribeState}
//                     type="email"
//                     name="email"
//                     placeholder="Enter the email"
                    
//                 />
                
//             </FooterSubscribeLabel>

//             <FooterSubscribeButton type="submit" disabled={!subscribeState}>
//                 Subscribe
//             </FooterSubscribeButton>
//         </FooterSubscribeWrapper>
//     );
// };


    
 //export default SubscribeForm;


