import React, { useEffect, useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useNavigate } from 'react-router-dom';
const KEY =
  'pk_test_51Hsfe5BKUeVY4ightZdbA0zmXyFaDJ6rpiEiMgmig9TKHUom758q44gbj95Yx04ae1s4LqQHUP2JG1Q0hTjQ2SUI00FSnK0FXy';
export const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();
  const onToken = token => {
    setStripeToken(token);
  };
  useEffect(() => {
    const makeRequest = async () => {
      const res = await fetch('http://localhost:8000/api/checkout/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tokenId: stripeToken.id,
          amount: 40000,
        }),
      });
      navigate('/success')
      console.log(res);
    };
    stripeToken && makeRequest();
  }, [stripeToken, navigate]);
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {stripeToken ? (
        <span>Processing. Please wait...</span>
      ) : (
        <StripeCheckout
          name='10minutes shop'
          image=''
          currency='USD'
          amount={2000}
          // billingAddress
          // shippingAddress
          email='man@men.us'
          stripeKey={KEY}
          description='Your total is $20'
          token={onToken}
        >
          <button
            style={{
              padding: '10px 20px',
              background: 'black',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              textTransform: 'uppercase',
              cursor: 'pointer',
            }}
          >
            click to pay
          </button>
        </StripeCheckout>
      )}
    </div>
  );
};
