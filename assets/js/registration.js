let currentDate = new Date();
	let year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    let date = currentDate.getDate();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds()
    let myFormat = year + "/" + month + "/" + date + "   " + hours + ":" + minutes + ":" + seconds;
    document.getElementById("dt").textContent = myFormat;



function showMessage(input, message, type) {
    const msg = input.parentNode.querySelector("small");
    msg.innerText = message;
    input.className = type ? "success" : "error";
    return type;
}

function showError(input, message) {
    return showMessage(input, message, false);
}

function showSuccess(input) {
    return showMessage(input, "", true);
}

function hasValue(input, message) {
    if (input.value.trim() === "") {
        return showError(input, message);
    }
    return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
    if (!hasValue(input, requiredMsg)) {
        return false;
    }
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const email = input.value.trim();
    if (!emailRegex.test(email)) {
        return showError(input, invalidMsg);
    }
    return true;
}


function showMsg(event) {
   
    event.preventDefault();

    const form = document.getElementById("regForm");

    let fnValid = hasValue(form.elements["firstName"], "First Name is required");
    let emailValid = validateEmail(form.elements["email"], "Email is required", "Invalid email format");
    let pwValid = hasValue(form.elements["password"], "Password is required");
    let cpwValid = hasValue(form.elements["confirmPassword"], "Confirm Password is required");

  
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let isPasswordMatched = true;

    if (pwValid && cpwValid) {
        if (password !== confirmPassword) {
            showError(form.elements["confirmPassword"], "Passwords do not match");
            isPasswordMatched = false;
        } else {
            showSuccess(form.elements["confirmPassword"]);
        }
    }

   
    let termsChecked = document.getElementById("termsCheckbox").checked;
    if (!termsChecked) {
        alert("Please read and agree to the Terms & Conditions.");
    }

  
    if (fnValid && emailValid && pwValid && cpwValid && isPasswordMatched && termsChecked) {
        alert("Application submitted successfully!\n\nPlease visit the library front desk with your ID card to complete your registration.");
        
        window.location.href = "../index.html";
    }
}