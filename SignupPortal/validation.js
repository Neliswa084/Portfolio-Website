// Part 2: Client-Side Validation

let form = document.getElementById("signupForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let terms = document.getElementById("terms");

    let usernameError = document.getElementById("usernameError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let termsError = document.getElementById("termsError");

    // Clear previous errors and reset borders
    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    termsError.textContent = "";
    username.style.border = "";
    email.style.border = "";
    password.style.border = "";

    let isValid = true;

    // Check username
    if (username.value === "") {
        usernameError.textContent = "Username is required.";
        username.style.border = "1px solid red";
        isValid = false;
    }

    // Check email against pattern
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value === "") {
        emailError.textContent = "Email is required.";
        email.style.border = "1px solid red";
        isValid = false;
    } else if (!emailPattern.test(email.value)) {
        emailError.textContent = "Please enter a valid email address.";
        email.style.border = "1px solid red";
        isValid = false;
    }

    // Check password - must be at least 8 characters
    if (password.value === "") {
        passwordError.textContent = "Password is required.";
        password.style.border = "1px solid red";
        isValid = false;
    } else if (password.value.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters.";
        password.style.border = "1px solid red";
        isValid = false;
    }

    // Check terms checkbox
    if (!terms.checked) {
        termsError.textContent = "You must agree to the Terms and Conditions.";
        isValid = false;
    }

    if (isValid) {
        alert("Signup successful! Welcome, " + username.value + ".");
        form.reset();
    }
});

// Part 3: Timing Events - Resend Verification button countdown

let resendBtn = document.getElementById("resendBtn");
let secondsLeft = 10;

let countdown = setInterval(function() {
    secondsLeft--;
    resendBtn.textContent = "Resend Verification (" + secondsLeft + "s)";

    if (secondsLeft === 0) {
        clearInterval(countdown);
        resendBtn.disabled = false;
        resendBtn.textContent = "Resend Verification";
    }
}, 1000);
