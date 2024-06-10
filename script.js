let cart = [];

function addToCart(item) {
    cart.push(item);
    document.getElementById('cart-count').innerText = cart.length;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerText = item;
        li.innerHTML += ` <button onclick="removeFromCart(${index})">Remove</button>`;
        cartItems.appendChild(li);
    });
}

function removeFromCart(index) {
    cart.splice(index, 1);
    document.getElementById('cart-count').innerText = cart.length;
    updateCart();
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty');
    } else {
        alert('Proceed to payment');
        // Here you would add your payment integration
    }
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us!');
});

document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Sign In functionality not implemented yet.');
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
    } else {
        alert('Sign Up functionality not implemented yet.');
    }
});
