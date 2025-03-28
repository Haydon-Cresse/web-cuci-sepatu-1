import React, { useState } from 'react';

const Orders = () => {
    const [customerId, setCustomerId] = useState('');
    const [shoeDetails, setShoeDetails] = useState('');
    const [packageType, setPackageType] = useState('');
    const [paymentAmount, setPaymentAmount] = useState('');
    const [message, setMessage] = useState('');

    const handleAddOrder = (e) => {
        e.preventDefault();
        // Logic to add order
        setMessage('Order added successfully!');
    };

    const handleEditOrder = (e) => {
        e.preventDefault();
        // Logic to edit order
        setMessage('Order edited successfully!');
    };

    const handleRemoveOrder = (e) => {
        e.preventDefault();
        // Logic to remove order
        setMessage('Order removed successfully!');
    };

    const handlePayment = (e) => {
        e.preventDefault();
        // Logic to process payment
        if (paymentAmount <= 0) {
            setMessage('Invalid payment amount!');
        } else {
            setMessage('Payment processed successfully!');
        }
    };

    return (
        <div>
            <h2>Manage Orders</h2>
            <form onSubmit={handleAddOrder}>
                <input
                    type="text"
                    placeholder="Customer ID"
                    value={customerId}
                    onChange={(e) => setCustomerId(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Shoe Details"
                    value={shoeDetails}
                    onChange={(e) => setShoeDetails(e.target.value)}
                    required
                />
                <select
                    value={packageType}
                    onChange={(e) => setPackageType(e.target.value)}
                    required
                >
                    <option value="" disabled>Select Package Type</option>
                    <option value="Basic Cleaning">Basic Cleaning</option>
                    <option value="Deep Cleaning">Deep Cleaning</option>
                    <option value="Premium Cleaning">Premium Cleaning</option>
                </select>
                <input
                    type="number"
                    placeholder="Payment Amount"
                    value={paymentAmount}
                    onChange={(e) => setPaymentAmount(e.target.value)}
                    required
                />
                <button type="submit">Add Order</button>
                <button onClick={handleEditOrder}>Edit Order</button>
                <button onClick={handleRemoveOrder}>Remove Order</button>
                <button onClick={handlePayment}>Process Payment</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Orders;