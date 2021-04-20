import React, { useMemo, useState } from "react";
import './CheckoutForm.css';
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from "@stripe/react-stripe-js";


const useOptions = () => {
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize: '16px',
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#9e2146"
        }
      }
    }),
    []
  );

  return options;
};

const CheckoutForm = ({setTransactionDetails}) => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const [paymentError, setPaymentError] = useState();
  const [paymentSuccess, setPaymentSuccess] = useState();

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement)
    });
    if(error){
      setPaymentError(error.message);
      setPaymentSuccess(null);
    }
    else{
      setPaymentSuccess(paymentMethod.id);
      setTransactionDetails(paymentMethod);
      setPaymentError(null);
      console.log("[PaymentMethod]", paymentMethod);
    }
    
    
  };

  return (
    <div className="payment">
            <form onSubmit={handleSubmit}>
                <label className="col-10">
                  Card number
                  <CardNumberElement
                    options={options}
                    onReady={() => {
                      console.log("CardNumberElement [ready]");
                    }}
                    onChange={event => {
                      console.log("CardNumberElement [change]", event);
                    }}
                    onBlur={() => {
                      console.log("CardNumberElement [blur]");
                    }}
                    onFocus={() => {
                      console.log("CardNumberElement [focus]");
                    }}
                  />
                </label>
                <br/>
                <label className="col-10">
                  Expiration date
                  <CardExpiryElement
                    options={options}
                    onReady={() => {
                      console.log("CardNumberElement [ready]");
                    }}
                    onChange={event => {
                      console.log("CardNumberElement [change]", event);
                    }}
                    onBlur={() => {
                      console.log("CardNumberElement [blur]");
                    }}
                    onFocus={() => {
                      console.log("CardNumberElement [focus]");
                    }}
                  />
                </label>
                <br/>
                <label className="col-10">
                  CVC
                  <CardCvcElement
                    options={options}
                    onReady={() => {
                      console.log("CardNumberElement [ready]");
                    }}
                    onChange={event => {
                      console.log("CardNumberElement [change]", event);
                    }}
                    onBlur={() => {
                      console.log("CardNumberElement [blur]");
                    }}
                    onFocus={() => {
                      console.log("CardNumberElement [focus]");
                    }}
                  />
                </label>
                <br/>
              <button type="submit" disabled={!stripe}>Pay</button>
          </form>
          {
            paymentError && <p style={{color: 'red'}} >{paymentError}</p>
          }
          {
            paymentSuccess && <p style={{color: 'green'}} >Thank you for the payment</p>
          }
    </div>
  );
};

export default CheckoutForm;
