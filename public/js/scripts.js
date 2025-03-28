document.addEventListener('DOMContentLoaded', () => {
    const packageForm = document.getElementById('package-form');
    const packageCards = document.getElementById('package-cards');
    let packageList = [];

    packageForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('package-name').value;
        const price = document.getElementById('package-price').value;
        const description = document.getElementById('package-description').value;

        if (!name || price <= 0 || !description) {
            alert('Please fill in all fields with valid data.');
            return;
        }

        const newPackage = { name, price, description };
        packageList.push(newPackage);

        updatePackageCards();
        e.target.reset();
        alert('Package added successfully!');
    });

    function updatePackageDropdown() {
        const packageTypeSelect = document.getElementById('packageType');
        packageTypeSelect.innerHTML = '<option value="" disabled selected>Select Package</option>'; // Reset dropdown

        packageList.forEach((pkg) => {
            const option = document.createElement('option');
            option.value = pkg.name;
            option.textContent = pkg.name;
            packageTypeSelect.appendChild(option);
        });
    }

    function updatePackageCards() {
        const packageCards = document.getElementById('package-cards');
        packageCards.innerHTML = ''; // Clear the current list

        packageList.forEach((pkg, index) => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <h3>${pkg.name}</h3>
                <p>Price: Rp ${parseInt(pkg.price).toLocaleString('id-ID')}</p>
                <p>${pkg.description}</p>
                <button class="edit" data-id="${index}">Edit</button>
                <button class="remove" data-id="${index}">Remove</button>
            `;
            packageCards.appendChild(card);
        });

        // Update the dropdown
        updatePackageDropdown();

        // Add event listeners for edit and remove buttons
        packageCards.querySelectorAll('.edit').forEach((button) => {
            button.addEventListener('click', () => {
                const packageId = parseInt(button.dataset.id);
                editPackage(packageId);
            });
        });

        packageCards.querySelectorAll('.remove').forEach((button) => {
            button.addEventListener('click', () => {
                const packageId = parseInt(button.dataset.id);
                removePackage(packageId);
            });
        });
    }

    function editPackage(index) {
        const pkg = packageList[index];
        document.getElementById('package-name').value = pkg.name;
        document.getElementById('package-price').value = pkg.price;
        document.getElementById('package-description').value = pkg.description;

        // Remove the package temporarily to allow editing
        packageList.splice(index, 1);
        updatePackageCards();
    }

    function removePackage(index) {
        packageList.splice(index, 1);
        updatePackageCards();
        alert('Package removed successfully!');
    }
});

// filepath: d:\shoe-cleaning-app\public\js\scripts.js
const employeeList = [];

function updateEmployeeTable() {
    const employeeTable = document.getElementById('employee-list');
    employeeTable.innerHTML = ''; // Clear the current list

    employeeList.forEach((employee, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h3>${employee.name}</h3>
            <p>Role: ${employee.role}</p>
            <p>Contact: ${employee.contact}</p>
            <button class="edit-employee" data-id="${index}">Edit</button>
            <button class="remove-employee" data-id="${index}">Remove</button>
        `;
        employeeTable.appendChild(card);
    });

    // Add event listeners for edit and remove buttons
    employeeTable.querySelectorAll('.edit-employee').forEach((button) => {
        button.addEventListener('click', () => {
            const employeeId = parseInt(button.dataset.id);
            editEmployee(employeeId);
        });
    });

    employeeTable.querySelectorAll('.remove-employee').forEach((button) => {
        button.addEventListener('click', () => {
            const employeeId = parseInt(button.dataset.id);
            removeEmployee(employeeId);
        });
    });
}

function editEmployee(index) {
    const employee = employeeList[index];

    // Populate the form with the selected employee's data
    document.getElementById('employee-id').value = employee.id;
    document.getElementById('employee-name').value = employee.name;
    document.getElementById('employee-role').value = employee.role;
    document.getElementById('employee-contact').value = employee.contact;
    document.getElementById('employee-password').value = employee.password;

    // Add a hidden field or flag to indicate editing mode
    document.getElementById('employee-form').dataset.editingIndex = index;

    showMessage('You are now editing this employee.', null, true);
}

document.getElementById('employee-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const id = document.getElementById('employee-id').value;
    const name = document.getElementById('employee-name').value;
    const role = document.getElementById('employee-role').value;
    const contact = document.getElementById('employee-contact').value;
    const password = document.getElementById('employee-password').value;

    const editingIndex = e.target.dataset.editingIndex;

    if (editingIndex !== undefined) {
        // Update the existing employee
        employeeList[editingIndex] = { id, name, role, contact, password };
        delete e.target.dataset.editingIndex; // Clear editing mode
        showMessage('Employee updated successfully!');
    } else {
        // Add a new employee
        employeeList.push({ id, name, role, contact, password });
        showPopupMessage('Employee added successfully!');
    }

    updateEmployeeTable();
    e.target.reset();
});

const transactionHistory = []; // Array to store transaction history

function updateTransactionHistory() {
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = ''; // Clear the current history

    transactionHistory.forEach((order, index) => {
        const row = document.createElement('div');
        row.classList.add('transaction-row');
        row.innerHTML = `
            <p><strong>Order #${index + 1}</strong></p>
            <p>Customer ID: ${order.customerId}</p>
            <p>Shoe Details: ${order.shoeDetails}</p>
            <p>Package: ${order.packageType}</p>
            <p>Amount: Rp ${parseInt(order.paymentAmount).toLocaleString('id-ID')}</p>
            <button class="print-invoice" data-index="${index}">Print Invoice</button>
        `;
        historyList.appendChild(row);
    });

    // Add event listeners for "Print Invoice" buttons
    document.querySelectorAll('.print-invoice').forEach((button) => {
        button.addEventListener('click', (e) => {
            const index = parseInt(button.dataset.index);
            printInvoice(transactionHistory[index]);
        });
    });
}

function printInvoice(order) {
    const invoiceContent = `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ccc; background-color: #fff;">
            <h2 style="color: #1565c0;">Invoice</h2>
            <p><strong>Order #:</strong> ${order.customerId}</p>
            <p><strong>Shoe Details:</strong> ${order.shoeDetails}</p>
            <p><strong>Package:</strong> ${order.packageType}</p>
            <p><strong>Amount:</strong> Rp ${parseInt(order.paymentAmount).toLocaleString('id-ID')}</p>
        </div>
    `;

    const invoiceElement = document.createElement('div');
    invoiceElement.innerHTML = invoiceContent;
    document.body.appendChild(invoiceElement);

    html2canvas(invoiceElement).then((canvas) => {
        const link = document.createElement('a');
        link.download = `invoice-${order.customerId}.jpg`;
        link.href = canvas.toDataURL('image/jpeg');
        link.click();
        document.body.removeChild(invoiceElement); // Clean up
    });
}

document.getElementById('order-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const customerId = document.getElementById('customerId').value;
    const shoeDetails = document.getElementById('shoeDetails').value;
    const packageType = document.getElementById('packageType').value;
    const paymentAmount = document.getElementById('paymentAmount').value;

    if (!customerId || !shoeDetails || !packageType || paymentAmount <= 0) {
        alert('Please fill in all fields with valid data.');
        return;
    }

    const newOrder = { customerId, shoeDetails, packageType, paymentAmount };
    transactionHistory.push(newOrder);

    updateTransactionHistory();
    e.target.reset();

    showPopupMessage('Transaction completed successfully!');
});
