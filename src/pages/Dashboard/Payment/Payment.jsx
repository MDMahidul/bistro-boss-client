import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import useCart from '../../../hooks/useCart';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const [cart]=useCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0);
    const price = parseFloat(total.toFixed(2));
    //console.log(price);
    return (
      <div className="w-10/12 mx-auto">
        <SectionTitle
          subHeading="---Make The Payment---"
          heading="PAYMENT"
        ></SectionTitle>
        <div className="text-3xl mb-5">Payment</div>
        <Elements stripe={stripePromise}>
          <CheckoutForm price={price}/>
        </Elements>
      </div>
    );
};

export default Payment;