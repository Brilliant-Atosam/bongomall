import React from 'react';

export const Success = () => {
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
      <h1
        style={{
          fontSize: '60px',
          padding: '20px',
          color: 'white',
          background: 'teal',
          borderRadius: '5px',
        }}
      >
        Successful!
      </h1>
      <p style={{ fontSize: '24px', textAlign: 'center' }}>
        Thank you for your payment. Your products will be shipped immediately
      </p>
    </div>
  );
};
