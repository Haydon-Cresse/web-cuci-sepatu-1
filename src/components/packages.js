// filepath: /shoe-cleaning-app/shoe-cleaning-app/src/components/packages.js

const packages = [];

export function addPackage(packageDetails) {
    packages.push(packageDetails);
    alert('Package added successfully!');
}

export function editPackage(index, updatedDetails) {
    if (index >= 0 && index < packages.length) {
        packages[index] = updatedDetails;
        alert('Package updated successfully!');
    } else {
        alert('Package not found!');
    }
}

export function removePackage(index) {
    if (index >= 0 && index < packages.length) {
        packages.splice(index, 1);
        alert('Package removed successfully!');
    } else {
        alert('Package not found!');
    }
}

export function getPackages() {
    return packages;
}