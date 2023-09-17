// Sample user data (replace with your own user data)
const users = [];

// Get DOM elements
const loginContainer = document.getElementById("login-container");
const registerContainer = document.getElementById("register-container");
const securedContainer = document.getElementById("secured-container");
const errorDiv = document.getElementById("error");
const registerErrorDiv = document.getElementById("register-error");
const showRegisterLink = document.getElementById("show-register");
const showLoginLink = document.getElementById("show-login");

// Show registration form
showRegisterLink.addEventListener("click", (e) => {
    e.preventDefault();
    loginContainer.classList.add("hidden");
    registerContainer.classList.remove("hidden");
});

// Show login form
showLoginLink.addEventListener("click", (e) => {
    e.preventDefault();
    loginContainer.classList.remove("hidden");
    registerContainer.classList.add("hidden");
});

// Event listener for registration form submission
document.getElementById("register-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const registerUsername = document.getElementById("register-username").value;
    const registerPassword = document.getElementById("register-password").value;

    if (!users.some((user) => user.username === registerUsername)) {
        // Register the user
        users.push({ username: registerUsername, password: registerPassword });
        registerErrorDiv.textContent = "";
        document.getElementById("register-form").reset();
        loginContainer.classList.remove("hidden");
        registerContainer.classList.add("hidden");
    } else {
        // Username already exists
        registerErrorDiv.textContent = "Username already exists. Please choose a different one.";
    }
});

// Event listener for login form submission
document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const loginUsername = document.getElementById("login-username").value;
    const loginPassword = document.getElementById("login-password").value;
    const user = users.find((u) => u.username === loginUsername && u.password === loginPassword);

    if (user) {
        // Successful login
        errorDiv.textContent = "";
        document.getElementById("login-form").reset();
        loginContainer.classList.add("hidden");
        securedContainer.classList.remove("hidden");
        securedContainer.querySelector("h2").textContent = `Welcome, ${loginUsername}!`;
    } else {
        // Login failed
        errorDiv.textContent = "Invalid username or password. Please try again.";
    }
});

// Logout button event listener
document.getElementById("logout-button").addEventListener("click", (e) => {
    e.preventDefault();
    securedContainer.classList.add("hidden");
    loginContainer.classList.remove("hidden");
});
