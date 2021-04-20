import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';


// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');


const PaymentSystem = ({ setTransactionDetails}) => {

    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm setTransactionDetails={setTransactionDetails}></CheckoutForm>
        </Elements>
        
    );
};

export default PaymentSystem;