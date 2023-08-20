import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const CheckoutForm = ({price}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError,setCardError] = useState('');
    const [axiosSecure]=useAxiosSecure();
    const [clientSecret,setClientSecret]=useState('')
    const {user}=useAuth();
    const [processing,setProcessing] = useState(false);
    const [transactionId,setTransactionId] = useState('')

    useEffect(()=>{
      console.log(price);
        axiosSecure.post("/create-payment-intent",{price})
        .then(res=>{
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        })
    },[])

    const handleSubmit=async(e)=>{
         e.preventDefault();

         if(!stripe || !elements){
            return
         }
         const card = elements.getElement(CardElement);
         if (card === null) {
           return;
         }
         const {error,paymentMethod}=await stripe.createPaymentMethod({
            type:'card',
            card
         })

         if(error){
          console.log(error);
          setCardError(error.message);
         }else{
          //console.log('payment method',paymentMethod);
          setCardError('');
         }

         setProcessing(true);

         const { paymentIntent, error:confirmError } = await stripe.confirmCardPayment(
           clientSecret,
           {
             payment_method: {
               card: card,
               billing_details: {
                 email: user?.email || 'unknown',
                 name: user?.displayName || 'anonymous',
               },
             },
           }
         );
         if(confirmError){
          setCardError(confirmError);
         }
         console.log('payment intent',paymentIntent);
         setProcessing(false)
         if(paymentIntent.status === 'succeeded'){
          setTransactionId(paymentIntent.id);
          //todo next 
         }
    }
    return (
      <>
        <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <button
            className="btn btn-warning px-10 btn-sm mt-5"
            type="submit"
            disabled={!stripe || !clientSecret || processing}
          >
            Pay
          </button>
        </form>
        {cardError && <p className="text-red-600">{cardError}</p>}
        {transactionId && <p className="text-green-600">Transaction Complete: {transactionId}</p>}
      </>
    );
};

export default CheckoutForm;