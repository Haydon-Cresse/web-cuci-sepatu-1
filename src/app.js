// filepath: /shoe-cleaning-app/shoe-cleaning-app/src/app.js

import { initializePackages } from './components/packages.js';
import { initializeOrders } from './components/orders.js';
import { initializePayments } from './components/payments.js';

const app = () => {
    initializePackages();
    initializeOrders();
    initializePayments();
};

document.addEventListener('DOMContentLoaded', app);