import React, { useState } from "react";

const PaymentPage = () => {
  const [paid, setPaid] = useState(false);

  const handlePayment = () => {
    setTimeout(() => {
      setPaid(true);
    }, 2000);
  };

  return (
    <div className="text-center">
      <h2>Mock Payment</h2>
      {!paid ? (
        <>
          <p>Click below to simulate payment</p>
          <button className="btn btn-success" onClick={handlePayment}>
            Pay Now
          </button>
        </>
      ) : (
        <div className="alert alert-success mt-4">
          Payment Successful! 🎉 Thank you for your purchase.
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
