import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { fetchSubscribe } from '../../redux/subscribe/operations';
import { toast } from 'react-hot-toast';
import {
    FooterSubscribeWrapper,
    FooterSubscribetext,
    FooterSubscribeLabel,
    FooterSubscribeInput,
   
    FooterSubscribeButton,
} from './SubscribeForm.styled';

 const SubscribeForm = () => {
    const dispatch = useDispatch();
    const [subscribeState, setSubscribeState] = useState('');

    const handleSubmitSubscribe = e => {
        e.preventDefault();
        setSubscribeState(e.currentTarget.subscribeEmail.value);
        dispatch(fetchSubscribe({ subscribeState }));
        setSubscribeState('');
        toast.success('Successfully send email!');
    };

    return (
        <FooterSubscribeWrapper onSubmit={handleSubmitSubscribe}>
            
               
                <FooterSubscribetext>
                Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.
                </FooterSubscribetext>
            

            <FooterSubscribeLabel>
                <FooterSubscribeInput
                    onChange={e => setSubscribeState(e.currentTarget.value)}
                    value={subscribeState}
                    type="email"
                    name="subscribeEmail"
                    placeholder="Enter the email "
                />
                
            </FooterSubscribeLabel>

            <FooterSubscribeButton type="submit" disabled={!subscribeState}>
                Subcribe
            </FooterSubscribeButton>
        </FooterSubscribeWrapper>
    );
};


    
export default SubscribeForm;
//     return <div>SubscribeForm</div>;
// };

// export default SubscribeForm;