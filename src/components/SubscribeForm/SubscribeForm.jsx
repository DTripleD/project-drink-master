import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchSubscribe } from '../../redux/subscribe/operations';
import { selectSubscribe } from "../../redux/subscribe/selector";
import { useForm } from "react-hook-form";

import { toast } from 'react-hot-toast';
import {
    FooterSubscribeWrapper,
    FooterSubscribetext,
    FooterSubscribeLabel,
    FooterSubscribeInput,
   
    FooterSubscribeButton,
} from './SubscribeForm.styled';

 const SubscribeForm = () => {
    // const dispatch = useDispatch();
    // const [subscribeState, setSubscribeState] = useState('');

    // const handleSubmitSubscribe = e => {
    //     e.preventDefault();
    //     setSubscribeState(e.currentTarget.subscribeEmail.value);
    //     dispatch(fetchSubscribe({ subscribeState }));
    //     setSubscribeState('');
    //     toast.success('Successfully send email!');
    // };
     
 
         const dispatch = useDispatch();
         const user = useSelector(selectSubscribe);

         const { register, setValue, handleSubmit } = useForm();

         const [subscribeState, setSubscribeState] = useState(''); 

         const onSubmit = (data) => {
             dispatch(fetchSubscribe({ email: data.email }));
         };

         useEffect(() => {
             if (user?.email) {
                 setValue('email', user.email);
                 setSubscribeState(user.email); 
             }
         }, [user, setValue]);



    return (
        <FooterSubscribeWrapper onSubmit={handleSubmit(onSubmit)}>
            
               
                <FooterSubscribetext>
                Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.
                </FooterSubscribetext>
            

            <FooterSubscribeLabel>
                <FooterSubscribeInput
                    onChange={e => setSubscribeState(e.currentTarget.value)}
                    value={subscribeState}
                    type="email"
                    name="email"
                    placeholder="Enter the email"
                    
                />
                
            </FooterSubscribeLabel>

            <FooterSubscribeButton type="submit" disabled={!subscribeState}>
                Subscribe
            </FooterSubscribeButton>
        </FooterSubscribeWrapper>
    );
};


    
export default SubscribeForm;


// return (
//     <FooterSubscribeWrapper onSubmit={handleSubmitSubscribe}>


//         <FooterSubscribetext>
//             Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.
//         </FooterSubscribetext>


//         <FooterSubscribeLabel>
//             <FooterSubscribeInput
//                 onChange={e => setSubscribeState(e.currentTarget.value)}
//                 value={subscribeState}
//                 type="email"
//                 name="subscribeEmail"
//                 placeholder="Enter the email "
//             />

//         </FooterSubscribeLabel>

//         <FooterSubscribeButton type="submit" disabled={!subscribeState}>
//             Subscribe
//         </FooterSubscribeButton>
//     </FooterSubscribeWrapper>
// );
// };



// export default SubscribeForm;