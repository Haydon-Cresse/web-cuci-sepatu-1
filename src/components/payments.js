import React, { useState } from 'react';

const Payments = () => {
    const [customerId, setCustomerId] = useState('');
    const [packageType, setPackageType] = useState('');
    const [amount, setAmount] = useState('');
    const [paymentMessage, setPaymentMessage] = useState('');

    const handlePayment = (e) => {
        e.preventDefault();
        if (validateAmount(amount)) {
            // Simulate payment processing
            setPaymentMessage('Payment successful! Thank you for your order.');
            // Reset form fields
            setCustomerId('');
            setPackageType('');
            setAmount('');
        } else {
            setPaymentMessage('Invalid payment amount. Please check your details.');
        }
    };

    const validateAmount = (amount) => {
        // Add your validation logic here (e.g., check if amount is a positive number)
        return amount > 0;
    };

    return (
        <div className="payment-container">
            <h2>Payment Processing</h2>
            <form onSubmit={handlePayment}>
                <div>
                    <label>Customer ID:</label>
                    <input
                        type="text"
                        value={customerId}
                        onChange={(e) => setCustomerId(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Package Type:</label>
                    <input
                        type="text"
                        value={packageType}
                        onChange={(e) => setPackageType(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Amount:</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Pay Now</button>
            </form>
            {paymentMessage && <p>{paymentMessage}</p>}
        </div>
    );
};

export default Payments;