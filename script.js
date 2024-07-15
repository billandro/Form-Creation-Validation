document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener("submit", function(event) {
        // prevent default form behaviour
        event.preventDefault();

        let isValid = true;
        let messages = [];

        // username validation
        const username = document.getElementById("username").value.trim();
        if (username.length < 3) {
            isValid = false;
            messages.push("Username length must be >3");
        }

        // email validation
        const email = document.getElementById("email").value.trim();
        if (email.includes("@") && email.includes(".")) {
            isValid = false;
            messages.push("Please enter a valid email address");
        }

        // password validation
        const password = document.getElementById("password").value.trim();
        if (password.length < 8) {
            isValid = false;
            messages.push("The password must have 8 or more charcters");
        }

        // display feedback
        feedbackDiv.style.display = "block";
        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
        } else {
            for (let i = 0; i < messages.length; i++) {
                if (i === 0) {
                    feedbackDiv.innerHTML += `<div id="form-feedback">${messages[i]}</div>`;
                } else {
                    feedbackDiv.innerHTML += `<div id="form-feedback">${messages[i]}</div>`;
                }
            }
            feedbackDiv.style.color = "#dc3545";
        }

        // submit form
        form.submit();
    });

    console.log("Everything has loaded")
});