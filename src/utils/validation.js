export function validatePaymentAmount(inputAmount, expectedAmount) {
    if (isNaN(inputAmount) || inputAmount <= 0) {
        return { valid: false, message: "Please enter a valid payment amount." };
    }
    if (inputAmount !== expectedAmount) {
        return { valid: false, message: "Payment amount does not match the expected price." };
    }
    return { valid: true, message: "" };
}

export function validatePackageInput(packageName, packagePrice) {
    if (!packageName || packageName.trim() === "") {
        return { valid: false, message: "Package name cannot be empty." };
    }
    if (isNaN(packagePrice) || packagePrice <= 0) {
        return { valid: false, message: "Please enter a valid package price." };
    }
    return { valid: true, message: "" };
}

export function validateOrderInput(customerId, shoeDetails) {
    if (!customerId || customerId.trim() === "") {
        return { valid: false, message: "Customer ID cannot be empty." };
    }
    if (!shoeDetails || shoeDetails.trim() === "") {
        return { valid: false, message: "Shoe details cannot be empty." };
    }
    return { valid: true, message: "" };
}